"use client";

import { useState } from "react";
import { ExternalLink, Github, Shield, Lock, Wifi, Plane, BarChart, Code, Database, Bot, X, FileCode } from "lucide-react";

const projects = [
  {
    icon: Shield,
    title: "SOC Command Center",
    category: "Cybersecurity",
    description: "Security Operations Center dashboard with real-time threat detection, live attack map, incident response, network monitoring, compliance tracking, and AI-powered threat analysis.",
    tech: ["Next.js", "WebSocket", "AI Analysis", "Compliance"],
    github: "https://github.com/Amrit004/soc-command-center",
    features: [
      "Real-time threat visualization on interactive world map",
      "AI-powered threat severity scoring",
      "Incident response workflow management",
      "Compliance tracking (GDPR, SOC2, ISO27001)",
      "Live WebSocket-based attack feed simulation"
    ]
  },
  {
    icon: Lock,
    title: "SecureVault",
    category: "Cloud Security",
    description: "AWS SOC simulation dashboard with live threat feed, animated world threat map, IAM activity charts, and compliance scoring.",
    tech: ["AWS", "IAM", "JavaScript", "SOC Dashboard"],
    github: "https://github.com/Amrit004/SecureVault",
    demo: "https://securevault.vercel.app",
    features: [
      "Real-time AWS IAM activity monitoring simulation",
      "Animated world threat map with attack visualization",
      "Compliance scoring dashboard",
      "Threat feed with categorized alerts",
      "60fps smooth animations with vanilla JavaScript"
    ]
  },
  {
    icon: Code,
    title: "CipherOS",
    category: "Cryptography",
    description: "Browser-based cryptographic toolkit with AES-256-GCM encryption, SHA-3/MD5 hashing, JWT decoder, and password strength analyser.",
    tech: ["Web Crypto API", "AES-256-GCM", "Security"],
    github: "https://github.com/Amrit004/CipherOS",
    demo: "https://cipheros.vercel.app",
    features: [
      "Military-grade AES-256-GCM encryption",
      "SHA-3 and MD5 hashing algorithms",
      "JWT token decoder and validator",
      "Password strength analyser",
      "Zero-knowledge architecture (all client-side)"
    ]
  },
  {
    icon: BarChart,
    title: "Enterprise Analytics",
    category: "Data Analytics",
    description: "Enterprise-grade analytics platform with real-time KPIs, AI-powered predictions via linear regression, and interactive data visualizations.",
    tech: ["Next.js", "Recharts", "AI", "Linear Regression"],
    github: "https://github.com/Amrit004/enterprise-analytics-dashboard",
    demo: "https://enterprise-analytics-dashboard.vercel.app",
    features: [
      "Real-time KPI tracking with live updates",
      "AI-powered predictions using linear regression",
      "Interactive charts using Recharts",
      "Traffic source analysis",
      "Memoized rendering for large datasets"
    ]
  },
  {
    icon: Wifi,
    title: "NetScan Pro",
    category: "Network Security",
    description: "Nmap/Nessus-style scanner simulation with 4 scan modes (TCP, UDP, SYN, Comprehensive) and comprehensive CVE database.",
    tech: ["Network Security", "CVE Database", "Port Scanning"],
    github: "https://github.com/Amrit004/Netscan-pro",
    features: [
      "4 scan modes: TCP, UDP, SYN, Comprehensive",
      "100+ CVEs including Log4Shell and EternalBlue",
      "Port vulnerability severity scoring",
      "Realistic scan algorithm simulation",
      "Detailed vulnerability reports"
    ]
  },
  {
    icon: Plane,
    title: "Wandr",
    category: "PWA",
    description: "AI travel planner PWA with offline support, NLP query processing, budget planning, and full offline capability.",
    tech: ["PWA", "Service Workers", "IndexedDB", "NLP"],
    github: "https://github.com/Amrit004/TravelAgencyPwa",
    demo: "https://wandr.vercel.app",
    features: [
      "Client-side AI matching engine",
      "NLP-powered query processing",
      "Budget planning and cost estimation",
      "Full offline support with Workbox",
      "IndexedDB for local data persistence"
    ]
  },
  {
    icon: Database,
    title: "CodeFlow",
    category: "Project Management",
    description: "Kanban board with JWT authentication, drag-and-drop columns, multi-project support, and activity logging.",
    tech: ["JWT", "REST API", "dnd-kit"],
    github: "https://github.com/Amrit004/CodeFlow",
    demo: "https://codeflow.vercel.app",
    features: [
      "Stateless JWT authentication with HttpOnly cookies",
      "Drag-and-drop task management",
      "Multi-project support",
      "Activity logging and history",
      "WebSocket-ready architecture"
    ]
  },
  {
    icon: Bot,
    title: "NeuralStream API",
    category: "AI/ML",
    description: "RESTful API for neural network predictions with real-time processing and Docker containerization.",
    tech: ["Python", "TensorFlow", "Docker", "FastAPI"],
    github: "https://github.com/Amrit004/NeuralStream-API",
    features: [
      "Containerized Flask/FastAPI service",
      "TensorFlow model integration",
      "Real-time prediction processing",
      "Docker Compose deployment ready",
      "RESTful API endpoints"
    ]
  },
  {
    icon: FileCode,
    title: "Lightweight Verifier",
    category: "Formal Methods",
    description: "Pure-Python CTL model checker with Kripke structure support, counterexample generation, and lasso detection.",
    tech: ["Python", "Formal Verification", "CTL", "Algorithms"],
    github: "https://github.com/Amrit004/Lightweight-Software-Verification-Tool",
    features: [
      "34/34 tests passing — full CTL operator coverage",
      "Nested counterexample generation for AG(p→AF q)",
      "Kosaraju's SCC algorithm for liveness properties",
      "Fixed-point computation for model checking",
      "Zero dependencies — pure Python 3.10+"
    ]
  },
  {
    icon: BarChart,
    title: "DevMetrics",
    category: "Analytics",
    description: "GitHub analytics tool with contribution heatmap, developer scoring algorithm, and NPM registry statistics.",
    tech: ["GitHub API", "Canvas", "NPM Registry"],
    github: "https://github.com/Amrit004/DevMetrics",
    features: [
      "Real-time GitHub REST API integration",
      "Custom Canvas-based visualizations",
      "Developer scoring algorithm",
      "Contribution heatmap",
      "NPM package statistics"
    ]
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  return (
    <>
      <section id="projects" className="py-16 bg-slate-950" aria-labelledby="projects-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="projects-heading" className="text-2xl font-bold text-white mb-2">
            Projects
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl">
            Selected projects showcasing skills in security, AI/ML, full-stack development, and cloud computing.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <button
                key={project.title}
                onClick={() => setSelectedProject(project)}
                className="card text-left hover:border-blue-500 transition-colors cursor-pointer w-full"
              >
                <div className="flex items-start gap-3 mb-3">
                  <project.icon className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">{project.title}</h3>
                    <span className="text-sm text-slate-500">{project.category}</span>
                  </div>
                </div>
                
                <p className="text-slate-400 text-sm mb-4">
                  {project.description.substring(0, 100)}...
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 3).map((t) => (
                    <span key={t} className="px-2 py-1 rounded bg-slate-700 text-xs text-slate-300">
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="https://github.com/Amrit004"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
            >
              View all projects on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-slate-800 border border-slate-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex items-start justify-between">
              <div className="flex items-start gap-3">
                <selectedProject.icon className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">{selectedProject.title}</h3>
                  <span className="text-sm text-slate-500">{selectedProject.category}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-slate-400 hover:text-white p-1"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6">
              <p className="text-slate-300 mb-6">{selectedProject.description}</p>
              
              <h4 className="font-semibold text-white mb-3">Key Features</h4>
              <ul className="space-y-2 mb-6">
                {selectedProject.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-slate-700 text-sm text-slate-300">
                    {t}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-4">
                <a
                  href={selectedProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View Code
                </a>
                {selectedProject.demo && (
                  <a
                    href={selectedProject.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
