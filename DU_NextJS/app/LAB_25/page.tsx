import Link from "next/link";

export default function LAB25Home() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold mb-6 text-blue-800">Lab 25: API Fetching</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 border rounded-lg bg-blue-50 shadow-sm border-blue-100">
                    <h2 className="text-xl font-bold mb-2">Multi-API Demo (10+ APIs)</h2>
                    <p className="text-sm text-gray-600 mb-4">Demonstrating getAll and getByID for 10 different entities (Students, Posts, Products, etc.).</p>
                    <Link href="/LAB_25/multi-api" className="bg-blue-600 text-white px-4 py-2 rounded font-bold hover:bg-blue-700 transition inline-block">View Multi-API Demo →</Link>
                </div>
                <div className="p-6 border rounded-lg bg-white shadow-sm border-gray-100 flex items-center justify-center">
                    <p className="text-sm text-gray-400 italic text-center">Additional fetching sub-tasks are integrated into the Multi-API demo for efficiency.</p>
                </div>
            </div>
        </div>
    );
}