import Link from "next/link";
import { notFound } from "next/navigation";

const API_CONFIG: Record<string, { url: string; label: string }> = {
  "students": { url: "https://6881dcdf66a7eb81224c58b1.mockapi.io/Student", label: "Student" },
  "posts": { url: "https://jsonplaceholder.typicode.com/posts", label: "Post" },
  "comments": { url: "https://jsonplaceholder.typicode.com/comments", label: "Comment" },
  "albums": { url: "https://jsonplaceholder.typicode.com/albums", label: "Album" },
  "photos": { url: "https://jsonplaceholder.typicode.com/photos", label: "Photo" },
  "todos": { url: "https://jsonplaceholder.typicode.com/todos", label: "Todo" },
  "jsonplaceholder-users": { url: "https://jsonplaceholder.typicode.com/users", label: "User" },
  "products": { url: "https://fakestoreapi.com/products", label: "Product" },
  "carts": { url: "https://fakestoreapi.com/carts", label: "Cart" },
  "quotes": { url: "https://dummyjson.com/quotes", label: "Quote" },
};

export default async function EntityDetailPage({ params }: { params: Promise<{ entity: string; id: string }> }) {
  const { entity, id } = await params;
  const config = API_CONFIG[entity];

  if (!config) notFound();

  const res = await fetch(`${config.url}/${id}`);
  const data = await res.json();

  if (!data || data.message === "Not Found") notFound();

  return (
    <div className="p-8">
      <Link href={`/LAB_25/multi-api/${entity}`} className="text-blue-500 hover:underline mb-4 block">← Back to {config.label} List</Link>
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl border border-gray-100">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">{config.label} Details</h1>
        <div className="space-y-4">
          <div className="pb-4 border-bottom">
            <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">ID</span>
            <p className="text-lg text-gray-900 font-mono">{data.id}</p>
          </div>
          {data.title && (
            <div className="pb-4 border-bottom">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Title</span>
              <p className="text-lg text-gray-900">{data.title}</p>
            </div>
          )}
          {data.name && (
            <div className="pb-4 border-bottom">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Name</span>
              <p className="text-lg text-gray-900">{data.name}</p>
            </div>
          )}
          {data.email && (
            <div className="pb-4 border-bottom">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Email</span>
              <p className="text-lg text-gray-900">{data.email}</p>
            </div>
          )}
          {data.body && (
            <div className="pb-4 border-bottom">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Content</span>
              <p className="text-gray-700 leading-relaxed">{data.body}</p>
            </div>
          )}
           {data.quote && (
            <div className="pb-4 border-bottom">
              <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Quote</span>
              <p className="text-lg text-gray-900 italic">"{data.quote}"</p>
            </div>
          )}
          <pre className="mt-8 p-4 bg-gray-50 rounded text-xs overflow-auto max-h-60">
            {JSON.stringify(data, null, 2)}
          </pre>
        </div>
      </div>
    </div>
  );
}
