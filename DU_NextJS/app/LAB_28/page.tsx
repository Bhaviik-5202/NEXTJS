"use client";

import React, { useActionState } from "react";
import { registerUser, printFormData } from "./actions";

export default function Lab28Page() {
  const [state, formAction, isPending] = useActionState(registerUser, null);

  const handlePrintOnly = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const result = await printFormData(formData);
    alert(JSON.stringify(result, null, 2));
  };

  return (
    <div className="p-8 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-8">Lab 28: Server Actions</h1>

      <section className="mb-12">
        <h2 className="text-xl font-semibold mb-4">1. Simple Print (Ref: A)</h2>
        <form onSubmit={handlePrintOnly} className="space-y-4">
          <input name="testInput" placeholder="Type something..." className="w-full border p-2 rounded" />
          <button type="submit" className="bg-gray-800 text-white px-4 py-2 rounded">Print to Console & Alert</button>
        </form>
      </section>

      <hr className="my-10" />

      <section>
        <h2 className="text-xl font-semibold mb-4">2. Validated Registration (Ref: B, C)</h2>
        <form action={formAction} className="space-y-4 bg-gray-50 p-6 rounded-lg border">
          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input name="username" className="w-full border p-2 rounded mt-1" />
            {state?.errors?.username && <p className="text-red-500 text-xs mt-1">{state.errors.username[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input name="email" type="email" className="w-full border p-2 rounded mt-1" />
            {state?.errors?.email && <p className="text-red-500 text-xs mt-1">{state.errors.email[0]}</p>}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input name="password" type="password" className="w-full border p-2 rounded mt-1" />
            {state?.errors?.password && <p className="text-red-500 text-xs mt-1">{state.errors.password[0]}</p>}
          </div>

          <button 
            type="submit" 
            disabled={isPending}
            className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isPending ? "Validating..." : "Register User"}
          </button>

          {state?.message && (
             <p className={`mt-4 text-center p-2 rounded ${state.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {state.message}
             </p>
          )}
        </form>
      </section>
    </div>
  );
}
