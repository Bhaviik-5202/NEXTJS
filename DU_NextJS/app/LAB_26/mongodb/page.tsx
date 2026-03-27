import React from "react";
// import { MongoClient } from 'mongodb';

const mockMongoData = [
  { _id: "mongo_1", title: "Mongo Doc 1", tags: ["db", "nosql"] },
  { _id: "mongo_2", title: "Mongo Doc 2", tags: ["cloud", "atlas"] },
];

export default async function MongodbPage() {
  /*
  // REAL IMPLEMENTATION:
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  const collection = db.collection('documents');
  const docs = await collection.find({}).toArray();
  */
  const docs = mockMongoData;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Lab 26: MongoDB Data Fetching</h1>
      <pre className="p-4 bg-gray-100 rounded">
        {`// Implementation using mongodb
import { MongoClient } from 'mongodb';

export async function getDocs() {
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  const db = client.db();
  return db.collection('documents').find({}).toArray();
}`}
      </pre>
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Fetched Data (Mocked):</h2>
        <ul>
          {docs.map((doc) => (
            <li key={doc._id} className="border-b py-2">
              {doc.title} - [{doc.tags.join(", ")}]
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
