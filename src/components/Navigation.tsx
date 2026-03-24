"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useScrollPosition, useScrollSpy } from "@/lib/hooks";
import { NAV_ITEMS, SECTION_IDS } from "@/lib/utils";

export default function Navigation() {
  const { isScrolled } = useScrollPosition(50);
  const { activeSection } = useScrollSpy(SECTION_IDS);
  const [mobile, setMobile] = useState(false);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-slate-950/95 shadow-lg border-b border-slate-800/50 backdrop-blur-md" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-white hover:text-blue-400 transition-colors">APSK</a>
          <div className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => {
              const id = item.href.substring(1);
              return (
                <a key={item.name} href={item.href} className={`text-sm font-medium transition-all duration-200 relative ${activeSection === id ? "text-blue-400" : "text-slate-400 hover:text-white"}`} aria-current={activeSection === id ? "page" : undefined}>
                  {item.name}
                  {activeSection === id && <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-400 rounded-full" />}
                </a>
              );
            })}
          </div>
          <button onClick={() => setMobile(!mobile)} className="md:hidden p-2 text-slate-300 hover:text-white" aria-label={mobile ? "Close menu" : "Open menu"}>{mobile ? <X size={24} /> : <Menu size={24} />}</button>
        </div>
        {mobile && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4">
            {NAV_ITEMS.map((item) => (
              <a key={item.name} href={item.href} onClick={() => setMobile(false)} className={`block py-3 text-base font-medium transition-colors ${activeSection === item.href.substring(1) ? "text-blue-400" : "text-slate-300 hover:text-white"}`}>{item.name}</a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
