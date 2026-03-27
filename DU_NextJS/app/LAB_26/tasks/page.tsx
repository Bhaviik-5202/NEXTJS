"use client";
import React, { useState } from "react";

// Mock Data
const INITIAL_USERS = [
  { UserID: 1, UserName: "alice", Password: "password123" },
  { UserID: 2, UserName: "bob", Password: "password456" },
];

const INITIAL_TASKS = [
  { TaskID: 1, TaskTitle: "Laundry", TaskDescription: "Wash the clothes", IsCompleted: false, UserID: 1 },
  { TaskID: 2, TaskTitle: "Groceries", TaskDescription: "Buy milk and eggs", IsCompleted: true, UserID: 1 },
  { TaskID: 3, TaskTitle: "Study", TaskDescription: "Finish Next.js lab", IsCompleted: false, UserID: 2 },
];

export default function MysqlCrudApp() {
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  const [search, setSearch] = useState("");
  const [filterUserId, setFilterUserId] = useState("");

  const filteredTasks = tasks.filter(task => {
    const matchesSearch = task.TaskTitle.toLowerCase().includes(search.toLowerCase()) || 
                          task.TaskDescription.toLowerCase().includes(search.toLowerCase());
    const matchesUser = filterUserId === "" || task.UserID === Number(filterUserId);
    return matchesSearch && matchesUser;
  });

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Lab 26: MySQL Task Manager (CRUD Demo)</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input 
          type="text" 
          placeholder="Search tasks..." 
          className="border p-2 rounded flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select 
          className="border p-2 rounded"
          value={filterUserId}
          onChange={(e) => setFilterUserId(e.target.value)}
        >
          <option value="">All Users</option>
          {INITIAL_USERS.map(u => (
            <option key={u.UserID} value={u.UserID}>{u.UserName}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {filteredTasks.map(task => (
          <div key={task.TaskID} className={`p-4 border rounded shadow-sm ${task.IsCompleted ? 'bg-green-50' : 'bg-white'}`}>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{task.TaskTitle}</h3>
                <p className="text-gray-600">{task.TaskDescription}</p>
                <div className="mt-2 text-sm text-gray-500">
                  <span>User ID: {task.UserID}</span>
                  <span className="mx-2">|</span>
                  <span>Status: {task.IsCompleted ? "Completed" : "Pending"}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="text-blue-500 text-sm hover:underline">Edit</button>
                <button className="text-red-500 text-sm hover:underline">Delete</button>
              </div>
            </div>
          </div>
        ))}
        {filteredTasks.length === 0 && <p className="text-center text-gray-400">No tasks found.</p>}
      </div>

      <section className="mt-12 p-4 bg-blue-50 rounded border border-blue-200">
        <h3 className="font-bold text-blue-800 mb-2">Technical Implementation Note (MySQL):</h3>
        <p className="text-sm text-blue-700">
          In a production Next.js app, these operations would be implemented using Route Handlers (<code>app/api/tasks/route.ts</code>)
          running <code>mysql2</code> queries:
        </p>
        <code className="block mt-2 p-2 bg-white rounded text-xs">
          {`// SQL for getTasksByUserID:
const [rows] = await connection.execute(
  'SELECT * FROM Task WHERE UserID = ?', 
  [userId]
);`}
        </code>
      </section>
    </div>
  );
}
