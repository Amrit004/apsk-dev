"use client";

import { motion } from "framer-motion";
import { Code, Database, Bot, Wrench, Cloud } from "lucide-react";

const skillCategories = [
  {
    icon: Code,
    title: "Frontend",
    skills: ["React.js", "JavaScript (ES6+)", "HTML5", "CSS3", "Responsive Design"],
  },
  {
    icon: Database,
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Authentication", "API Integration"],
  },
  {
    icon: Database,
    title: "Databases",
    skills: ["MongoDB", "MySQL", "Data Modelling", "PostgreSQL"],
  },
  {
    icon: Bot,
    title: "AI & Integration",
    skills: ["OpenAI API", "Sentiment Analysis", "Prompt Engineering"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3)", "Docker", "Vercel", "Git & GitHub"],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: ["VS Code", "Postman", "JIRA", "Figma"],
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
            Recruiters scan this first. Here's what I bring to the table.
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

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-md bg-slate-800 text-cyan-400 text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
