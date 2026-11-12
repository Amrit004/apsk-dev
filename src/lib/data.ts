import React from "react";
import { Briefcase, Globe, GraduationCap, Code2, Shield, Wifi, BarChart, Code, FileCode, Code as CodeIcon, Database as DBIcon, Cloud, Shield as ShieldIcon, Palette, Terminal, Wrench } from "lucide-react";

export const HIGHLIGHTS = [
  { icon: Briefcase, title: "Enterprise Experience", description: "Brock Solutions + Manpower (Zoom IT): BOA, Amadeus & ENI" },
  { icon: Globe, title: "Languages", description: "English, Spanish, Catalan, Punjabi, Hindi" },
  { icon: GraduationCap, title: "Education", description: "MSc QMUL (Merit), BSc Staffordshire (2:1)" },
  { icon: Code2, title: "Repositories", description: "11 public projects on GitHub" },
] as const;

export const KEY_STRENGTHS = [
  "Enterprise software support and incident resolution in 24/7, SLA-driven environments",
  "Root cause analysis using application logs, SQL queries, and system diagnostics",
  "Windows Server, Azure, SQL databases, and industrial automation systems",
  "Full-stack development with JavaScript, TypeScript, and Python",
  "Security-focused delivery across regulated finance, travel, and energy environments",
  "Customer-facing communication in five languages",
] as const;

export const SOCIAL_LINKS = {
  github: "https://github.com/Amrit004",
  linkedin: "https://www.linkedin.com/in/amritpal-singh-kaur-b54b9a1b1",
  email: "mailto:ap.singhkaur@gmail.com",
  cv: "/cv.pdf",
} as const;

export const FEATURED_PROJECTS = [
  { name: "SOC Command Center", desc: "Real-time threat detection dashboard", url: "https://github.com/Amrit004/soc-command-center" },
  { name: "Enterprise Analytics", desc: "AI-powered data visualization", url: "https://enterprise-analytics-dashboard.vercel.app" },
  { name: "Lightweight Verifier", desc: "CTL model checker in pure Python", url: "https://github.com/Amrit004/Lightweight-Software-Verification-Tool" },
  { name: "CipherOS", desc: "Browser cryptography toolkit", url: "https://amrit004.github.io/CipherOS/" },
] as const;

