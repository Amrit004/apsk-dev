"use client";

import { Users, Globe } from "lucide-react";
import { CUSTOMER_SUCCESS } from "@/lib/data";

const ICONS = [Users, Globe];

export default function CustomerSuccess() {
  return (
    <section id="customer-success" className="py-16 bg-slate-950" aria-labelledby="customer-success-heading">
      <div className="max-w-6xl mx-auto px-6">
        <h2 id="customer-success-heading" className="text-2xl font-bold text-white mb-3">{CUSTOMER_SUCCESS.title}</h2>
        <div className="flex flex-wrap gap-2 mb-8">
          {CUSTOMER_SUCCESS.summary.map((item) => (
            <span key={item} className="px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-sm text-slate-300">{item}</span>
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {CUSTOMER_SUCCESS.roles.map((role, i) => {
            const Icon = ICONS[i] ?? Users;
            return (
              <div key={role.title} className="card">
                <div className="flex items-center gap-2 mb-4">
                  <Icon className="w-5 h-5 text-blue-400" />
                  <h3 className="font-semibold text-white">{role.title}</h3>
                </div>
                <ul className="space-y-2">
                  {role.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-3 text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
