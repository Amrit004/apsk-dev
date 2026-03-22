"use client";

import { Building2, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Bank of America",
    role: "Deployment / Breakfix Engineer",
    period: "April 2022 - Present",
    location: "London, UK",
    description: [
      "Supported 100+ end users across enterprise desktop systems in a regulated financial environment",
      "Diagnosed and resolved hardware and software issues to minimize downtime",
      "Led large-scale deployment initiatives, completing 500+ deployments across the organization",
      "Implemented security patches in compliance with financial industry regulations",
    ],
  },
  {
    company: "Amadeus",
    role: "Field Support Technician (Level 2)",
    period: "Cover Shifts",
    location: "London, UK",
    description: [
      "Delivered laptop and mobile device replacements with enterprise applications for travel tech operations",
      "Provided escalation support for complex technical issues",
      "Maintained detailed documentation of system configurations",
    ],
  },
  {
    company: "ENI",
    role: "IT Technician / Support",
    period: "Cover Shifts",
    location: "London, UK",
    description: [
      "Assisted in Windows 11 migration, ensuring full working stability across energy infrastructure systems",
      "Provided frontline support for hardware, software, and network issues",
      "Monitored enterprise system uptime, maintaining 99.9% stability",
      "Documented troubleshooting procedures and technical configurations",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl font-bold text-white mb-2">
          Work Experience
        </h2>
        <p className="text-sm text-slate-500 mb-8">
          Employed by Manpower (Zoom IT) – April 2022 to Present
        </p>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div key={exp.company} className="card">
              <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Building2 className="w-5 h-5 text-blue-400" />
                    <h3 className="text-lg font-bold text-white">{exp.company}</h3>
                  </div>
                  <p className="text-slate-300">{exp.role}</p>
                </div>
                <div className="text-right text-sm text-slate-500">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {exp.period}
                  </div>
                  <div className="flex items-center gap-1 mt-1">
                    <MapPin className="w-4 h-4" />
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
