import { students } from "../../data";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function StudentPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const student = students.find((s) => s.id === id);

  if (!student) {
    notFound();
  }

  return (
    <div className="p-8">
      <Link href="/LAB_23" className="text-blue-500 hover:underline mb-4 block">← Back to List</Link>
      <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
        <h1 className="text-2xl font-bold mb-4">Student Details (Full Page)</h1>
        <div className="space-y-4">
          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Email:</strong> {student.email}</p>
        </div>
      </div>
    </div>
  );
}
