import { ReactNode } from "react";
import "../styles.css";

export default function AuthLayout({ children }: { children: ReactNode }) {
    return (
        <div style={
            {
                color: "#2563eb",
                border: "3px solid #2563eb",
                borderRadius: 8,
                margin: 16,
                padding: 16,
                background: "#eff6ff"
            }
        }>
            {children}
        </div>
    );
}
