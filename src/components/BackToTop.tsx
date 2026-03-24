"use client";

import { ArrowUp } from "lucide-react";
import { useScrollPosition } from "@/lib/hooks";

export default function BackToTop() {
  const { scrollY } = useScrollPosition(0);
  if (scrollY <= 500) return null;

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900" aria-label="Back to top">
      <ArrowUp className="w-5 h-5" />
    </button>
  );
}
