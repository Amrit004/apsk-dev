import React from "react";
import { Briefcase, Globe, GraduationCap, Code2, Shield, Lock, Wifi, Plane, BarChart, Code, Database, Bot, FileCode, Building2, Calendar, MapPin, GraduationCap as GradIcon, Award, Code as CodeIcon, Database as DBIcon, Cloud, Shield as ShieldIcon, Palette, Terminal } from "lucide-react";

export const HIGHLIGHTS = [
  { icon: Briefcase, title: "Enterprise Experience", description: "Brock Solutions, Bank of America, Amadeus & ENI" },
  { icon: Globe, title: "Languages", description: "English, Spanish, Catalan, Punjabi, Hindi" },
  { icon: GraduationCap, title: "Education", description: "MSc QMUL, BSc Staffordshire (2:1)" },
  { icon: Code2, title: "Repositories", description: "11 public projects on GitHub" },
] as const;

export const KEY_STRENGTHS = [
  "Full-stack development with JavaScript, TypeScript, and Python",
  "Cloud infrastructure and deployment using AWS and Docker",
  "Security-focused approach with experience in regulated environments",
  "Real-time operations support and incident management in mission-critical airport environments",
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/Amrit004",
  linkedin: "https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1",
  email: "mailto:ap.singhkaur@gmail.com",
  cv: "/cv.pdf",
} as const;

export const FEATURED_PROJECTS = [
  { name: "SOC Command Center", desc: "Real-time threat detection dashboard", url: "https://github.com/Amrit004/soc-command-center" },
  { name: "Enterprise Analytics", desc: "AI-powered data visualization", url: "https://enterprise-analytics-dashboard.vercel.app" },
  { name: "SecureVault", desc: "AWS security simulation", url: "https://securevault.vercel.app" },
  { name: "CipherOS", desc: "Browser cryptography toolkit", url: "https://cipheros.vercel.app" },
] as const;

export const STATS = [
  { value: 4, label: "Enterprise Companies" },
  { value: 2, label: "CS Degrees" },
  { value: 5, label: "Languages" },
] as const;

export const EDUCATION = [
  {
    school: "Queen Mary University of London",
    degree: "MSc Advanced Computer Science",
    period: "2025 - 2026",
    grade: "In Progress (Expected Merit)",
    modules: "Cloud Architecture, Machine Learning, Security & Auth, Data Analytics, Distributed Systems",
  },
  {
    school: "Staffordshire University",
    degree: "BSc (Hons) Computer Science",
    period: "2022 - 2025",
    grade: "2:1 Honours",
    modules: "Software Engineering, Cloud Computing, AI & ML, Cybersecurity, Full-Stack Development",
  },
] as const;

export const EXPERIENCE: Array<{
  company: string;
  role: string;
  period: string;
  location: string;
  subtext?: string;
  bullets: string[];
}> = [
  {
    company: "Brock Solutions",
    role: "Onsite Software Support Specialist",
    period: "April 2026 - Present",
    location: "Heathrow Airport, London",
    bullets: [
      "Troubleshoot software bugs, application deficiencies, and performance issues for industrial automation systems",
      "Serve as first point of contact for technical incidents, quickly identifying problems to reduce end user impact",
      "Provide excellent customer service through thorough and diligent communication and updates",
      "Collaborate with cross-functional teams to analyze, document, and recommend improvements to products",
      "Contribute to Service Team knowledge base through documentation and knowledge articles",
      "Support enterprise systems including Windows Servers, SQL databases, Azure cloud, and industrial automation interfaces",
    ],
  },
  {
    company: "Bank of America",
    role: "Deployment / Breakfix Engineer",
    period: "April 2022 - April 2026",
    location: "London, UK",
    subtext: "Employed by Manpower (Zoom IT)",
    bullets: [
      "Supported 100+ end users across enterprise desktop systems in a regulated financial environment",
      "Diagnosed and resolved hardware and software issues to minimize downtime",
      "Led large-scale deployment initiatives, completing 500+ deployments across the organization",
      "Implemented security patches in compliance with financial industry regulations",
    ],
  },
  {
    company: "Amadeus",
    role: "Field Support Technician (Level 2)",
    period: "April 2022 - April 2026",
    location: "London, UK",
    subtext: "Employed by Manpower (Zoom IT)",
    bullets: [
      "Delivered laptop and mobile device replacements with enterprise applications for travel tech operations",
      "Provided escalation support for complex technical issues",
      "Maintained detailed documentation of system configurations",
    ],
  },
  {
    company: "ENI",
    role: "IT Technician / Support",
    period: "April 2022 - April 2026",
    location: "London, UK",
    subtext: "Employed by Manpower (Zoom IT)",
    bullets: [
      "Assisted in Windows 11 migration, ensuring full working stability across energy infrastructure systems",
      "Provided frontline support for hardware, software, and network issues",
      "Monitored enterprise system uptime, maintaining 99.9% stability",
    ],
  },
] as const;

export const SKILLS = [
  { icon: CodeIcon, title: "Programming", skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "HTML", "CSS"] },
  { icon: Terminal, title: "Frameworks", skills: ["React", "Next.js", "Node.js", "Express.js", "REST APIs"] },
  { icon: DBIcon, title: "Databases", skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "SQL Server"] },
  { icon: Cloud, title: "Cloud & DevOps", skills: ["AWS (EC2, S3, Lambda)", "Azure", "Docker", "Linux", "Windows Server", "CI/CD", "Vercel"] },
  { icon: ShieldIcon, title: "Security", skills: ["Network Security", "IAM", "JWT", "OAuth", "Cryptography"] },
  { icon: Palette, title: "Tools & Methods", skills: ["Git", "GitHub", "Agile/Scrum", "JIRA", "Figma", "Postman", "Industrial Automation"] },
] as const;

