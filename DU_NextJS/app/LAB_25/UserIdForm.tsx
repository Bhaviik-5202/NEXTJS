"use client";
import React from "react";

export default function UserIdForm() {
    return (
        <form
            style={{ display: "inline" }}
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
                e.preventDefault();
                const form = e.currentTarget;
                const id = (form.elements.namedItem("id") as HTMLInputElement)?.value;
                if (id) window.location.href = `/LAB_25/users/${id}`;
            }}
        >
            <input name="id" type="text" placeholder="Enter User ID" style={{ width: 90, marginRight: 4, borderRadius: 4, border: '1px solid #ccc', padding: '2px 6px' }} />
            <button type="submit" className="nav-link" style={{ padding: '2px 8px' }}>Go</button>
        </form>
    );
}