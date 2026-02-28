"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink } from "lucide-react";

const roles = [
  "Full-Stack Developer",
  "Software Engineer",
  "Cloud Developer",
  "AI Enthusiast"
];

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCharIndex((prev) => {
        if (prev >= roles[currentRole].length) {
          setCurrentRole((r) => (r + 1) % roles.length);
          return 0;
        }
        return prev + 1;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [currentRole]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-12">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/50 rounded-full"
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: Math.random() * 100 + '%',
              opacity: Math.random() 
            }}
            animate={{ 
              y: [null, Math.random() * 100 + '%'],
              opacity: [null, 0]
            }}
            transition={{ 
              duration: 2 + Math.random() * 3, 
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-cyan-400 font-medium mb-3">Based in London, United Kingdom</p>

            <h1 className="text-4xl lg:text-5xl font-bold mb-3 text-white">
              Full-Stack Software Developer
            </h1>
            <p className="text-xl text-blue-400 mb-4">MSc Computer Science – Queen Mary University of London</p>
            
            <p className="text-lg text-slate-400 mb-6 max-w-lg">
              I design and build scalable web applications, REST APIs, and AI-powered systems using modern JavaScript technologies.
            </p>
            
            <p className="text-slate-400 mb-8 max-w-lg">
              I am a Computer Science postgraduate specialising in full-stack development and AI-integrated applications. I have built and deployed real-world systems including sentiment analysis platforms and production-ready web applications. I am currently seeking graduate and junior software engineering opportunities.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="/cv.pdf"
                download="Amritpal-Singh-Kaur-CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold transition-all"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 hover:border-cyan-500 text-slate-300 hover:text-cyan-400 font-semibold transition-all"
              >
                Contact Me
              </a>
            </div>

            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/Amrit004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:sharysingh1144@gmail.com"
                className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-6 text-center gradient-border">
              <div className="text-6xl lg:text-7xl font-bold gradient-text mb-2">23</div>
              <div className="text-slate-400 text-lg mb-6">GitHub Repositories</div>
              
              <div className="grid grid-cols-2 gap-4 text-left">
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-cyan-400">JavaScript</div>
                  <div className="text-slate-400 text-sm">40%</div>
                  <div className="h-1 bg-slate-700 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-cyan-500 to-cyan-400 rounded-full" style={{ width: '40%' }} />
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-purple-400">TypeScript</div>
                  <div className="text-slate-400 text-sm">25%</div>
                  <div className="h-1 bg-slate-700 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full" style={{ width: '25%' }} />
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-green-400">Python</div>
                  <div className="text-slate-400 text-sm">20%</div>
                  <div className="h-1 bg-slate-700 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full" style={{ width: '20%' }} />
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-xl p-4">
                  <div className="text-2xl font-bold text-yellow-400">Java</div>
                  <div className="text-slate-400 text-sm">15%</div>
                  <div className="h-1 bg-slate-700 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-yellow-500 to-yellow-400 rounded-full" style={{ width: '15%' }} />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="flex justify-center mt-12 gap-8 text-center"
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
