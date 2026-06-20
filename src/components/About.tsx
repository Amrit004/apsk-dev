"use client";

import { MapPin, Target } from "lucide-react";
import { HIGHLIGHTS, KEY_STRENGTHS } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="py-16 bg-slate-950" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="about-heading" className="text-2xl font-bold text-white mb-8">About</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {HIGHLIGHTS.map((item) => (
            <div key={item.title} className="card">
              <item.icon className="w-6 h-6 text-blue-400 mb-3" />
              <h3 className="font-semibold text-white mb-1">{item.title}</h3>
              <p className="text-sm text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>
        <div className="card mb-6">
          <div className="flex items-center gap-2 mb-4"><MapPin className="w-5 h-5 text-blue-400" /><span className="text-slate-300">London, UK</span></div>
          <p className="text-slate-300 leading-relaxed mb-4">I am an MSc Advanced Computer Science student at Queen Mary University of London, graduating in 2026. My BSc in Computer Science from Staffordshire University gave me a strong foundation in software development, and my current studies are deepening my knowledge in cloud architecture, machine learning, and security.</p>
          <p className="text-slate-300 leading-relaxed mb-4">I currently work as an Onsite Software Support Specialist at Brock Solutions, based at Heathrow Airport, where I support SmartSuite — a real-time baggage operations platform used by major airlines. I troubleshoot software incidents across a multi-terminal network of workstations, scanners, and peripherals, working directly with customers in a fast-paced airport environment. Through my previous work at Bank of America, Amadeus, and ENI, I have extensive experience in enterprise IT environments. I speak five languages, which helps in diverse team settings. I build projects in my spare time to apply what I learn and explore new technologies.</p>
          <div className="flex items-center gap-2 mb-4"><Target className="w-5 h-5 text-blue-400" /><span className="text-slate-300">Looking for: Software Engineering, Cloud/DevOps, Backend Development, Cybersecurity</span></div>
          <div className="border-t border-slate-700 pt-4">
            <h3 className="font-semibold text-white mb-3">Key Strengths</h3>
            <ul className="space-y-2">{KEY_STRENGTHS.map((s, i) => <li key={i} className="flex items-start gap-3 text-slate-300"><span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />{s}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}
