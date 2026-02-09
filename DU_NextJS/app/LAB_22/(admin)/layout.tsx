import { ReactNode } from "react";
import "../styles.css";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div style={
            {
                color: "#7c2d12",
                border: "3px solid #f59e42",
                borderRadius: 8,
                margin: 16,
                padding: 16,
                background: "#fff7ed",
            }
        }>
            {children}
        </div>
    );
}
