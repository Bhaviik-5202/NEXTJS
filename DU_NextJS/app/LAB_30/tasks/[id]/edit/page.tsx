import prisma from "@/lib/prisma";
import Link from "next/link";
import { updateTask } from "../../../actions";
import { notFound } from "next/navigation";

export default async function EditTaskPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const taskId = parseInt(id);
  
  const task = await prisma.task.findUnique({
    where: { TaskID: taskId }
  });

  if (!task) notFound();

  return (
    <div className="p-8 max-w-md mx-auto">
      <Link href="/LAB_30/tasks" className="text-blue-500 hover:underline mb-6 block">← Back to Tasks</Link>
      <h1 className="text-2xl font-bold mb-6">Edit Task</h1>
      <form action={async (formData) => {
        "use server";
        await updateTask(taskId, formData);
      }} className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block text-sm font-medium">Task Title</label>
          <input name="title" defaultValue={task.TaskTitle} required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea name="description" defaultValue={task.TaskDescription || ""} className="w-full border p-2 rounded" rows={3}></textarea>
        </div>
        <div className="flex items-center space-x-2">
           <input type="checkbox" name="isCompleted" id="isCompleted" defaultChecked={task.IsCompleted} className="rounded" />
           <label htmlFor="isCompleted" className="text-sm font-medium">Mark as Completed</label>
        </div>

        <button 
          type="submit" 
          className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700"
        >
          Update Task
        </button>
      </form>
    </div>
  );
}
