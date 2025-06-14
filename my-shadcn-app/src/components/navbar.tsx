// components/navbar.tsx
"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-pastelPink/40 via-pastelBlue/40 to-pastelGreen/40 backdrop-blur-md shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <h1 className="text-2xl font-bold text-pastelBlue">JeonseFlow</h1>
        <div className="flex items-center space-x-4 text-pastelBlue">
          {["홈", "기능", "플로우", "문의"].map((t) => (
            <Link
              key={t}
              href={`#${t === "홈" ? "hero" : t === "기능" ? "features" : t === "플로우" ? "flow" : "contact"}`}
              className="hover:underline"
            >
              {t}
            </Link>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
