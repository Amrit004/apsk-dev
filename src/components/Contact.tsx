"use client";

import { useState } from "react";
import { Mail, Linkedin, Github, MapPin, Send, Copy, Check } from "lucide-react";

const EMAIL = "ap.singhkaur@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [mailtoTried, setMailtoTried] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      // Fallback for browsers/contexts without the Clipboard API.
      const field = document.createElement("textarea");
      field.value = EMAIL;
      document.body.appendChild(field);
      field.select();
      document.execCommand("copy");
      document.body.removeChild(field);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, message } = Object.fromEntries(new FormData(e.currentTarget));
    const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(`Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;

    const link = document.createElement("a");
    link.href = mailto;
    link.rel = "noopener";
    link.click();

    // Some devices have no mail app, so always surface the direct address.
    setMailtoTried(true);
  };

  return (
    <section id="contact" className="py-16 bg-slate-950">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-2">Contact</h2>
        <p className="text-slate-400 mb-8">Currently at Heathrow Airport. Feel free to reach out!</p>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <div className="card mb-6">
              <h3 className="font-semibold text-white mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <a href={`mailto:${EMAIL}`} className="flex-1 flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors"><Mail className="w-5 h-5 text-blue-400" /><span className="text-slate-300">{EMAIL}</span></a>
                  <button type="button" onClick={copyEmail} aria-label="Copy email address" className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors text-xs">
                    {copied ? <><Check className="w-3.5 h-3.5 text-green-400" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
                  </button>
                </div>
                <a href="https://www.linkedin.com/in/amritpal-singh-kaur-b54b9a1b1" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors"><Linkedin className="w-5 h-5 text-blue-400" /><span className="text-slate-300">in/amritpal-singh-kaur-b54b9a1b1</span></a>
                <a href="https://github.com/Amrit004" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-800 transition-colors"><Github className="w-5 h-5 text-blue-400" /><span className="text-slate-300">Amrit004</span></a>
                <div className="flex items-center gap-3 p-3"><MapPin className="w-5 h-5 text-blue-400" /><span className="text-slate-300">London, UK</span></div>
              </div>
            </div>
            <div className="card">
              <h3 className="font-semibold text-white mb-2">Currently</h3>
              <p className="text-slate-400 text-sm">Onsite Software Support Specialist at Brock Solutions, based at Heathrow Airport. MSc Advanced Computer Science graduate (Merit). Open to connecting.</p>
            </div>
          </div>
          <div className="card">
            <h3 className="font-semibold text-white mb-4">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div><label htmlFor="name" className="block text-sm text-slate-400 mb-1">Name</label><input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:border-blue-500 focus:outline-none transition-colors placeholder-slate-500" placeholder="Your name" /></div>
              <div><label htmlFor="email" className="block text-sm text-slate-400 mb-1">Email</label><input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:border-blue-500 focus:outline-none transition-colors placeholder-slate-500" placeholder="your@email.com" /></div>
              <div><label htmlFor="message" className="block text-sm text-slate-400 mb-1">Message</label><textarea id="message" name="message" required rows={5} className="w-full px-4 py-3 rounded-lg border border-slate-600 bg-slate-800 text-white focus:border-blue-500 focus:outline-none transition-colors resize-none placeholder-slate-500" placeholder="Your message..." /></div>
              <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors">Send Message <Send className="w-4 h-4" /></button>
              <p className="text-xs text-slate-500 text-center">
                {mailtoTried ? "Your email app should be open with the message ready. If nothing happened, email me directly:" : "This opens your email app with the message ready to send."}
              </p>
              <div className="flex items-center justify-center gap-2">
                <a href={`mailto:${EMAIL}`} className="text-sm text-blue-400 hover:text-blue-300 underline underline-offset-2">{EMAIL}</a>
                <button type="button" onClick={copyEmail} aria-label="Copy email address" className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-600 text-slate-300 hover:bg-slate-800 transition-colors text-xs">
                  {copied ? <><Check className="w-3.5 h-3.5 text-green-400" /> Copied</> : <><Copy className="w-3.5 h-3.5" /> Copy</>}
                </button>
              </div>
            </form>
          </div>
        </div>
        <footer className="mt-16 pt-8 border-t border-slate-800 text-center"><p className="text-slate-500 text-sm">Amritpal Singh Kaur — London, UK</p></footer>
      </div>
    </section>
  );
}
