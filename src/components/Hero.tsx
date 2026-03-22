"use client";

import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

const featuredProjects = [
  { name: "SOC Command Center", desc: "Real-time threat detection dashboard", url: "https://github.com/Amrit004/soc-command-center" },
  { name: "Enterprise Analytics", desc: "AI-powered data visualization", url: "https://enterprise-analytics-dashboard.vercel.app" },
  { name: "SecureVault", desc: "AWS security simulation", url: "https://securevault.vercel.app" },
  { name: "CipherOS", desc: "Browser cryptography toolkit", url: "https://cipheros.vercel.app" },
];

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
              Amritpal Singh Kaur
            </h1>

            <p className="text-xl text-slate-300 mb-2">
              Graduate Software Engineer
            </p>

            <p className="text-slate-400 mb-6">
              MSc Advanced Computer Science – Queen Mary University of London (2026)
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/cv.pdf"
                download="Amritpal-Singh-Kaur-CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/Amrit004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="mailto:ap.singhkaur@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>

          <div className="card">
            <h3 className="font-semibold text-white mb-4">Featured Projects</h3>
            <div className="space-y-3">
              {featuredProjects.map((project) => (
                <a
                  key={project.name}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-medium text-white group-hover:text-blue-400 transition-colors">{project.name}</span>
                    <ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="text-sm text-slate-500">{project.desc}</span>
                </a>
              ))}
            </div>
            <a
              href="https://github.com/Amrit004"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 text-sm"
            >
              View all 23 projects on GitHub
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        <div className="flex justify-center gap-16 mt-12 pt-8 border-t border-slate-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-white">3</div>
            <div className="text-sm text-slate-500">Enterprise Companies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">2</div>
            <div className="text-sm text-slate-500">CS Degrees</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-white">5</div>
            <div className="text-sm text-slate-500">Languages</div>
          </div>
        </div>
      </div>
    </section>
  );
}
