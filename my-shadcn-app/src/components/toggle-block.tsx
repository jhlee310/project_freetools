// components/toggle-block.tsx
"use client";

import { useState, ReactNode } from "react";

export function ToggleBlock({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-gray-200 rounded-lg bg-white mb-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-4 font-medium text-gray-700"
      >
        {title}
        <span className="text-2xl">{open ? "−" : "+"}</span>
      </button>
      {open && <div className="p-4 pt-0 text-gray-600">{children}</div>}
    </div>
  );
}
