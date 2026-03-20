"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, Globe, Briefcase, Sparkles, Target } from "lucide-react";

const highlights = [
  {
    icon: Briefcase,
    title: "Enterprise Experience",
    description: "Worked inside Bank of America, Amadeus & ENI — not just side projects",
  },
  {
    icon: Globe,
    title: "5 Languages Natively",
    description: "EN · ES · CA · PA · HI — rare asset for global or client-facing roles",
  },
  {
    icon: GraduationCap,
    title: "Two CS Degrees",
    description: "BSc 2:1 Staffordshire · MSc Advanced CS at QMUL (2026)",
  },
  {
    icon: Award,
    title: "23 Public Repos",
    description: "Cloud security, cryptography, AI PWAs, full-stack — all on GitHub",
  },
];

export default function About() {
  return (
    <section id="about" className="py-2 relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-2"
        >
          <h2 className="text-3xl font-bold mb-4 gradient-text">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            I build software that makes a difference. With experience in regulated environments and a passion for security, I deliver solutions that work at enterprise scale.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card rounded-xl p-4 hover:border-cyan-500/30 transition-colors group"
            >
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-3 group-hover:bg-cyan-500/20 transition-colors">
                <item.icon className="w-5 h-5 text-cyan-400" />
              </div>
              <h3 className="text-base font-semibold mb-1 text-white">{item.title}</h3>
              <p className="text-slate-400 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-5"
        >
          <p className="text-slate-300 leading-relaxed mb-4">
            MSc Advanced Computer Science candidate (Queen Mary University of London, 2026) with 3+ years of enterprise IT experience in regulated environments including Bank of America and Amadeus. Proficient in Python, JavaScript, TypeScript, AWS, Docker, and CI/CD pipelines
          </p>
          <p className="text-slate-300 leading-relaxed">
            Strong background in security-hardened deployments, AI-integrated full-stack development, and formal software verification. Seeking 2026 graduate roles in Software Engineering, Cloud/DevOps, or Cybersecurity.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
