"use server";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const taskSchema = z.object({
  title: z.string().min(1, "Title is required"),
  userId: z.number().int("Invalid User ID"),
});

export async function createUser(state: any, formData: FormData) {
  const username = formData.get("username") as string;
  const password = formData.get("password") as string;
  
  try {
    const user = await prisma.user.create({
      data: { UserName: username, Password: password }
    });
    return { success: true, message: `User ${user.UserName} registered!` };
  } catch (error) {
    return { success: false, message: "Error creating user. Username might exist." };
  }
}

export async function createTask(state: any, formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const userId = parseInt(formData.get("userId") as string);
  const isCompleted = formData.get("isCompleted") === "on";

  try {
    await prisma.task.create({
      data: {
        TaskTitle: title,
        TaskDescription: description,
        UserID: userId,
        IsCompleted: isCompleted
      }
    });
    revalidatePath("/LAB_30/tasks");
    return { success: true, message: "Task added successfully!" };
  } catch (error) {
    return { success: false, message: "Error adding task. Check User ID." };
  }
}

export async function updatePassword(state: any, formData: FormData) {
  const username = formData.get("username") as string;
  const newPassword = formData.get("newPassword") as string;

  try {
    await prisma.user.update({
      where: { UserName: username },
      data: { Password: newPassword }
    });
    return { success: true, message: "Password updated successfully!" };
  } catch (error) {
    return { success: false, message: "User not found." };
  }
}

export async function updateTask(taskId: number, formData: FormData) {
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const isCompleted = formData.get("isCompleted") === "on";

    try {
        await prisma.task.update({
            where: { TaskID: taskId },
            data: {
                TaskTitle: title,
                TaskDescription: description,
                IsCompleted: isCompleted,
            }
        });
        revalidatePath("/LAB_30/tasks");
        return { success: true, message: "Task updated successfully!" };
    } catch (error) {
        return { success: false, message: "Error updating task." };
    }
}
