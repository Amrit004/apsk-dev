"use client";

import { GraduationCap, Globe, Briefcase, Code2 } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Enterprise Experience",
    description: "Bank of America, Amadeus & ENI",
  },
  {
    icon: Globe,
    title: "Languages",
    description: "English, Spanish, Catalan, Punjabi, Hindi",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "MSc QMUL, BSc Staffordshire (2:1)",
  },
  {
    icon: Code2,
    title: "Repositories",
    description: "23 public projects on GitHub",
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
          About
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {highlights.map((item) => (
            <div key={item.title} className="card">
              <item.icon className="w-6 h-6 text-blue-600 mb-3" />
              <h3 className="font-semibold text-slate-900 dark:text-white mb-1">{item.title}</h3>
              <p className="text-sm text-slate-600 dark:text-slate-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="card max-w-3xl">
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
            I am an MSc Advanced Computer Science student at Queen Mary University of London, graduating in 2026. My BSc in Computer Science from Staffordshire University gave me a strong foundation in software development, and my current studies are deepening my knowledge in cloud architecture, machine learning, and security.
          </p>
          <p className="text-slate-700 dark:text-slate-300 leading-relaxed">
            Through my work at Bank of America, Amadeus, and ENI, I have experience in enterprise IT environments. I speak five languages, which helps in diverse team settings. I build projects in my spare time to apply what I learn and explore new technologies.
          </p>
        </div>
      </div>
    </section>
  );
}
