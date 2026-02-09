import { ReactNode } from "react";
import "./styles.css";

export default function Lab22Layout({ children }: { children: ReactNode }) {
    return (
        <div className="lab22-layout">
            <header className="lab22-header">
                <div className="header-content">
                    <h1>LAB 22: Route Groups & Dynamic Routes in Next.js</h1>
                </div>
            </header>
            <main className="lab22-main">{children}</main>
            <footer className="lab22-footer">
                <p>&copy; 2026 LAB 22 Next.js Lab Exercise</p>
            </footer>
        </div>
    );
}
