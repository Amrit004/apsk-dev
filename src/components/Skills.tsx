"use client";

import { Code, Database, Cloud, Shield, Palette, Terminal } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Programming",
    skills: ["JavaScript", "TypeScript", "Python", "Java", "C#", "HTML", "CSS"],
  },
  {
    icon: Terminal,
    title: "Frameworks",
    skills: ["React", "Next.js", "Node.js", "Express.js", "REST APIs"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "SQLite"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3, Lambda)", "Docker", "Linux", "CI/CD", "Vercel"],
  },
  {
    icon: Shield,
    title: "Security",
    skills: ["Network Security", "IAM", "JWT", "OAuth", "Cryptography"],
  },
  {
    icon: Palette,
    title: "Tools & Methods",
    skills: ["Git", "GitHub", "Agile/Scrum", "JIRA", "Figma", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-8">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category) => (
            <div key={category.title} className="card">
              <div className="flex items-center gap-3 mb-4">
                <category.icon className="w-5 h-5 text-blue-400" />
                <h3 className="font-semibold text-white">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-slate-700 text-sm text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
