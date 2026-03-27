import Link from "next/link";

export default function Lab29Page() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-8 text-orange-800">Lab 29: Client Components & Delete</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-bold mb-2">Calculator Component</h2>
          <p className="text-sm text-gray-500 mb-4">Interactive math logic using React state.</p>
          <Link href="/LAB_29/calculator" className="text-orange-600 font-bold hover:underline">Open Calculator →</Link>
        </div>

        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-bold mb-2">Snake Game</h2>
          <p className="text-sm text-gray-500 mb-4">Canvas-based game using client hooks and effects.</p>
          <Link href="/LAB_29/snake" className="text-green-600 font-bold hover:underline">Play Game →</Link>
        </div>

        <div className="p-6 border rounded-xl shadow hover:shadow-lg transition bg-white">
          <h2 className="text-xl font-bold mb-2">Prisma Delete</h2>
          <p className="text-sm text-gray-500 mb-4">Performing record deletion using Prisma ORM.</p>
          <Link href="/LAB_29/delete-task" className="text-red-600 font-bold hover:underline">View Delete Demo →</Link>
        </div>
      </div>
    </div>
  );
}
