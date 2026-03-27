"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteTask(taskId: number) {
  try {
    await prisma.task.delete({
      where: { TaskID: taskId }
    });
    revalidatePath("/LAB_29/delete-task");
    return { success: true, message: "Task deleted successfully" };
  } catch (error) {
    console.error("Delete Error:", error);
    return { success: false, message: "Failed to delete task. Make sure task exists." };
  }
}
