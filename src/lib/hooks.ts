"use client";

import { useState, useEffect, useCallback, RefObject } from "react";

interface UseScrollPositionReturn {
  scrollY: number;
  isScrolled: boolean;
}

export function useScrollPosition(threshold = 50): UseScrollPositionReturn {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return {
    scrollY,
    isScrolled: scrollY > threshold,
  };
}

interface UseIntersectionObserverReturn {
  isVisible: boolean;
  ref: RefObject<HTMLDivElement | null>;
}

export function useIntersectionObserver(
  threshold = 0.1
): UseIntersectionObserverReturn {
  const [isVisible, setIsVisible] = useState(false);
  const ref = { current: null } as RefObject<HTMLDivElement | null>;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return { isVisible, ref };
}

interface UseScrollSpyReturn {
  activeSection: string;
}

export function useScrollSpy(sectionIds: string[], offset = 150): UseScrollSpyReturn {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || "");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      for (const sectionId of sectionIds) {
        const section = document.getElementById(sectionId);
        if (section) {
          const sectionTop = section.offsetTop - offset;
          const sectionBottom = sectionTop + section.offsetHeight;
          
          if (scrollY >= sectionTop && scrollY < sectionBottom) {
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

export function useDebounce<T>(value: T, delay = 300): T {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") return initialValue;
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = useCallback(
    (value: T) => {
      setStoredValue(value);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(value));
      }
    },
    [key]
  );

  return [storedValue, setValue];
}
