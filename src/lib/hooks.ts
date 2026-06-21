import { useState, useEffect } from "react";

export function useScroll(threshold = 50, sectionIds: string[] = [], spyOffset = 150) {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      setScrollY(currentY);

      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          const top = rect.top + window.scrollY - spyOffset;
          if (currentY >= top && currentY < top + rect.height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold, sectionIds.join(","), spyOffset]);

  return { scrollY, isScrolled: scrollY > threshold, activeSection };
}

export function useInView(options?: IntersectionObserverInit) {
  const [ref, setRef] = useState<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(ref);
      }
    }, options);
    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, options?.threshold, options?.rootMargin]);

  return { ref: setRef, inView };
}
