"use client";

import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-2">
              Open to Work
            </p>

            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-2">
              Amritpal Singh Kaur
            </h1>

            <p className="text-xl text-slate-700 dark:text-slate-300 mb-2">
              Graduate Software Engineer
            </p>

            <p className="text-slate-600 dark:text-slate-400 mb-6">
              MSc Advanced Computer Science – Queen Mary University of London (2026)
            </p>

            <div className="flex flex-wrap gap-3 mb-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
              >
                Contact Me
              </a>
              <a
                href="/cv.pdf"
                download="Amritpal-Singh-Kaur-CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-slate-400 font-medium transition-colors"
              >
                <Download className="w-4 h-4" />
                Download CV
              </a>
            </div>

            <div className="flex gap-6">
              <a
                href="https://github.com/Amrit004"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </a>
              <a
                href="mailto:ap.singhkaur@gmail.com"
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email
              </a>
            </div>
          </div>

          <div className="card">
            <div className="mb-6">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-1">23</div>
              <div className="text-slate-600 dark:text-slate-400">GitHub Repositories</div>
            </div>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <span className="font-medium text-slate-900 dark:text-white">JavaScript</span>
                <span className="text-sm text-slate-500">40%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <span className="font-medium text-slate-900 dark:text-white">TypeScript</span>
                <span className="text-sm text-slate-500">25%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <span className="font-medium text-slate-900 dark:text-white">Python</span>
                <span className="text-sm text-slate-500">20%</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                <span className="font-medium text-slate-900 dark:text-white">Java</span>
                <span className="text-sm text-slate-500">15%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-16 mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">3</div>
            <div className="text-sm text-slate-500">Enterprise Companies</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">2</div>
            <div className="text-sm text-slate-500">CS Degrees</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-slate-900 dark:text-white">5</div>
            <div className="text-sm text-slate-500">Languages</div>
          </div>
        </div>
      </div>
    </section>
  );
}
