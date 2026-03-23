import { Briefcase, Globe, GraduationCap, Code2 } from "lucide-react";

export const HIGHLIGHTS = [
  {
    icon: Briefcase,
    title: "Enterprise Experience",
    description: "Bank of America, Amadeus & ENI",
  },
  {
    icon: Globe,
    title: "Languages",
    description: "English, Spanish, Catalan, Punjabi, Hindi",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "MSc QMUL, BSc Staffordshire (2:1)",
  },
  {
    icon: Code2,
    title: "Repositories",
    description: "23 public projects on GitHub",
  },
] as const;

export const KEY_STRENGTHS = [
  "Full-stack development with JavaScript, TypeScript, and Python",
  "Cloud infrastructure and deployment using AWS and Docker",
  "Security-focused approach with experience in regulated environments",
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/Amrit004",
  linkedin: "https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1",
  email: "mailto:ap.singhkaur@gmail.com",
} as const;

export const FEATURED_PROJECTS = [
  {
    name: "SOC Command Center",
    desc: "Real-time threat detection dashboard",
    url: "https://github.com/Amrit004/soc-command-center",
  },
  {
    name: "Enterprise Analytics",
    desc: "AI-powered data visualization",
    url: "https://enterprise-analytics-dashboard.vercel.app",
  },
  {
    name: "SecureVault",
    desc: "AWS security simulation",
    url: "https://securevault.vercel.app",
  },
  {
    name: "CipherOS",
    desc: "Browser cryptography toolkit",
    url: "https://cipheros.vercel.app",
  },
] as const;

export const STATS = [
  { value: 3, label: "Enterprise Companies" },
  { value: 2, label: "CS Degrees" },
  { value: 5, label: "Languages" },
] as const;
