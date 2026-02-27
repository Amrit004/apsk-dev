"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-slate-950 to-slate-950" />
      
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              Open to Work — Summer 2026
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-4">
              Hi, I'm <span className="gradient-text">Amritpal</span>
            </h1>
            <p className="text-xl lg:text-2xl text-slate-400 mb-6">
              Graduate Software Engineer
            </p>
            <p className="text-lg text-slate-500 mb-8 max-w-lg">
              Multilingual developer (EN · ES · CA · PA · HI) with enterprise experience at 
              <span className="text-cyan-400"> Bank of America</span>, 
              <span className="text-purple-400"> Amadeus</span> & 
              <span className="text-green-400"> ENI</span>. 
              MSc Advanced CS at QMUL (2026).
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-semibold transition-all hover:shadow-lg hover:shadow-cyan-500/25"
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://drive.google.com/uc?export=download&id=1VfCC2Y9I_zv0suHdfMdsyy_dlBhBvNOC"
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold transition-all"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <div className="flex gap-3">
                <a
                  href="https://github.com/Amrit004"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="mailto:sharysingh1144@gmail.com"
                  className="p-3 rounded-full bg-slate-800 hover:bg-slate-700 transition-colors"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-72 h-72 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 opacity-20 animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-slate-900 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl lg:text-8xl font-bold gradient-text mb-2">18</div>
                  <div className="text-slate-400 text-sm">GitHub Repos</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 animate-float">
                <div className="text-2xl font-bold text-cyan-400">MSc</div>
                <div className="text-xs text-slate-400">QMUL 2026</div>
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 animate-float" style={{ animationDelay: "1s" }}>
                <div className="text-2xl font-bold text-purple-400">5</div>
                <div className="text-xs text-slate-400">Languages</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-16 gap-8 text-center"
        >
          <div>
            <div className="text-3xl font-bold text-cyan-400">3</div>
            <div className="text-slate-500 text-sm">Enterprise Companies</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-purple-400">2</div>
            <div className="text-slate-500 text-sm">CS Degrees</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-green-400">5</div>
            <div className="text-slate-500 text-sm">Languages Spoken</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
