"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const education = [
  {
    degree: "MSc Advanced Computer Science",
    school: "Queen Mary University of London",
    period: "2024 – Present",
    status: "In Progress",
    location: "London, UK",
    grade: "Expected: Merit",
    modules: [
      "Advanced Algorithms",
      "Software Engineering",
      "Distributed Systems",
      "Artificial Intelligence",
    ],
  },
  {
    degree: "BSc (Hons) Computer Science",
    school: "Staffordshire University",
    period: "2021 – 2024",
    status: "Completed",
    location: "UK",
    grade: "2:1 Honours",
    modules: [
      "Software Engineering",
      "Cloud Computing",
      "AI & ML",
      "Cybersecurity",
      "Full-Stack Development",
    ],
  },
];

const certifications = [
  "National Diploma in ICT",
  "Certificate in Business",
];

export default function Education() {
  return (
    <section id="education" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold mb-3 gradient-text">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Academic background in computer science with focus on software engineering and AI.
          </p>
        </motion.div>

        <div className="space-y-4">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-5 hover:border-cyan-500/30 transition-colors"
            >
              <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white">{edu.degree}</h3>
                  </div>
                  <p className="text-cyan-400 font-medium text-sm">{edu.school}</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center gap-1 text-slate-400 text-xs">
                    <Calendar className="w-3 h-3" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-1 text-slate-400 text-xs mt-1">
                    <MapPin className="w-3 h-3" />
                    {edu.location}
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-3">
                <span className="px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs">
                  {edu.status}
                </span>
                <span className="px-2 py-1 rounded-full bg-purple-500/20 text-purple-400 text-xs">
                  {edu.grade}
                </span>
              </div>

              <div>
                <p className="text-xs text-slate-500 mb-2">Relevant Modules:</p>
                <div className="flex flex-wrap gap-1.5">
                  {edu.modules.map((module) => (
                    <span
                      key={module}
                      className="px-2 py-0.5 rounded bg-slate-800 text-slate-300 text-xs"
                    >
                      {module}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-6 glass-card rounded-xl p-4"
        >
          <div className="flex items-center gap-2 mb-3">
            <Award className="w-4 h-4 text-purple-400" />
            <h3 className="text-sm font-semibold text-white">Certifications</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="px-3 py-1 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 text-xs"
              >
                {cert}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
