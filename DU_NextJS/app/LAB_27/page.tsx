import Link from "next/link";

export default function Lab27Page() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-indigo-800">Lab 27: Prisma ORM Integration</h1>
      
      <div className="max-w-xl p-8 border rounded-lg shadow bg-indigo-50">
        <h2 className="text-2xl font-bold mb-4">Prisma Task Application</h2>
        <p className="text-gray-700 mb-6">
          Using Prisma ORM to perform <strong>getAll</strong>, <strong>getByID</strong>, <strong>search</strong>, 
          and <strong>getTasksByUserID</strong> operations on User and Task tables.
        </p>
        <Link 
          href="/LAB_27/tasks" 
          className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-indigo-700 transition"
        >
          Explore Prisma Tasks
        </Link>
        
        <div className="mt-8 pt-6 border-t border-indigo-200">
           <h3 className="font-bold text-sm text-indigo-600 uppercase tracking-wider mb-2">Technical Tasks Completed:</h3>
           <ul className="text-sm text-indigo-900 list-disc pl-5 space-y-1">
              <li>Initialized Prisma with schema models</li>
              <li>Created singleton Prisma Client utility</li>
              <li>Implemented complex relational queries</li>
           </ul>
        </div>
      </div>
    </div>
  );
}
