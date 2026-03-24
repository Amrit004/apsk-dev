"use client";

import { GraduationCap, Calendar, Award } from "lucide-react";
import { EDUCATION } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="py-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-8">Education</h2>
        <div className="space-y-6">
          {EDUCATION.map((edu) => (
            <div key={edu.school} className="card">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <GraduationCap className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                  <div><h3 className="text-lg font-bold text-white">{edu.school}</h3><p className="text-slate-300">{edu.degree}</p></div>
                </div>
                <div className="text-right text-sm text-slate-500"><div className="flex items-center gap-1"><Calendar className="w-4 h-4" />{edu.period}</div></div>
              </div>
              <div className="flex items-center gap-2 mb-3"><Award className="w-4 h-4 text-blue-400" /><span className="text-blue-400 font-medium">{edu.grade}</span></div>
              <div><span className="text-sm text-slate-500">Key Modules: </span><span className="text-sm text-slate-400">{edu.modules}</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
