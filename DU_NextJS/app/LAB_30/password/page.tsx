"use client";
import React, { useActionState } from "react";
import { updatePassword } from "../actions";
import Link from "next/link";

export default function ChangePasswordPage() {
  const [state, formAction, isPending] = useActionState(updatePassword, null);

  return (
    <div className="p-8 max-w-md mx-auto">
      <Link href="/LAB_30" className="text-blue-500 hover:underline mb-6 block">← Back to Lab 30</Link>
      <h1 className="text-2xl font-bold mb-6">Change Password</h1>
      <form action={formAction} className="bg-white p-6 rounded-lg shadow space-y-4">
        <div>
          <label className="block text-sm font-medium">Username</label>
          <input name="username" required className="w-full border p-2 rounded" placeholder="Your Username" />
        </div>
        <div>
          <label className="block text-sm font-medium">New Password</label>
          <input name="newPassword" type="password" required className="w-full border p-2 rounded" />
        </div>
        <button 
          type="submit" 
          disabled={isPending}
          className="w-full bg-purple-600 text-white py-2 rounded font-bold hover:bg-purple-700 disabled:opacity-50"
        >
          {isPending ? "Updating..." : "Update Password"}
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
