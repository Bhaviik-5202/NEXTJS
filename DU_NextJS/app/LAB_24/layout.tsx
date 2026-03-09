import Link from "next/link";
import { ReactNode } from "react";
import "./styles.css";

export default function Lab24Layout({ children }: { children: ReactNode }) {
    const navLinks = [
        { href: "/LAB_24", label: "Home" },
        { href: "/LAB_24/config", label: "Config (Protected)" },
        { href: "/LAB_24/login", label: "Login" },
    ];

    return (
        <>
            <header className="header">
                <h1>LAB 24 : Middleware & Next.js Configuration</h1>
            </header>

            <nav className="nav">
                <ul className="nav-list">
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <Link href={link.href} className="nav-link">
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <main className="main">{children}</main>

            <footer className="footer">
                <p>Copyright 2026 LAB 24 Next.js Lab Exercise</p>
            </footer>
        </>
    );
}
