"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import "./styles/layout.css";

export default function Lab20Layout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const navLinks = [
    { href: "/LAB_20", label: "Home" },
    { href: "/LAB_20/about", label: "About" },
    { href: "/LAB_20/dashboard", label: "Dashboard" },
    { href: "/LAB_20/profile", label: "Profile" },
    { href: "/LAB_20/contact", label: "Contact" },
  ];

  return (
    <div className="lab20-container">
      {/* Header */}
        <header className="lab20-header">
        <div className="header-content">
          <h1>LAB 20 : Next.js Routing & Navigation Demo</h1>
        </div>
      </header>

        {/* Navigation */}
      <nav className="lab20-nav">
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
        <main className="lab20-main">{children}</main>

        {/* Footer */}
        <footer className="lab20-footer">
          <p>© 2026 LAB 20 Next.js Lab Exercise</p>
        </footer>
      </div>
  );
}
