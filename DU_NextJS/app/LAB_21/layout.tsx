"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import "./styles/layout.css";

export default function Lab21Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/LAB_21", label: "Home" },
    { href: "/LAB_21/template1", label: "Template 1" },
    { href: "/LAB_21/template2", label: "Template 2" },
    { href: "/LAB_21/template3", label: "Template 3" },
  ];

  return (
    <div className="lab21-container">
      {/* Header */}
      <header className="lab21-header">
        <div className="header-content">
          <h1>LAB 21: CSS Templates in NextJS</h1>
        </div>
      </header>

      {/* Navigation */}
      <nav className="lab21-nav">
        <ul className="nav-list">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`nav-link ${isActive(link.href) ? "active" : ""}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      {/* Main Content */}
      <main className="lab21-main">
        {children}
      </main>

      {/* Footer */}
      <footer className="lab21-footer">
        <p>&copy; 2026 LAB 21 - CSS Templates. All rights reserved.</p>
      </footer>
    </div>
  );
}
