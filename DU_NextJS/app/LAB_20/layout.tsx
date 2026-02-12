import Link from "next/link";
import { ReactNode } from "react";
import "./styles.css";

export default function Lab20Layout({ children }: { children: ReactNode }) {
  const navLinks = [
    { href: "/LAB_20", label: "Home" },
    { href: "/LAB_20/about", label: "About" },
    { href: "/LAB_20/dashboard", label: "Dashboard" },
    { href: "/LAB_20/profile", label: "Profile" },
    { href: "/LAB_20/contact", label: "Contact" },
  ];

  return (
    <>
      <header className="header">
        <h1>LAB 20 : Basic Routing and Navigation</h1>
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
        <p>© 2026 LAB 20 Next.js Lab Exercise</p>
      </footer>
    </>
  );
}
