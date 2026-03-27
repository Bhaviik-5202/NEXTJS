import React from "react";
// import { Pool } from 'pg';

const mockPostgresData = [
  { id: 101, name: "Postgres Item 1", status: "active" },
  { id: 102, name: "Postgres Item 2", status: "pending" },
];

export default async function PostgresPage() {
  /*
  // REAL IMPLEMENTATION:
  const pool = new Pool();
  const res = await pool.query('SELECT * FROM items');
  const rows = res.rows;
  */
  const rows = mockPostgresData;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lab 26: Postgres Data Fetching</h1>
      <pre className="p-4 bg-gray-100 rounded">
        {`// Implementation using pg
import { Pool } from 'pg';

const pool = new Pool();

export async function getData() {
  const { rows } = await pool.query('SELECT * FROM items');
  return rows;
}`}
      </pre>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Fetched Data (Mocked):</h2>
        <ul>
          {rows.map((item) => (
            <li key={item.id} className="border-b py-2">
              {item.name} - {item.status}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
