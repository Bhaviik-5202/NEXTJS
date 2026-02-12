import Link from "next/link";
import { ReactNode } from "react";
import "./styles.css";

export default function Lab23Layout({ children }: { children: ReactNode }) {
  const navLinks = [
    { href: "/LAB_23", label: "Home" },
    { href: "/LAB_23/user", label: "API: All Users" },
    { href: "/LAB_23/user/1", label: "API: User 1" },
  ];

  return (
    <>
      <header className="header">
        <h1>LAB 23 : Intercepting Route & Handling Routes</h1>
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
        <p>© 2026 LAB 23 Next.js Lab Exercise</p>
        <small>Student CRUD demo | API links above</small>
      </footer>
    </>
  );
}
