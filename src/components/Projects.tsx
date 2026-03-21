"use client";

import { ExternalLink, Github, Shield, Lock, Wifi, Plane, BarChart, Code, Database, Bot, Server } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "SOC Command Center",
    category: "Cybersecurity",
    description: "Security Operations Center dashboard with real-time threat detection, live attack map, and AI-powered threat analysis.",
    tech: ["Next.js", "WebSocket", "AI Analysis"],
    github: "https://github.com/Amrit004/soc-command-center",
    demo: "https://soc-command-center.vercel.app",
  },
  {
    icon: Lock,
    title: "SecureVault",
    category: "Cloud Security",
    description: "AWS SOC simulation dashboard with live threat feed, world threat map, IAM activity charts, and compliance scoring.",
    tech: ["AWS", "IAM", "JavaScript"],
    github: "https://github.com/Amrit004/SecureVault",
    demo: "https://securevault.vercel.app",
  },
  {
    icon: Code,
    title: "CipherOS",
    category: "Cryptography",
    description: "Browser-based cryptographic toolkit with AES-256 encryption, SHA hashing, and JWT decoder using Web Crypto API.",
    tech: ["Web Crypto API", "Security"],
    github: "https://github.com/Amrit004/CipherOS",
    demo: "https://cipheros.vercel.app",
  },
  {
    icon: BarChart,
    title: "Enterprise Analytics",
    category: "Data Analytics",
    description: "Analytics platform with real-time KPIs, AI-powered predictions, and interactive data visualizations.",
    tech: ["Next.js", "Recharts", "AI"],
    github: "https://github.com/Amrit004/enterprise-analytics-dashboard",
    demo: "https://enterprise-analytics-dashboard.vercel.app",
  },
  {
    icon: Wifi,
    title: "NetScan Pro",
    category: "Network Security",
    description: "Nmap/Nessus-style scanner with 4 scan modes and CVE database including Log4Shell and EternalBlue.",
    tech: ["Network Security", "CVE Database"],
    github: "https://github.com/Amrit004/Netscan-pro",
    demo: "https://netscan-pro.vercel.app",
  },
  {
    icon: Plane,
    title: "Wandr",
    category: "PWA",
    description: "AI travel planner PWA with offline support, NLP query processing, and budget planning.",
    tech: ["PWA", "Service Workers", "IndexedDB"],
    github: "https://github.com/Amrit004/TravelAgencyPwa",
    demo: "https://wandr.vercel.app",
  },
  {
    icon: Database,
    title: "CodeFlow",
    category: "Project Management",
    description: "Kanban board with JWT authentication, drag-and-drop columns, and activity logging.",
    tech: ["JWT", "REST API"],
    github: "https://github.com/Amrit004/CodeFlow",
    demo: "https://codeflow.vercel.app",
  },
  {
    icon: Bot,
    title: "NeuralStream API",
    category: "AI/ML",
    description: "RESTful API for neural network predictions with Docker containerization.",
    tech: ["Python", "TensorFlow", "Docker"],
    github: "https://github.com/Amrit004/NeuralStream-API",
  },
  {
    icon: Server,
    title: "AI Travel",
    category: "Full-Stack",
    description: "Full-stack travel booking application with authentication and payment integration.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com/Amrit004/AiTravel",
  },
  {
    icon: Code,
    title: "Mobile App",
    category: "Mobile",
    description: "Cross-platform mobile application for task management with offline sync.",
    tech: ["React Native", "Expo", "Firebase"],
    github: "https://github.com/Amrit004/MobileApp",
  },
  {
    icon: Database,
    title: "Ordering.js",
    category: "Library",
    description: "NPM package for sorting algorithms with visualization and performance benchmarking.",
    tech: ["JavaScript", "Algorithms"],
    github: "https://github.com/Amrit004/Ordering.Js",
  },
  {
    icon: BarChart,
    title: "DevMetrics",
    category: "Analytics",
    description: "GitHub analytics tool with contribution heatmap and developer scoring.",
    tech: ["GitHub API", "Canvas"],
    github: "https://github.com/Amrit004/DevMetrics",
    demo: "https://devmetrics.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
          Projects
        </h2>
        <p className="text-slate-500 mb-8 max-w-2xl">
          Selected projects showcasing skills in security, AI/ML, full-stack development, and cloud computing.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div key={project.title} className="card hover:border-blue-500 transition-colors">
              <div className="flex items-start gap-3 mb-3">
                <project.icon className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">{project.title}</h3>
                  <span className="text-sm text-slate-500">{project.category}</span>
                </div>
              </div>
              
              <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t) => (
                  <span key={t} className="px-2 py-1 rounded bg-slate-200 dark:bg-slate-700 text-xs text-slate-600 dark:text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600"
                >
                  <Github className="w-4 h-4" />
                  Code
                </a>
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <a
            href="https://github.com/Amrit004"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700"
          >
            View all projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
