import { Video, FolderOpen, Briefcase, Headphones } from "lucide-react";

const FEATURES = [
  {
    icon: Video,
    title: "Live Training",
    desc: "Interactive sessions with industry experts, real-time doubt clearing",
  },
  {
    icon: FolderOpen,
    title: "Project-Based Learning",
    desc: "Build real automotive trim parts from scratch to production-level",
  },
  {
    icon: Briefcase,
    title: "Interview Prep",
    desc: "Portfolio guidance, mock interviews, common question preparation",
  },
  {
    icon: Headphones,
    title: "Lifetime Support",
    desc: "Mentoring, resource access, career guidance even after completion",
  },
];

export default function WhatYouGet() {
  return (
    <section className="py-20 px-6 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-4 block">
            What Makes Us Different
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight font-semibold">
            What You Get
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group hover:bg-slate-50 dark:hover:bg-slate-800 p-8 rounded-2xl transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700"
            >
              <div className="w-14 h-14 bg-sky-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <f.icon className="w-7 h-7 text-sky-500" />
              </div>

              <h3 className="font-display text-xl font-semibold mb-3">
                {f.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
