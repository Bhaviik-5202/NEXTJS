import Link from "next/link";

const apis = [
  { name: "Students", entity: "students", source: "MockAPI" },
  { name: "Posts", entity: "posts", source: "JSONPlaceholder" },
  { name: "Comments", entity: "comments", source: "JSONPlaceholder" },
  { name: "Albums", entity: "albums", source: "JSONPlaceholder" },
  { name: "Photos", entity: "photos", source: "JSONPlaceholder" },
  { name: "Todos", entity: "todos", source: "JSONPlaceholder" },
  { name: "Users", entity: "jsonplaceholder-users", source: "JSONPlaceholder" },
  { name: "Products", entity: "products", source: "FakeStoreAPI" },
  { name: "Carts", entity: "carts", source: "FakeStoreAPI" },
  { name: "Quotes", entity: "quotes", source: "DummyJSON" },
];

export default function MultiApiPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">Lab 25: Multi-API Consumption</h1>
      <p className="mb-4 text-gray-600">Demonstrating data fetching from 10 different APIs (getAll and getByID).</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apis.map((api) => (
          <div key={api.entity} className="bg-white border rounded-lg p-6 shadow hover:shadow-md transition">
            <h2 className="text-xl font-semibold mb-2">{api.name}</h2>
            <p className="text-sm text-gray-500 mb-4">Source: {api.source}</p>
            <div className="flex space-x-4">
              <Link 
                href={`/LAB_25/multi-api/${api.entity}`}
                className="text-blue-600 hover:underline font-medium"
              >
                View All
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
