import Link from "next/link";
import { notFound } from "next/navigation";

const API_CONFIG: Record<string, { url: string; label: string }> = {
  "students": { url: "https://6881dcdf66a7eb81224c58b1.mockapi.io/Student", label: "Students" },
  "posts": { url: "https://jsonplaceholder.typicode.com/posts", label: "Posts" },
  "comments": { url: "https://jsonplaceholder.typicode.com/comments", label: "Comments" },
  "albums": { url: "https://jsonplaceholder.typicode.com/albums", label: "Albums" },
  "photos": { url: "https://jsonplaceholder.typicode.com/photos?_limit=50", label: "Photos" },
  "todos": { url: "https://jsonplaceholder.typicode.com/todos", label: "Todos" },
  "jsonplaceholder-users": { url: "https://jsonplaceholder.typicode.com/users", label: "Users" },
  "products": { url: "https://fakestoreapi.com/products", label: "Products" },
  "carts": { url: "https://fakestoreapi.com/carts", label: "Carts" },
  "quotes": { url: "https://dummyjson.com/quotes", label: "Quotes" },
};

export default async function EntityAllPage({ params }: { params: Promise<{ entity: string }> }) {
  const { entity } = await params;
  const config = API_CONFIG[entity];

  if (!config) notFound();

  const res = await fetch(config.url);
  let data = await res.json();
  
  // DummyJSON nested structure handle
  if (entity === "quotes") data = data.quotes;

  return (
    <div className="p-8">
      <Link href="/LAB_25/multi-api" className="text-blue-500 hover:underline mb-4 block">← Back to API List</Link>
      <h1 className="text-2xl font-bold mb-6">{config.label} List</h1>
      
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title / Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {data.slice(0, 20).map((item: any) => (
              <tr key={item.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.id}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.title || item.name || item.quote || "N/A"}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <Link href={`/LAB_25/multi-api/${entity}/${item.id}`} className="text-blue-600 hover:text-blue-900">
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
