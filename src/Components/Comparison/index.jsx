import React from "react";
import {
  BookOpen,
  Zap,
  Clock,
  Users,
  Layers,
  CheckCircle,
} from "lucide-react";

const basicFeatures = [
  "12+ real-time automotive trim projects based on OEM validation standards.",
  "Covers CATIA & UG NX — the tools used by the majority of automotive product design companies.",
  "Curriculum designed to match 3+ years of industry-relevant experience.",
  "Practice Assignments/CAD test after every session",
];

const advancedFeatures = [
  "Master section strategy",
  "Advanced B-side robustness",
  "DMU validation + clearance checks",
  "6 production-level projects",
  "Portfolio building + interview prep",
];

const comparisonRows = [
  { feature: "Duration", basic: "8-10 weeks", advanced: "12-14 weeks" },
  { feature: "Projects", basic: "5 projects", advanced: "6 production-level" },
  { feature: "DMU Validation", basic: "Basic awareness", advanced: "Full methodology" },
  { feature: "Portfolio Building", basic: "Overview", advanced: "Complete guidance" },
  { feature: "Job Assistance", basic: "✓", advanced: "✓ Enhanced" },
];

export default function CoursesComparisonSection() {
  return (
    <section id="courses" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-4 block">
            Choose Your Path
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight font-semibold mb-6">
            Basic vs Advanced
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Two comprehensive tracks designed to take you from fundamentals to production-level expertise
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Basic */}
          <div className="group bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl p-8 md:p-10 hover:border-sky-500 dark:hover:border-sky-500 transition-all hover:shadow-2xl">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-sky-500/10 text-sky-600 dark:text-sky-400 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                  Beginner Track
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">
                  Basic Course
                </h3>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>

            <p className="text-slate-600 dark:text-slate-400 mb-6 text-lg font-medium">
              Best for: Freshers, beginners, career switchers entering automotive design
            </p>

            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-slate-200 dark:border-slate-800">
              <MetaItem icon={<Clock className="w-4 h-4 text-sky-500" />} text="120 days" />
              <MetaItem icon={<Layers className="w-4 h-4 text-sky-500" />} text="100% live zoom sessions" />
              <MetaItem icon={<Users className="w-4 h-4 text-sky-500" />} text="working proffesionals slot" />
            </div>

            <FeatureList items={basicFeatures} />

            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl font-display font-bold">₹16,999 INR</div>
              <div className="text-sm text-slate-500 dark:text-slate-500">
                <div>Registration: ₹999 INR</div>
                <div>EMI available</div>
              </div>
            </div>

            <a
              href="https://imjo.in/mJS5Es"
              className="block w-full bg-sky-500 hover:bg-sky-600 text-white text-center py-4 rounded-full font-semibold transition-all hover:scale-105"
            >
              Enroll in Basic
            </a>
          </div>

          {/* Advanced */}
          <div className="group bg-gradient-to-br from-sky-500 to-blue-600 text-white rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all relative overflow-hidden">
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              Most Popular
            </div>

            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                  Professional Track
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">
                  Advanced Course
                </h3>
              </div>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>

            <p className="text-white/90 mb-6 text-lg font-medium">
              Best for: Candidates aiming for production-level design readiness
            </p>

            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-white/20">
              <MetaItem icon={<Clock className="w-4 h-4" />} text="12-14 weeks" />
              <MetaItem icon={<Users className="w-4 h-4" />} text="Weekend batches" />
              <MetaItem icon={<Layers className="w-4 h-4" />} text="7 modules" />
            </div>

            <FeatureList items={advancedFeatures} inverted />

            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl font-display font-bold">₹28,000</div>
              <div className="text-sm text-white/80">
                <div>Registration: ₹8,000</div>
                <div>EMI available</div>
              </div>
            </div>

            <a
              href="https://imjo.in/mJS5Es"
              className="block w-full bg-white text-sky-600 hover:bg-slate-100 text-center py-4 rounded-full font-semibold transition-all hover:scale-105"
            >
              Enroll in Advanced
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaItem({ icon, text }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {icon}
      <span>{text}</span>
    </div>
  );
}

function FeatureList({ items, inverted = false }) {
  return (
    <div className="space-y-3 mb-8">
      {items.map((t) => (
        <div key={t} className="flex items-start gap-3">
          <CheckCircle
            className={`w-5 h-5 flex-shrink-0 mt-0.5 ${inverted ? "text-white" : "text-sky-500"}`}
          />
          <span className="text-sm">{t}</span>
        </div>
      ))}
    </div>
  );
}
