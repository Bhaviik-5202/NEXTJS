import { ReactNode } from "react";
import "./styles.css";

export default function Lab23Layout({ children }: { children: ReactNode }) {
    return (
        <div className="lab23-layout">
            <header className="lab23-header">
                <div className="header-content">
                    <h1>LAB 23: intercepting Routes & Handle Routes in Next.js</h1>
                </div>
            </header>
            <main className="lab23-main">{children}</main>
            <footer className="lab23-footer">
                <p>&copy; 2026 LAB 23 Next.js Lab Exercise</p>
            </footer>
        </div>
    );
}
