import prisma from "@/lib/prisma";
import { deleteTask } from "./actions";

export default async function DeleteTaskPage() {
  let tasks = [];
  try {
    tasks = await prisma.task.findMany({ include: { user: true } });
  } catch (e) {
    console.error(e);
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Lab 29: Prisma Delete Operation</h1>
      <div className="space-y-4">
        {tasks.map((task: any) => (
          <div key={task.TaskID} className="flex justify-between items-center p-4 border rounded shadow-sm bg-white">
            <div>
              <h3 className="font-bold">{task.TaskTitle}</h3>
              <p className="text-sm text-gray-500">User: {task.user.UserName}</p>
            </div>
            <form action={async () => {
              "use server";
              await deleteTask(task.TaskID);
            }}>
               <button type="submit" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Delete</button>
            </form>
          </div>
        ))}
        {tasks.length === 0 && <p className="text-gray-400 italic">No tasks available to delete. Add tasks in Lab 30.</p>}
      </div>
    </div>
  );
}
