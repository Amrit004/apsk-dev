"use client";

import { Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";
import { FEATURED_PROJECTS, SOCIAL_LINKS, STATS } from "@/lib/data";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20 bg-slate-900" aria-label="Introduction">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">Amritpal Singh Kaur</h1>
            <p className="text-xl text-slate-300 mb-2">Graduate Software Engineer</p>
            <p className="text-slate-400 mb-6">MSc Advanced Computer Science – Queen Mary University of London (2026)</p>
            <div className="flex flex-wrap gap-3 mb-8">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-900">Contact Me</a>
              <a href={SOCIAL_LINKS.cv} download="Amritpal-Singh-Kaur-CV.pdf" className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-600 text-slate-300 hover:border-slate-500 hover:text-white font-medium transition-colors"><Download className="w-4 h-4" />Download CV</a>
            </div>
            <div className="flex gap-6">
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"><Github className="w-5 h-5" />GitHub</a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"><Linkedin className="w-5 h-5" />LinkedIn</a>
              <a href={SOCIAL_LINKS.email} className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"><Mail className="w-5 h-5" />Email</a>
            </div>
          </div>
          <div className="card">
            <h3 className="font-semibold text-white mb-4">Featured Projects</h3>
            <div className="space-y-3">
              {FEATURED_PROJECTS.map((p) => (
                <a key={p.name} href={p.url} target="_blank" rel="noopener noreferrer" className="block p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors group">
                  <div className="flex items-center justify-between"><span className="font-medium text-white group-hover:text-blue-400 transition-colors">{p.name}</span><ExternalLink className="w-4 h-4 text-slate-500 group-hover:text-blue-400 transition-colors" /></div>
                  <span className="text-sm text-slate-500">{p.desc}</span>
                </a>
              ))}
            </div>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 mt-4 text-sm transition-colors">View all projects on GitHub <ExternalLink className="w-3 h-3" /></a>
          </div>
        </div>
        <div className="flex justify-center gap-16 mt-12 pt-8 border-t border-slate-800">
          {STATS.map((s) => <div key={s.label} className="text-center"><div className="text-2xl font-bold text-white">{s.value}</div><div className="text-sm text-slate-500">{s.label}</div></div>)}
        </div>
      </div>
    </section>
  );
}
