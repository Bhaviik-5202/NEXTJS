import Link from "next/link";
import { ReactNode } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

export default function Lab20Layout({ children }: { children: ReactNode }) {
  const navLinks = [
    { href: "/LAB_20", label: "Home" },
    { href: "/LAB_20/about", label: "About" },
    { href: "/LAB_20/contact", label: "Contact" },
  ];

  return (
    <div className="lab-20-wrapper mt-4">
      <header className="bg-primary text-white text-center py-3 mb-4 rounded shadow-sm">
        <h2 className="m-0 text-white">LAB 20: Basic Routing and Navigation</h2>
      </header>

      <nav className="navbar navbar-expand-lg navbar-light bg-light border rounded mb-4 px-3 shadow-sm">
        <span className="navbar-brand font-weight-bold">Lab 20 Sections:</span>
        <div className="navbar-collapse d-flex">
          <ul className="navbar-nav flex-row gap-4">
            {navLinks.map((link) => (
              <li key={link.href} className="nav-item">
                <Link href={link.href} className="nav-link text-primary font-bold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      <main className="p-4 bg-white border rounded shadow-sm min-h-[300px]">
        {children}
      </main>

      <footer className="mt-8 py-4 text-center border-top text-muted">
        <p className="m-0 italic">© 2026 LAB 20 Next.js Exercise</p>
      </footer>
    </div>
  );
}
