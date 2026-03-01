"use client";

import { motion } from "framer-motion";
import { Code, Database, Bot, Wrench, Cloud, Shield } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: [
      { name: "React.js", level: "Advanced" },
      { name: "JavaScript (ES6+)", level: "Advanced" },
      { name: "HTML5/CSS3", level: "Advanced" },
      { name: "Responsive Design", level: "Advanced" },
    ],
  },
  {
    icon: Database,
    title: "Backend",
    skills: [
      { name: "Node.js", level: "Intermediate" },
      { name: "Express.js", level: "Intermediate" },
      { name: "REST APIs", level: "Advanced" },
      { name: "API Integration", level: "Advanced" },
    ],
  },
  {
    icon: Database,
    title: "Databases",
    skills: [
      { name: "MongoDB", level: "Intermediate" },
      { name: "MySQL", level: "Intermediate" },
      { name: "PostgreSQL", level: "Basic" },
    ],
  },
  {
    icon: Bot,
    title: "AI & ML",
    skills: [
      { name: "OpenAI API", level: "Intermediate" },
      { name: "Prompt Engineering", level: "Intermediate" },
      { name: "Python", level: "Intermediate" },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (EC2, S3)", level: "Basic" },
      { name: "Docker", level: "Basic" },
      { name: "Vercel", level: "Advanced" },
      { name: "Git & GitHub", level: "Advanced" },
    ],
  },
  {
    icon: Shield,
    title: "Security",
    skills: [
      { name: "Security Best Practices", level: "Intermediate" },
      { name: "OAuth/JWT", level: "Advanced" },
      { name: "HTTPS/SSL", level: "Advanced" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-3 gradient-text">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Technologies I work with. Proficiency levels shown for reference.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-5 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <category.icon className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              <div className="space-y-2">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-slate-300 text-sm">{skill.name}</span>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      skill.level === 'Advanced' ? 'bg-green-500/20 text-green-400' :
                      skill.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-slate-500/20 text-slate-400'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