export const EDUCATION = [
  {
    school: "Queen Mary University of London",
    degree: "MSc Advanced Computer Science",
    period: "2025 - 2026",
    grade: "Completed - Merit",
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

export type ExperienceRole = {
  client: string;
  role: string;
  bullets: string[];
};

export type CustomerSuccessRole = {
  title: string;
  bullets: string[];
};

export type CustomerSuccessBlock = {
  title: string;
  summary: string[];
  roles: CustomerSuccessRole[];
};

export const EXPERIENCE: Array<{
  company: string;
  role: string;
  period: string;
  location: string;
  subtext?: string;
  bullets: string[];
  roles?: ExperienceRole[];
  customerSuccess?: CustomerSuccessBlock;
}> = [
  {
    company: "Brock Solutions",
    role: "Onsite Software Support Specialist",
    period: "April 2026 - Present",
    location: "Heathrow Airport, London",
    bullets: [
      "Troubleshoot software bugs, application deficiencies, and performance issues for mission-critical baggage handling systems (BHS) supporting 24/7 Heathrow operations",
      "Investigate and resolve incidents by reviewing system and application logs and analysing SQL baggage database (BODB) records, applying targeted fixes to restore service with minimal passenger disruption",
      "Serve as first point of contact for technical incidents, triaging by business impact and keeping critical systems within tight SLAs and low mean-time-to-resolution",
      "Perform root cause analysis on recurring faults and implement permanent fixes, materially reducing repeat incidents and unplanned downtime",
      "Collaborate with cross-functional teams and vendors to analyse, document, and drive improvements to products and interfaces",
      "Create and refine runbooks, knowledge articles, and diagnostic scripts to automate routine checks and accelerate incident resolution",
      "Support enterprise systems including Windows Servers, SQL databases, Azure cloud, and industrial automation interfaces aligned with airline baggage-tracking compliance (IATA Resolution 753)",
    ],
    customerSuccess: {
      title: "Customer Success & International Delivery",
      summary: [
        "Monthly service reviews with airline stakeholders",
        "Incident and problem follow-up through to resolution",
        "On-site product training in Mexico and Spain, delivered in Spanish",
        "Customer relationship management and escalation handling",
      ],
      roles: [
        {
          title: "Customer Success Manager — Airline Account",
          bullets: [
            "Serve as Customer Success Manager for the airline account, running monthly service reviews with customer stakeholders to confirm everything is on track and review any issues from the previous month.",
            "Track open problems and agreed actions through to resolution, escalating where needed and keeping the customer informed.",
            "Act as the main point of contact between the airline and the technical/support team, making sure customer concerns are understood and addressed.",
            "Build strong customer relationships and ensure the customer feels supported, informed, and confident in the service.",
          ],
        },
        {
          title: "International Product Training — Mexico & Spain",
          bullets: [
            "Travelled on-site to Mexico and Spain to train airline and airport staff on the system.",
            "Delivered training in Spanish, teaching users how the product works and answering their questions and concerns directly.",
            "Helped local teams feel confident using the system, adapting explanations to different user needs and levels of technical knowledge.",
            "Acted as the on-site point of contact for customer concerns during the rollout, resolving issues quickly and keeping local teams informed.",
          ],
        },
      ],
    },
  },
  {
    company: "Manpower (Zoom IT)",
    role: "IT Support Engineer — Onsite Consultant",
    period: "April 2022 - April 2026",
    location: "London, UK",
    subtext:
      "Onsite Manpower consultant delivering enterprise IT deployment and support for three enterprise clients",
    bullets: [
      "Delivered enterprise IT deployment and support services across regulated finance, global travel-tech, and energy sectors",
      "Managed multiple SLA-bound workloads and competing priorities across three high-security client environments",
    ],
    roles: [
      {
        client: "Bank of America",
        role: "Deployment / Breakfix Engineer",
        bullets: [
          "Supported 100+ end users across enterprise desktop systems in a regulated financial environment",
          "Diagnosed and resolved hardware and software issues to minimize downtime",
          "Led large-scale deployment initiatives, completing 500+ deployments across the organization",
          "Implemented security patches in compliance with financial industry regulations",
        ],
      },
      {
        client: "Amadeus",
        role: "Field Support Technician (Level 2)",
        bullets: [
          "Delivered laptop and mobile device replacements with enterprise applications for travel tech operations",
          "Provided escalation support for complex technical issues",
          "Maintained detailed documentation of system configurations",
        ],
      },
      {
        client: "ENI",
        role: "IT Technician / Support",
        bullets: [
          "Assisted in Windows 11 migration, ensuring full working stability across energy infrastructure systems",
          "Provided frontline support for hardware, software, and network issues",
          "Monitored enterprise system uptime, maintaining 99.9% stability",
        ],
      },
    ],
  },
] as const;

export const SKILLS = [
  { icon: CodeIcon, title: "Programming", skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "HTML", "CSS"] },
  { icon: Terminal, title: "Frameworks", skills: ["React", "Next.js", "Node.js", "Express.js", "REST APIs"] },
  { icon: DBIcon, title: "Databases", skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite", "SQL Server"] },
  { icon: Cloud, title: "Cloud & DevOps", skills: ["AWS (EC2, S3, Lambda)", "Azure", "Docker", "Linux", "Windows Server", "CI/CD", "Vercel"] },
  { icon: ShieldIcon, title: "Security", skills: ["Network Security", "IAM", "JWT", "OAuth", "Cryptography"] },
  { icon: Wrench, title: "Support & Operations", skills: ["Incident Management", "Root Cause Analysis", "Log Analysis", "SQL Diagnostics", "SLA Management", "SmartSuite / BHS", "Multi-terminal Networks", "IATA Resolution 753"] },
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
  { icon: Code, title: "CipherOS", category: "Cryptography", description: "Browser-based cryptographic toolkit with AES-256-GCM encryption, SHA-3/MD5 hashing, JWT decoder, and password strength analyser.", tech: ["Web Crypto API", "AES-256-GCM", "Security"], github: "https://github.com/Amrit004/CipherOS", demo: "https://amrit004.github.io/CipherOS/", features: ["Military-grade AES-256-GCM encryption", "SHA-3 and MD5 hashing algorithms", "JWT token decoder and validator", "Password strength analyser", "Zero-knowledge architecture (all client-side)"] },
  { icon: BarChart, title: "Enterprise Analytics", category: "Data Analytics", description: "Enterprise-grade analytics platform with real-time KPIs, AI-powered predictions via linear regression, and interactive data visualizations.", tech: ["Next.js", "Recharts", "AI", "Linear Regression"], github: "https://github.com/Amrit004/enterprise-analytics-dashboard", demo: "https://enterprise-analytics-dashboard.vercel.app", features: ["Real-time KPI tracking with live updates", "AI-powered predictions using linear regression", "Interactive charts using Recharts", "Traffic source analysis", "Memoized rendering for large datasets"] },
  { icon: Wifi, title: "NetScan Pro", category: "Network Security", description: "Nmap/Nessus-style scanner simulation with 4 scan modes (TCP, UDP, SYN, Comprehensive) and comprehensive CVE database.", tech: ["Network Security", "CVE Database", "Port Scanning"], github: "https://github.com/Amrit004/Netscan-pro", features: ["4 scan modes: TCP, UDP, SYN, Comprehensive", "100+ CVEs including Log4Shell and EternalBlue", "Port vulnerability severity scoring", "Realistic scan algorithm simulation", "Detailed vulnerability reports"] },
  { icon: FileCode, title: "Lightweight Verifier", category: "Formal Methods", description: "Pure-Python CTL model checker with Kripke structure support, counterexample generation, and lasso detection.", tech: ["Python", "Formal Verification", "CTL", "Algorithms"], github: "https://github.com/Amrit004/Lightweight-Software-Verification-Tool", features: ["34/34 tests passing — full CTL operator coverage", "Nested counterexample generation for AG(p→AF q)", "Kosaraju's SCC algorithm for liveness properties", "Fixed-point computation for model checking", "Zero dependencies — pure Python 3.10+"] },
] as const;
