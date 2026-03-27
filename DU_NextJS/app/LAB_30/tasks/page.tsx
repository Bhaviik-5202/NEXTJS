"use client";
import React, { useActionState } from "react";
import { createTask } from "../actions";
import Link from "next/link";

export default function AddTaskPage() {
  const [state, formAction, isPending] = useActionState(createTask, null);

  return (
    <div className="p-8 max-w-md mx-auto">
      <Link href="/LAB_30" className="text-blue-500 hover:underline mb-6 block">← Back to Lab 30</Link>
      <h1 className="text-2xl font-bold mb-6">Add New Task</h1>
      <form action={formAction} className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block text-sm font-medium">Task Title</label>
          <input name="title" required className="w-full border p-2 rounded" />
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <textarea name="description" className="w-full border p-2 rounded" rows={3}></textarea>
        </div>
        <div>
          <label className="block text-sm font-medium">User ID</label>
          <input name="userId" type="number" required className="w-full border p-2 rounded" placeholder="Existing User ID" />
        </div>
        <div className="flex items-center space-x-2">
           <input type="checkbox" name="isCompleted" id="isCompleted" className="rounded" />
           <label htmlFor="isCompleted" className="text-sm font-medium">Mark as Completed</label>
        </div>

        <button 
          type="submit" 
          disabled={isPending}
          className="w-full bg-green-600 text-white py-2 rounded font-bold hover:bg-green-700 disabled:opacity-50"
        >
          {isPending ? "Saving..." : "Add Task"}
        </button>
        {state?.message && (
          <p className={`text-center p-2 rounded ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}