export type Project = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  category: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
  features: string[];
};

export const PROJECTS: Project[] = [
  { icon: Shield, title: "SOC Command Center", category: "Cybersecurity", description: "Security Operations Center dashboard with real-time threat detection, live attack map, incident response, network monitoring, compliance tracking, and AI-powered threat analysis.", tech: ["Next.js", "WebSocket", "AI Analysis", "Compliance"], github: "https://github.com/Amrit004/soc-command-center", features: ["Real-time threat visualization on interactive world map", "AI-powered threat severity scoring", "Incident response workflow management", "Compliance tracking (GDPR, SOC2, ISO27001)", "Live WebSocket-based attack feed simulation"] },
  { icon: Lock, title: "SecureVault", category: "Cloud Security", description: "AWS SOC simulation dashboard with live threat feed, animated world threat map, IAM activity charts, and compliance scoring.", tech: ["AWS", "IAM", "JavaScript", "SOC Dashboard"], github: "https://github.com/Amrit004/SecureVault", demo: "https://securevault.vercel.app", features: ["Real-time AWS IAM activity monitoring simulation", "Animated world threat map with attack visualization", "Compliance scoring dashboard", "Threat feed with categorized alerts", "60fps smooth animations with vanilla JavaScript"] },
  { icon: Code, title: "CipherOS", category: "Cryptography", description: "Browser-based cryptographic toolkit with AES-256-GCM encryption, SHA-3/MD5 hashing, JWT decoder, and password strength analyser.", tech: ["Web Crypto API", "AES-256-GCM", "Security"], github: "https://github.com/Amrit004/CipherOS", demo: "https://cipheros.vercel.app", features: ["Military-grade AES-256-GCM encryption", "SHA-3 and MD5 hashing algorithms", "JWT token decoder and validator", "Password strength analyser", "Zero-knowledge architecture (all client-side)"] },
  { icon: BarChart, title: "Enterprise Analytics", category: "Data Analytics", description: "Enterprise-grade analytics platform with real-time KPIs, AI-powered predictions via linear regression, and interactive data visualizations.", tech: ["Next.js", "Recharts", "AI", "Linear Regression"], github: "https://github.com/Amrit004/enterprise-analytics-dashboard", demo: "https://enterprise-analytics-dashboard.vercel.app", features: ["Real-time KPI tracking with live updates", "AI-powered predictions using linear regression", "Interactive charts using Recharts", "Traffic source analysis", "Memoized rendering for large datasets"] },
  { icon: Wifi, title: "NetScan Pro", category: "Network Security", description: "Nmap/Nessus-style scanner simulation with 4 scan modes (TCP, UDP, SYN, Comprehensive) and comprehensive CVE database.", tech: ["Network Security", "CVE Database", "Port Scanning"], github: "https://github.com/Amrit004/Netscan-pro", features: ["4 scan modes: TCP, UDP, SYN, Comprehensive", "100+ CVEs including Log4Shell and EternalBlue", "Port vulnerability severity scoring", "Realistic scan algorithm simulation", "Detailed vulnerability reports"] },
  { icon: Plane, title: "Wandr", category: "PWA", description: "AI travel planner PWA with offline support, NLP query processing, budget planning, and full offline capability.", tech: ["PWA", "Service Workers", "IndexedDB", "NLP"], github: "https://github.com/Amrit004/TravelAgencyPwa", demo: "https://wandr.vercel.app", features: ["Client-side AI matching engine", "NLP-powered query processing", "Budget planning and cost estimation", "Full offline support with Workbox", "IndexedDB for local data persistence"] },
  { icon: Database, title: "CodeFlow", category: "Project Management", description: "Kanban board with JWT authentication, drag-and-drop columns, multi-project support, and activity logging.", tech: ["JWT", "REST API", "dnd-kit"], github: "https://github.com/Amrit004/CodeFlow", demo: "https://codeflow.vercel.app", features: ["Stateless JWT authentication with HttpOnly cookies", "Drag-and-drop task management", "Multi-project support", "Activity logging and history", "WebSocket-ready architecture"] },
  { icon: Bot, title: "NeuralStream API", category: "AI/ML", description: "RESTful API for neural network predictions with real-time processing and Docker containerization.", tech: ["Python", "TensorFlow", "Docker", "FastAPI"], github: "https://github.com/Amrit004/NeuralStream-API", features: ["Containerized Flask/FastAPI service", "TensorFlow model integration", "Real-time prediction processing", "Docker Compose deployment ready", "RESTful API endpoints"] },
  { icon: FileCode, title: "Lightweight Verifier", category: "Formal Methods", description: "Pure-Python CTL model checker with Kripke structure support, counterexample generation, and lasso detection.", tech: ["Python", "Formal Verification", "CTL", "Algorithms"], github: "https://github.com/Amrit004/Lightweight-Software-Verification-Tool", features: ["34/34 tests passing — full CTL operator coverage", "Nested counterexample generation for AG(p→AF q)", "Kosaraju's SCC algorithm for liveness properties", "Fixed-point computation for model checking", "Zero dependencies — pure Python 3.10+"] },
  { icon: BarChart, title: "DevMetrics", category: "Analytics", description: "GitHub analytics tool with contribution heatmap, developer scoring algorithm, and NPM registry statistics.", tech: ["GitHub API", "Canvas", "NPM Registry"], github: "https://github.com/Amrit004/DevMetrics", features: ["Real-time GitHub REST API integration", "Custom Canvas-based visualizations", "Developer scoring algorithm", "Contribution heatmap", "NPM package statistics"] },
] as const;
