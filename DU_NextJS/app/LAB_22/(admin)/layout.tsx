import { ReactNode } from "react";
import "../styles.css";

export default function AdminLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}
