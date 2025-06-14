"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950"
        animate={{
          background: [
            "linear-gradient(to bottom right, #eff6ff, #f5f3ff)",
            "linear-gradient(to bottom right, #f5f3ff, #eff6ff)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute -inset-[500px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 dark:from-blue-500/10 dark:to-purple-500/10 blur-3xl"
        animate={{
          x: mousePosition.x - 500,
          y: mousePosition.y - 500,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200,
          mass: 2,
        }}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
    </div>
  );
} 