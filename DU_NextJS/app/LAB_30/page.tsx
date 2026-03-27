import Link from "next/link";

export default function Lab30Page() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8">Lab 30: Prisma CRUD & Testing</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg shadow hover:shadow-md transition bg-blue-50">
          <h2 className="text-xl font-bold mb-2">1. Registration Form</h2>
          <p className="text-sm text-gray-600 mb-4">Insert new users into the database using Prisma.</p>
          <Link href="/LAB_30/registration" className="text-blue-600 font-medium hover:underline">Go to Form →</Link>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-md transition bg-green-50">
          <h2 className="text-xl font-bold mb-2">2. Add & Edit Tasks</h2>
          <p className="text-sm text-gray-600 mb-4">Manage tasks (Title, Description, Status, UserID).</p>
          <Link href="/LAB_30/tasks" className="text-green-600 font-medium hover:underline">Go to Tasks →</Link>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-md transition bg-purple-50">
          <h2 className="text-xl font-bold mb-2">3. Change Password</h2>
          <p className="text-sm text-gray-600 mb-4">Update user password using Prisma <code>update</code>.</p>
          <Link href="/LAB_30/password" className="text-purple-600 font-medium hover:underline">Go to Form →</Link>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-md transition bg-red-50">
          <h2 className="text-xl font-bold mb-2">4. Automated Testing</h2>
          <p className="text-sm text-gray-600 mb-4">View test cases for Vitest, Jest, and Playwright.</p>
          <Link href="/LAB_30/testing" className="text-red-600 font-medium hover:underline">View Test Info →</Link>
        </div>
      </div>
    </div>
  );
}
