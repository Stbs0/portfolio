"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({isDev}:{isDev:boolean}) {
  const [dots, setDots] = useState(0);
  useEffect(() => {
    // Animate dots
    const interval = setInterval(() => {
      setDots((prev) => (prev + 1) % 4);
    }, 400);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-12 ${isDev ? "bg-black" : "bg-white"}`}
    >
      {/* Rotating Ring */}
      <div className="relative h-24 w-24">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-transparent border-t-black border-r-gray-400"></div>
        <div
          className="absolute inset-3 animate-spin rounded-full border-4 border-transparent border-b-gray-600"
          style={{ animationDirection: "reverse", animationDuration: "1.5s" }}
        ></div>
      </div>

      {/* Loading Text */}
      <div className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold text-black">
          Loading{".".repeat(dots)}
          {Array(3 - dots)
            .fill(" ")
            .join("")}
        </h2>
        <p className="text-sm text-gray-600">Preparing your experience</p>
      </div>
    </div>
  );
}
