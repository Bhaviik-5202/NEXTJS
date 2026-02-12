"use client";
import { useEffect, useState, useRef } from "react";

type Student = { id: number; name: string };

export default function LAB23Home() {
  const [students, setStudents] = useState<Student[]>([]);
  const [name, setName] = useState("");
  const [editId, setEditId] = useState<number | null>(null);
  const [editName, setEditName] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  // Accessibility: focus input on mount
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Fetch students
  const fetchStudents = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await fetch("/LAB_23/user");
      if (!res.ok) throw new Error("Failed to fetch students");
      const data = await res.json();
      setStudents(data);
    } catch {
      setError("Error fetching students");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Input validation helper
  const validateName = (n: string) => n.trim().length > 0 && n.length <= 30;

  // Add student
  const handleAdd = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!validateName(name)) {
      setError("Name must be 1-30 characters.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/LAB_23/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name }),
      });
      if (!res.ok) throw new Error("Failed to add student");
      setName("");
      setSuccess("Student added successfully!");
      fetchStudents();
    } catch {
      setError("Error adding student");
    } finally {
      setLoading(false);
    }
  };

  // Start editing
  const startEdit = (student: Student) => {
    setEditId(student.id);
    setEditName(student.name);
    setError("");
    setSuccess("");
  };

  // Update student
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    if (!validateName(editName)) {
      setError("Name must be 1-30 characters.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`/LAB_23/user/${editId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: editName }),
      });
      if (!res.ok) throw new Error("Failed to update student");
      setEditId(null);
      setEditName("");
      setSuccess("Student updated successfully!");
      fetchStudents();
    } catch {
      setError("Error updating student");
    } finally {
      setLoading(false);
    }
  };

  // Delete student with confirmation
  const handleDelete = async (id: number) => {
    if (!window.confirm("Delete this student?")) return;
    setError("");
    setSuccess("");
    setLoading(true);
    try {
      const res = await fetch(`/LAB_23/user/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete student");
      setSuccess("Student deleted successfully!");
      fetchStudents();
    } catch {
      setError("Error deleting student");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <div className="lab23-container" aria-label="Student CRUD Demo">
      <h1>LAB 23 Home Page</h1>
      <section style={{ marginTop: '2rem' }}>
        <h2>Live Student List</h2>
        {error && <div className="lab23-error" role="alert">{error}</div>}
        {success && <div className="lab23-success" role="status">{success}</div>}
        {loading && <div className="lab23-loading">Loading...</div>}
        <form onSubmit={handleAdd} className="lab23-form" aria-label="Add student">
          <input
            ref={inputRef}
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Enter student name"
            aria-label="Student name"
            maxLength={30}
            required
          />
          <button type="submit" disabled={loading}>Add Student</button>
        </form>
        <ul className="lab23-list" aria-label="Student list">
          {students.length === 0 && !loading && <li>No students found.</li>}
          {students.map(s => (
            <li key={s.id} className="lab23-list-item">
              {editId === s.id ? (
                <form onSubmit={handleUpdate} className="lab23-edit-form" aria-label="Edit student">
                  <input
                    type="text"
                    value={editName}
                    onChange={e => setEditName(e.target.value)}
                    placeholder="Edit name"
                    aria-label="Edit student name"
                    maxLength={30}
                    required
                    autoFocus
                  />
                  <button type="submit" disabled={loading}>Save</button>
                  <button type="button" onClick={() => setEditId(null)} disabled={loading}>Cancel</button>
                </form>
              ) : (
                <>
                  <span>{s.name}</span>
                  <button onClick={() => startEdit(s)} disabled={loading} aria-label={`Edit ${s.name}`}>Edit</button>
                  <button onClick={() => handleDelete(s.id)} disabled={loading} aria-label={`Delete ${s.name}`}>Delete</button>
                </>
              )}
            </li>
          ))}
        </ul>
      </section>
    </div>
    <div>
            <section style={{ marginTop: '2rem' }}>
        <h2>Student API Usage</h2>
        <ul>
          <li>GET <b>/LAB_23/user</b> - List all students</li>
          <li>POST <b>/LAB_23/user</b> - Add a student (body: {'{"name":"YourName"}'})</li>
          <li>GET <b>/LAB_23/user/[id]</b> - Get student by ID</li>
          <li>PUT <b>/LAB_23/user/[id]</b> - Update student (body: {'{"name":"NewName"}'})</li>
          <li>DELETE <b>/LAB_23/user/[id]</b> - Delete student</li>
        </ul>
        <p style={{ marginTop: '1rem' }}>Try these endpoints using Postman or browser for GET requests.</p>
      </section>
    </div>
    </>
  );
}