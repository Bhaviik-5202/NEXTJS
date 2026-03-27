import Link from "next/link";

export default function Lab26Page() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-blue-800">Lab 26: Database Connectivity</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-lg shadow hover:shadow-md transition bg-blue-50">
          <h2 className="text-xl font-bold mb-2">MySQL, Postgres & MongoDB Examples</h2>
          <p className="text-sm text-gray-600 mb-4">View code and mocked results for different database drivers.</p>
          <div className="flex flex-col gap-2">
            <Link href="/LAB_26/mysql" className="text-blue-600 hover:underline">1. MySQL Example</Link>
            <Link href="/LAB_26/postgres" className="text-blue-600 hover:underline">2. Postgres Example</Link>
            <Link href="/LAB_26/mongodb" className="text-blue-600 hover:underline">3. MongoDB Example</Link>
          </div>
        </div>

        <div className="p-6 border rounded-lg shadow hover:shadow-md transition bg-green-50">
          <h2 className="text-xl font-bold mb-2">MySQL Task Manager (CRUD)</h2>
          <p className="text-sm text-gray-600 mb-4">Interactive application to perform getAll, getByID and search operations.</p>
          <Link href="/LAB_26/tasks" className="text-green-600 font-medium hover:underline">Open Task App →</Link>
        </div>
      </div>
    </div>
  );
}
