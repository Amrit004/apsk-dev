"use client";

import { SKILLS } from "@/lib/data";

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-slate-950" aria-labelledby="skills-heading">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="skills-heading" className="text-2xl font-bold text-white mb-8">Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {SKILLS.map((cat) => (
            <div key={cat.title} className="card">
              <div className="flex items-center gap-3 mb-4"><cat.icon className="w-5 h-5 text-blue-400" /><h3 className="font-semibold text-white">{cat.title}</h3></div>
              <div className="flex flex-wrap gap-2">{cat.skills.map((s) => <span key={s} className="px-3 py-1 rounded-full bg-slate-700 text-sm text-slate-300">{s}</span>)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
