"use client";

import { Mail, Linkedin, Github, MapPin, Send } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = Object.fromEntries(new FormData(e.currentTarget));
    window.open(`mailto:ap.singhkaur@gmail.com?subject=${encodeURIComponent(`Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`, "_blank");
  };

  return (
    <section id="contact" className="py-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-2">Contact</h2>
        <p className="text-slate-400 mb-8">Looking for a graduate software engineer? Let me know if you are interested.</p>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="card mb-6">
              <h3 className="font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a href="mailto:ap.singhkaur@gmail.com" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors"><Mail className="w-5 h-5 text-blue-400" /><span className="text-slate-300">ap.singhkaur@gmail.com</span></a>
                <a href="https://linkedin.com/in/amritpal-singh-kaur-b54b9a1b1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors"><Linkedin className="w-5 h-5 text-blue-400" /><span className="text-slate-300">amritpal-singh-kaur</span></a>
                <a href="https://github.com/Amrit004" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors"><Github className="w-5 h-5 text-blue-400" /><span className="text-slate-300">Amrit004</span></a>
                <div className="flex items-center gap-3 p-3"><MapPin className="w-5 h-5 text-blue-400" /><span className="text-slate-300">London, UK</span></div>
              </div>
            </div>
            <div className="card">
              <h3 className="font-semibold text-white mb-2">Availability</h3>
              <p className="text-slate-400 text-sm">Available for graduate software engineering roles from Summer 2026. Open to opportunities in cloud, DevOps, data, and cybersecurity.</p>
            </div>
          </div>
          <div className="card">
            <h3 className="font-semibold text-white mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><label htmlFor="name" className="block text-sm text-slate-400 mb-1">Name</label><input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:border-blue-500 focus:outline-none transition-colors placeholder-slate-500" placeholder="Your name" /></div>
              <div><label htmlFor="email" className="block text-sm text-slate-400 mb-1">Email</label><input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:border-blue-500 focus:outline-none transition-colors placeholder-slate-500" placeholder="your@email.com" /></div>
              <div><label htmlFor="message" className="block text-sm text-slate-400 mb-1">Message</label><textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none placeholder-slate-500" placeholder="Your message..." /></div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">Send Message <Send className="w-4 h-4" /></button>
            </form>
          </div>
        </div>
        <footer className="mt-16 pt-8 border-t border-slate-800 text-center"><p className="text-slate-500 text-sm">Amritpal Singh Kaur — London, UK</p></footer>
      </div>
    </section>
  );
}
