"use client";

import { Building2, Calendar, MapPin } from "lucide-react";
import { EXPERIENCE } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-8">Work Experience</h2>
        <div className="space-y-6">
          {EXPERIENCE.map((exp) => (
            <div key={exp.company} className="card">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div><div className="flex items-center gap-2 mb-1"><Building2 className="w-5 h-5 text-blue-400" /><h3 className="text-lg font-bold text-white">{exp.company}</h3></div><p className="text-slate-300">{exp.role}</p>{exp.subtext && <p className="text-sm text-slate-500 mt-1">{exp.subtext}</p>}</div>
                <div className="text-right text-sm text-slate-500">
                  <div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{exp.period}</div>
                  <div className="flex items-center gap-1 mt-1"><MapPin className="w-4 h-4" />{exp.location}</div>
                </div>
              </div>
              <ul className="space-y-2">{exp.bullets.map((b, i) => <li key={i} className="flex items-start gap-3 text-slate-300"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />{b}</li>)}</ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
