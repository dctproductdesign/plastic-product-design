import React from "react";
import {
  ShieldCheck,
  Globe,
  BadgeCheck,
  Linkedin,
  Youtube,
  Instagram,
  Users,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

const LINKS = {
  tutorLinkedIn: "https://www.linkedin.com/in/balkrishnadhuri/",
  linkedInPage:
    "https://www.linkedin.com/posts/mechanical-engineering-design-hub_be-job-ready-in-2025-learn-automotive-plastic-activity-7277601250018275328-IsvF?utm_source=share&utm_medium=member_android",
  youtube: "https://www.youtube.com/@digitalcadtraining5576",
  instagram:
    "https://www.instagram.com/digital_cad_training?igsh=MWE2aGVzMnVsbG9sdw==",
  // Optional: add WhatsApp link if you have it
  // whatsapp: "https://chat.whatsapp.com/XXXXX"
};

function SocialButton({ href, icon, title, subtitle }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className={[
        "group rounded-2xl border border-white/12 bg-white/5 backdrop-blur-md",
        "px-4 py-3 flex items-center gap-3",
        "hover:bg-white/8 hover:border-white/18 transition-all duration-300",
        "focus:outline-none focus:ring-2 focus:ring-white/25",
      ].join(" ")}
    >
      <div className="w-10 h-10 rounded-xl bg-white/7 border border-white/10 flex items-center justify-center">
        {icon}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <div className="font-semibold text-white truncate">{title}</div>
          <ExternalLink className="w-4 h-4 text-white/55 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="text-xs text-white/70 leading-snug">{subtitle}</div>
      </div>
      <ArrowRight className="w-4 h-4 text-white/55 transition-transform group-hover:translate-x-0.5" />
    </a>
  );
}

function StatTile({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md px-4 py-4">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-white/7 border border-white/10 flex items-center justify-center">
          {icon}
        </div>
        <div className="min-w-0">
          <div className="text-[11px] uppercase tracking-widest text-white/60">
            {label}
          </div>
          <div className="text-lg sm:text-xl font-bold text-white tabular-nums">
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function TrustCommunitySection() {
  return (
    <section
      id="trust"
      className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6"
    >
      {/* Premium eye-catching background (teal + violet + amber accents) */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#071022] via-[#0B1734] to-[#0A0D1C]" />
      <div className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-teal-400/18 blur-3xl" />
      <div className="absolute -bottom-28 -right-24 w-96 h-96 rounded-full bg-violet-500/18 blur-3xl" />
      <div className="absolute top-24 right-[20%] w-64 h-64 rounded-full bg-amber-400/10 blur-3xl" />

      {/* subtle grid */}
      <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="trustGrid"
              width="56"
              height="56"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 56 0 L 0 0 0 56"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#trustGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto text-white">
        {/* Animate ONLY this top block */}
        <div className="animate-[fadeInUp_.75s_ease-out_both]">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs sm:text-sm font-semibold">
              <ShieldCheck className="w-4 h-4 text-teal-200" />
              Trusted by a global mechanical community
            </div>

            <h2 className="mt-5 font-display text-3xl sm:text-5xl font-bold tracking-tight">
              Trust you can verify.
            </h2>

            <p className="mt-3 text-white/85 max-w-3xl mx-auto text-sm sm:text-lg leading-relaxed">
              We help mechanical engineers worldwide with{" "}
              <span className="font-semibold text-white">
                free job guidance
              </span>
              , <span className="font-semibold text-white">CAD learning</span>,
              and{" "}
              <span className="font-semibold text-white">
                interview preparation
              </span>
              . Our community believes in us — and we protect that trust every
              day.
            </p>
          </div>

          {/* Single main trust card (no second explanation card) */}
          <div className="mt-10 rounded-3xl border border-white/12 bg-white/6 backdrop-blur-md shadow-2xl overflow-hidden">
            {/* Accent header strip */}
            <div className="px-6 sm:px-8 py-5 border-b border-white/10 bg-gradient-to-r from-teal-400/12 via-violet-400/10 to-amber-400/10">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-2xl bg-white/7 border border-white/10 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-teal-200" />
                  </div>
                  <div>
                    <div className="font-display text-xl sm:text-2xl font-bold">
                      Global help. Real intent.
                    </div>
                    <div className="text-sm text-white/70">
                      Free content + community support across platforms.
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.linkedin.com/in/balkrishnadhuri/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-transform duration-300 hover:scale-[1.02]"
                >
                  Founder/Tutor: Mr. Balkrushna Dhuri (70K+) <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Body */}
            <div className="px-6 sm:px-8 py-6 sm:py-8">
              {/* Credibility pills */}
              <div className="flex flex-wrap gap-2.5">
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold bg-white/7 border border-white/10">
                  <BadgeCheck className="w-4 h-4 text-teal-200" />
                  Free job guidance
                </span>
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold bg-white/7 border border-white/10">
                  <BadgeCheck className="w-4 h-4 text-violet-200" />
                  CAD + interview videos
                </span>
                <span className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold bg-white/7 border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-amber-200" />
                  Trust is non-negotiable
                </span>
              </div>

              {/* Linked buttons INSIDE same card */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
                <SocialButton
                  href="https://www.linkedin.com/posts/mechanical-engineering-design-hub_be-job-ready-in-2025-learn-automotive-plastic-activity-7277601250018275328-IsvF?utm_source=share&utm_medium=member_android"
                  icon={<Linkedin className="w-5 h-5 text-sky-200" />}
                  title="LinkedIn Page"
                  subtitle="3.7 Lakh+ followers • Daily updates & guidance"
                />
                <SocialButton
                  href="https://www.youtube.com/@digitalcadtraining5576"
                  icon={<Youtube className="w-5 h-5 text-rose-200" />}
                  title="YouTube"
                  subtitle="10K subscribers • Free CAD & interview help"
                />
                <SocialButton
                  href="https://www.instagram.com/digital_cad_training?igsh=MWE2aGVzMnVsbG9sdw=="
                  icon={<Instagram className="w-5 h-5 text-pink-200" />}
                  title="Instagram"
                  subtitle="2K followers • Fast tips & short lessons"
                />
                {/* If you have WhatsApp link, replace the href */}
                <SocialButton
                  href="https://chat.whatsapp.com/LCo29pJjwY3EwKHL8AgGYE"
                  icon={<Users className="w-5 h-5 text-emerald-200" />}
                  title="WhatsApp Community"
                  subtitle="50K+ learners • Add group link for Join button"
                />
              </div>

              {/* Stats row (compact + clean) */}

              <p className="mt-4 text-center text-xs sm:text-sm text-white/55">
                Numbers represent our community strength across platforms.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation only for first block */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
