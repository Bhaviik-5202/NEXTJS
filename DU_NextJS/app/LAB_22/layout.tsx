import Link from "next/link";
import { ReactNode } from "react";
import "./styles.css";

export default function Lab22Layout({ children }: { children: ReactNode }) {
    const navLinks = [
        { href: "/LAB_22", label: "Home" },
        { href: "/LAB_22/auth-home", label: "Auth" },
        { href: "/LAB_22/admin-home", label: "Admin" },
        { href: "/LAB_22/client-home", label: "Client" },
        { href: "/LAB_22/dynamic/123", label: "Dynamic ID" },
        { href: "/LAB_22/dynamic/primes/1/10", label: "Primes" },
        { href: "/LAB_22/dynamic/page/3", label: "Pagination" },
    ];

    return (
        <>
            <header className="header">
                <h1>LAB 22: Route Groups & Dynamic Routes in Next.js</h1>
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
                <p>© 2026 LAB 22 Next.js Lab Exercise</p>
            </footer>
        </>
    );
}
