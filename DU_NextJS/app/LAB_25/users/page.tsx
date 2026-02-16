import Image from "next/image";
import React from "react";
import "../styles.css";

async function fetchUsers() {
    const res = await fetch("https://6881dcdf66a7eb81224c58b1.mockapi.io/Student");
    return res.json();
}

export default async function UsersPage() {
    const user = await fetchUsers();
    return (
        <>
            <div>
                <table className="users-table">
                    <thead>
                        <tr className="users-header-row">
                            <th className="users-th">ID</th>
                            <th className="users-th">Avatar</th>
                            <th className="users-th">Name</th>
                            <th className="users-th">Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {user.map((u: { id: string; name: string; address: string; avatar?: string }) => (
                            <tr key={u.id} className="users-row">
                                <td className="users-td users-id">{u.id}</td>
                                <td className="users-td">
                                    <Image src={u.avatar ? u.avatar : "/default-avatar.png"} alt={u.name} width={60} height={60} className="users-avatar" />
                                </td>
                                <td className="users-td users-name">{u.name}</td>
                                <td className="users-td">{u.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}










































































