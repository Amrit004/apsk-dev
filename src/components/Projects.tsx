"use client";

import { useState, useEffect, useCallback } from "react";
import { ExternalLink, Github, X } from "lucide-react";
import { PROJECTS, type Project } from "@/lib/data";

export default function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  const close = useCallback(() => setSelected(null), []);

  useEffect(() => {
    if (!selected) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [selected, close]);

  useEffect(() => {
    if (selected) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [selected]);

  return (
    <>
      <section id="projects" className="py-16 bg-slate-950" aria-labelledby="projects-heading">
        <div className="max-w-6xl mx-auto px-6">
          <h2 id="projects-heading" className="text-2xl font-bold text-white mb-2">Projects</h2>
          <p className="text-slate-400 mb-8">Selected projects showcasing skills in security, AI/ML, full-stack development, and cloud computing.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((p) => (
              <button key={p.title} onClick={() => setSelected(p)} className="card text-left hover:border-blue-500 transition-colors cursor-pointer w-full" aria-label={`View details for ${p.title}`}>
                <div className="flex items-start gap-3 mb-3">
                  <p.icon className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-white">{p.title}</h3>
                    <span className="text-sm text-slate-500">{p.category}</span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4">{p.description.slice(0, 100)}...</p>
                <div className="flex flex-wrap gap-2">
                  {p.tech.slice(0, 3).map((t) => <span key={t} className="px-2 py-1 rounded bg-slate-700 text-xs text-slate-300">{t}</span>)}
                </div>
              </button>
            ))}
          </div>
          <div className="mt-8 text-center">
            <a href="https://github.com/Amrit004" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors">
              View all projects on GitHub <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={close} role="dialog" aria-modal="true" aria-label={`Project details: ${selected.title}`}>
          <div className="bg-slate-800 border border-slate-700 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-slate-800 border-b border-slate-700 p-6 flex items-start justify-between">
              <div className="flex items-start gap-3">
                <selected.icon className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
                <div><h3 className="text-xl font-bold text-white">{selected.title}</h3><span className="text-sm text-slate-500">{selected.category}</span></div>
              </div>
              <button onClick={close} className="text-slate-400 hover:text-white p-1" aria-label="Close modal"><X className="w-6 h-6" /></button>
            </div>
            <div className="p-6">
              <p className="text-slate-300 mb-6">{selected.description}</p>
              <h4 className="font-semibold text-white mb-3">Key Features</h4>
              <ul className="space-y-2 mb-6">{selected.features.map((f, i) => <li key={i} className="flex items-start gap-3 text-slate-400"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />{f}</li>)}</ul>
              <div className="flex flex-wrap gap-2 mb-6">{selected.tech.map((t) => <span key={t} className="px-3 py-1 rounded-full bg-slate-700 text-sm text-slate-300">{t}</span>)}</div>
              <div className="flex gap-4">
                <a href={selected.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-700 hover:bg-slate-600 text-white transition-colors"><Github className="w-5 h-5" />View Code</a>
                {selected.demo && <a href={selected.demo} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors"><ExternalLink className="w-5 h-5" />Live Demo</a>}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
