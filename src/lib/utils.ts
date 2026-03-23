export function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(" ");
}

export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
  });
}

export function truncate(str: string, length: number): string {
  if (str.length <= length) return str;
  return str.slice(0, length) + "...";
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function generateId(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).substr(2, 9)}`;
}

export const LINKS = {
  github: "https://github.com/Amrit004",
  linkedin: "https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1",
  email: "mailto:ap.singhkaur@gmail.com",
  cv: "/cv.pdf",
} as const;

export const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Education", href: "#education" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
] as const;

export const SECTION_IDS = NAV_ITEMS.map((item) => item.href.substring(1));
