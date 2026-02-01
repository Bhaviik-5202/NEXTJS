"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto p-6">
        {/* Header */}
        <header className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h1 className="text-3xl font-bold text-indigo-600 mb-2">LAB 20</h1>
          <p className="text-gray-600">Next.js Routing & Navigation Demo</p>
        </header>

        {/* Navigation */}
        <nav className="bg-white rounded-lg shadow-md p-4 mb-6">
          <ul className="flex flex-wrap gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={`
                    px-4 py-2 rounded-md transition-all duration-200
                    ${
                      isActive(link.href)
                        ? "bg-indigo-600 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-indigo-100 hover:text-indigo-600"
                    }
                  `}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content */}
        <main className="bg-white rounded-lg shadow-md p-6">{children}</main>

        {/* Footer */}
        <footer className="mt-6 text-center text-gray-600 text-sm">
          <p>© 2026 Next.js Lab Exercise</p>
        </footer>
      </div>
    </div>
  );
}
