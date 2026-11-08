import { Briefcase, Building2, Calendar, MapPin, Users } from "lucide-react";
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
              {exp.roles && (
                <div className="mt-6 space-y-5 border-t border-slate-800 pt-5">
                  {exp.roles.map((r) => (
                    <div key={r.client}>
                      <div className="flex flex-wrap items-center gap-2 mb-2"><Briefcase className="w-4 h-4 text-blue-400" /><h4 className="font-semibold text-white">{r.client}</h4><span className="text-sm text-slate-400">&middot; {r.role}</span></div>
                      <ul className="space-y-2 pl-6">{r.bullets.map((b, i) => <li key={i} className="flex items-start gap-3 text-slate-300"><span className="w-1 h-1 rounded-full bg-slate-500 mt-2 flex-shrink-0" />{b}</li>)}</ul>
                    </div>
                  ))}
                </div>
              )}
              {exp.customerSuccess && (
                <div className="mt-6 rounded-lg border border-slate-700 bg-slate-900/50 p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Users className="w-4 h-4 text-blue-400" />
                    <h4 className="font-semibold text-white">{exp.customerSuccess.title}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.customerSuccess.summary.map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-full bg-slate-800 text-xs text-slate-300">{s}</span>
                    ))}
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    {exp.customerSuccess.roles.map((r) => (
                      <div key={r.title}>
                        <h5 className="font-medium text-slate-200 mb-2">{r.title}</h5>
                        <ul className="space-y-2">
                          {r.bullets.map((b, i) => (
                            <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
