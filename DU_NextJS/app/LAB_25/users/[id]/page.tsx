import React from "react";
import Image from "next/image";

async function fetchUsers(id: string) {
    const res = await fetch(`https://6881dcdf66a7eb81224c58b1.mockapi.io/Student/${id}`);
    return res.json();
}

export default async function UsersPage({ params }: { params: Promise<{ id: string }> }) {
    const user = await fetchUsers((await params).id);
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
                        <tr key={user.id} className="users-row">
                            <td className="users-td users-id">{user.id}</td>
                            <td className="users-td">
                                <Image src={user.avatar ? user.avatar : "/default-avatar.png"} alt={user.name} width={60} height={60} className="users-avatar" />
                            </td>
                            <td className="users-td users-name">{user.name}</td>
                            <td className="users-td">{user.address}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}