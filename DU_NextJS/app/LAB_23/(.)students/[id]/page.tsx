import { students } from "../../data";
import Link from "next/link";

export default async function InterceptedStudentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const student = students.find((s) => s.id === id);

  if (!student) {
    return <div className="p-4 bg-red-100 text-red-700">Student not found</div>;
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-lg shadow-xl max-w-md w-full relative">
        <Link href="/LAB_23" className="absolute top-2 right-4 text-2xl font-bold text-gray-500">&times;</Link>
        <h2 className="text-xl font-bold mb-4 text-blue-600">Student Details (Intercepted - Modal)</h2>
        <div className="space-y-2">
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
        </div>
        <p className="mt-6 text-sm text-gray-400 italic">This view was intercepted. Refresh the page to see the full student page.</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full">
            <Link href="/LAB_23">Close Modal</Link>
        </button>
      </div>
    </div>
  );
}
