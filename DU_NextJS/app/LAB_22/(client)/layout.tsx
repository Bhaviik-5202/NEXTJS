import { ReactNode } from "react";
import "../styles.css";

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <div className="client-container">
            <nav className="client-nav">
                <div className="logo">Client Portal</div>
            </nav>
            <main className="client-content">
                {children}
            </main>
        </div>
    );
}
