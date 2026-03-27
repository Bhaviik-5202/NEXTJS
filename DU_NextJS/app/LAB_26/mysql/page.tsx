import React from "react";
// import mysql from 'mysql2/promise';

// Mocking the database response for demonstration
const mockMysqlData = [
  { id: 1, username: "admin", role: "superuser" },
  { id: 2, username: "bhaviik", role: "developer" },
];

export default async function MysqlPage() {
  /* 
  // REAL IMPLEMENTATION:
  const connection = await mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'test'
  });
  const [rows] = await connection.execute('SELECT * FROM users');
  */
  const rows = mockMysqlData;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lab 26: MySQL Data Fetching</h1>
      <pre className="p-4 bg-gray-100 rounded">
        {`// Implementation using mysql2
import mysql from 'mysql2/promise';

export async function getServerSideProps() {
  const connection = await mysql.createConnection(process.env.DATABASE_URL);
  const [rows] = await connection.execute('SELECT * FROM users');
  return { props: { users: rows } };
}`}
      </pre>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Fetched Data (Mocked):</h2>
        <ul>
          {rows.map((user) => (
            <li key={user.id} className="border-b py-2">
              {user.username} - {user.role}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
