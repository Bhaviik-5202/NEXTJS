
import Link from "next/link";
import { ReactNode } from "react";
import "./styles.css";
import UserIdForm from "./UserIdForm";

export default function Lab25Layout({ children }: { children: ReactNode }) {

    const navLinks = [
        { href: "/LAB_25", label: "Home" },
        { href: "/LAB_25/users", label: "Users" },
    ];

    return (
        <>
            <header className="header">
                <h1>LAB 25 : Fetching Data from mockapi</h1>
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
                    <li>
                        <UserIdForm />
                    </li>
                </ul>
            </nav>

            <main className="main">{children}</main>

            <footer className="footer">
                <p>© 2026 LAB 25 Next.js Lab Exercise</p>
            </footer>
        </>
    );
}
