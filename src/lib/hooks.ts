"use client";

import { useState, useEffect, RefObject } from "react";

export function useScrollPosition(threshold = 50) {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return { scrollY, isScrolled: scrollY > threshold };
}

export function useScrollSpy(sectionIds: string[], offset = 150) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section) {
          const top = section.offsetTop - offset;
          if (scrollY >= top && scrollY < top + section.offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sectionIds, offset]);
  return { activeSection };
}
