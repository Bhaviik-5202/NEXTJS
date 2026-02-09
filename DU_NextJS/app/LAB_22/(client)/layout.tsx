import { ReactNode } from "react";
import "../styles.css";

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <div style={
            {
                color: "#22c55e",
                border: "3px solid #22c55e",
                borderRadius: 8,
                margin: 16,
                padding: 16,
                background: "#f0fdf4"
            }
        }>
            {children}
        </div>
    );
}
