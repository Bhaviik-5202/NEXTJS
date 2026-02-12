"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import './styles/layout.css';

export default function Lab21Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (!pathname) return false;
    if (path === "/LAB_21") return pathname === path;
    return pathname.startsWith(path);
  };

  const navLinks = [
    { href: "/LAB_21", label: "Home" },
    { href: "/LAB_21/About", label: "About" },
    { href: "/LAB_21/template1", label: "Template 1" },
    { href: "/LAB_21/template2", label: "Template 2" },
    { href: "/LAB_21/template3", label: "Template 3" },
    { href: "/LAB_21/template4", label: "Template 4" },
    { href: "/LAB_21/template5", label: "Template 5" },
  ];

  return (
    <>
      <header className="header">
        <h1>LAB 21: CSS Templates in NextJS</h1>
      </header>

      <nav className="nav">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={`nav-link ${isActive(link.href) ? "active" : ""}`}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <main className="main">{children}</main>

      <footer className="footer">
        <p>&copy; 2026 LAB 21 - CSS Templates.</p>
      </footer>
    </>
  );
}
