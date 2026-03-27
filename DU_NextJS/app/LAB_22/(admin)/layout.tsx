import { ReactNode } from "react";
import "../styles.css";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div className="admin-container">
            <aside className="admin-sidebar">
                <nav>
                    <ul>
                        <li>Dashboard</li>
                        <li>Users</li>
                        <li>Settings</li>
                    </ul>
                </nav>
            </aside>
            <main className="admin-main">
                <header className="admin-header">
                    <h2>Admin Panel</h2>
                </header>
                <div className="admin-content">
                    {children}
                </div>
            </main>
        </div>
    );
}
