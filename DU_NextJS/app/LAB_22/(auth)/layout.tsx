import { ReactNode } from "react";
import "../styles.css";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div className="auth-wrapper">
            <div className="auth-card">
                {children}
            </div>
        </div>
    );
}