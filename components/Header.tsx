"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/cv", label: "CV" },
  { href: "/publications", label: "Publications" },
  { href: "/research", label: "Research" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      {/* Hero banner with background image */}
      <div
        className="relative w-full"
        style={{
          backgroundImage: "url('/header.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "180px",
        }}
      >
        {/* Dark overlay for text legibility */}
        <div
          className="absolute inset-0"
          style={{ backgroundColor: "rgba(0, 30, 50, 0.55)" }}
        />
        <div className="relative flex items-center justify-center h-full py-12 px-6">
          <h1
            className="text-white text-center tracking-wide"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: "clamp(1.75rem, 4vw, 3rem)",
              fontWeight: 600,
              letterSpacing: "0.02em",
              textShadow: "0 2px 8px rgba(0,0,0,0.4)",
            }}
          >
            Alicea Lieberman, PhD, MPH
          </h1>
        </div>
      </div>

      {/* Navigation bar */}
      <nav
        className="w-full border-b"
        style={{ backgroundColor: "#003B5C", borderColor: "#00304d" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <ul className="flex items-center gap-1 list-none m-0 p-0">
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className="block px-5 py-4 text-sm font-medium tracking-wide transition-colors duration-150"
                    style={{
                      fontFamily: "var(--font-inter), sans-serif",
                      color: isActive ? "#ffffff" : "rgba(255,255,255,0.75)",
                      borderBottom: isActive
                        ? "3px solid #fff"
                        : "3px solid transparent",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        (e.target as HTMLAnchorElement).style.color = "#ffffff";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        (e.target as HTMLAnchorElement).style.color =
                          "rgba(255,255,255,0.75)";
                    }}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </header>
  );
}
