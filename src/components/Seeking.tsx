"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code2 } from "lucide-react";

export default function Seeking() {
  return (
    <section className="py-12">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-xl p-6 text-center"
        >
          <h3 className="text-xl font-bold mb-4 text-white">Currently Seeking</h3>
          <p className="text-slate-300 mb-4">
            I am currently seeking graduate or junior software engineering roles where I can contribute to building scalable systems, learn from experienced engineers, and grow within a high-performance development team.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/20 text-cyan-400 text-sm">
              <Briefcase className="w-4 h-4" /> Software Engineering
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/20 text-purple-400 text-sm">
              <Code2 className="w-4 h-4" /> Full-Stack Development
            </span>
            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-500/20 text-green-400 text-sm">
              <GraduationCap className="w-4 h-4" /> Cloud/DevOps
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
