import prisma from "@/lib/prisma";
import Link from "next/link";

export default async function PrismaTasksPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; userId?: string }>;
}) {
  const params = await searchParams;
  const query = params.q || "";
  const userId = params.userId ? parseInt(params.userId) : undefined;

  let tasks = [];
  let users = [];

  try {
    // 1. getAll users for the filter dropdown
    users = await prisma.user.findMany();

    // 2. search and getTasksByUserID logic
    tasks = await prisma.task.findMany({
      where: {
        AND: [
          {
            OR: [
              { TaskTitle: { contains: query } },
              { TaskDescription: { contains: query } },
            ],
          },
          userId ? { UserID: userId } : {},
        ],
      },
      include: {
        user: true,
      },
    });
  } catch (error) {
    console.error("Prisma Error:", error);
    // Fallback for demonstration if DB is not migrated
    return (
      <div className="p-8">
        <h1 className="text-2xl font-bold text-red-600">Prisma Error</h1>
        <p className="mt-2">Please ensure you have run <code>npx prisma db push</code> or <code>npx prisma migrate dev</code>.</p>
        <div className="mt-4 p-4 bg-gray-100 rounded">
            <h3 className="font-bold">Proposed Prisma Queries to use:</h3>
            <pre className="text-xs mt-2">
{`// getAll tasks with filters
const tasks = await prisma.task.findMany({
  where: {
    AND: [
      { OR: [{ TaskTitle: { contains: query } }, { TaskDescription: { contains: query } }] },
      userId ? { UserID: userId } : {}
    ]
  },
  include: { user: true }
});`}
            </pre>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Lab 27: Prisma Task Manager</h1>
      
      <form className="flex flex-col md:flex-row gap-4 mb-8">
        <input 
          name="q"
          type="text" 
          placeholder="Search by title or description..." 
          className="border p-2 rounded flex-1"
          defaultValue={query}
        />
        <select 
          name="userId"
          className="border p-2 rounded"
          defaultValue={userId || ""}
        >
          <option value="">All Users</option>
          {users.map((u: any) => (
            <option key={u.UserID} value={u.UserID}>{u.UserName}</option>
          ))}
        </select>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Filter</button>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {tasks.map((task: any) => (
          <div key={task.TaskID} className="bg-white border rounded-lg p-5 shadow-sm">
            <div className="flex justify-between">
              <h3 className="font-bold text-lg">{task.TaskTitle}</h3>
              <span className={`px-2 py-1 rounded text-xs ${task.IsCompleted ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {task.IsCompleted ? 'Completed' : 'Pending'}
              </span>
            </div>
            <p className="text-gray-600 mt-2">{task.TaskDescription}</p>
            <div className="mt-4 pt-4 border-t flex justify-between items-center text-sm text-gray-500">
              <p>Assigned to: <strong>{task.user.UserName}</strong></p>
              <div className="flex space-x-2">
                 <Link href={`/LAB_27/tasks/${task.TaskID}`} className="text-blue-600 hover:underline">View</Link>
              </div>
            </div>
          </div>
        ))}
        {tasks.length === 0 && <p className="text-center text-gray-400 col-span-full py-12">No tasks matching your criteria.</p>}
      </div>
    </div>
  );
}
