import { ReactNode } from "react";
import "../styles.css";

export default function ClientLayout({ children }: { children: ReactNode }) {
    return (
        <div>
            {children}
        </div>
    );
}
