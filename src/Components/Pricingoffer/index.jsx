import React, { useEffect, useMemo, useState } from "react";
import {
  Clock,
  Users,
  Layers,
  CheckCircle,
  Zap,
  BadgePercent,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import { OFFER } from "./offerSchedule";

/**
 * Notes:
 * - Mobile-first spacing + no overlap: uses clamp widths, wrapping, and safe line-heights.
 * - Subtle animations (no extra libs): fade/slide-in + pulse ring + countdown tick.
 * - Distinct color blocks:
 *   - Timer window: dark “midnight” panel.
 *   - Offer ended window: warm “alert” panel.
 */

function pad2(n) {
  return String(n).padStart(2, "0");
}

function formatINR(n) {
  try {
    return new Intl.NumberFormat("en-IN").format(n);
  } catch {
    return String(n);
  }
}

function getOfferWindow() {
  const start = new Date(OFFER.startsAt);
  const end = new Date(start.getTime() + OFFER.durationMinutes * 60 * 1000);
  return { start, end };
}

function getPhase(now, start, end) {
  if (now < start) return "UPCOMING";
  if (now >= start && now < end) return "ACTIVE";
  return "ENDED";
}

function diffParts(ms) {
  const s = Math.max(0, Math.floor(ms / 1000));
  const hh = Math.floor(s / 3600);
  const mm = Math.floor((s % 3600) / 60);
  const ss = s % 60;
  return { hh, mm, ss };
}

function MetaPill({ icon, text, tone = "dark" }) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold tracking-wide border";
  const tones = {
    dark: "bg-white/6 border-white/12 text-white/90",
    light: "bg-slate-50 border-slate-200 text-slate-700",
    accent: "bg-indigo-500/12 border-indigo-400/20 text-indigo-50",
  };
  return (
    <div className={`${base} ${tones[tone]}`}>
      {React.cloneElement(icon, { className: "w-4 h-4" })}
      <span className="whitespace-nowrap">{text}</span>
    </div>
  );
}

function FeatureList({ items, tone = "dark" }) {
  const text = tone === "dark" ? "text-white/90" : "text-slate-700";
  const icon = tone === "dark" ? "text-emerald-300" : "text-emerald-600";
  return (
    <div className="space-y-3">
      {items.map((t) => (
        <div key={t} className="flex items-start gap-3">
          <CheckCircle className={`w-5 h-5 flex-shrink-0 mt-0.5 ${icon}`} />
          <span className={`text-sm leading-relaxed ${text}`}>{t}</span>
        </div>
      ))}
    </div>
  );
}

function TimeBox({ label, value, accent = false }) {
  return (
    <div className="flex flex-col items-center min-w-[72px]">
      <div
        className={[
          "w-[76px] h-[76px] sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center",
          "border shadow-sm",
          "transition-transform duration-300",
          accent
            ? "bg-gradient-to-b from-amber-400/20 to-rose-400/10 border-white/15"
            : "bg-white/8 border-white/12",
        ].join(" ")}
      >
        <span className="text-3xl sm:text-4xl font-display font-bold tabular-nums">
          {value}
        </span>
      </div>
      <span className="text-[11px] mt-2 uppercase tracking-widest opacity-80">
        {label}
      </span>
    </div>
  );
}

function FadeIn({ children, delay = 0 }) {
  return (
    <div
      className="animate-[fadeInUp_.7s_ease-out_both]"
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function PricingOffer() {
  const { start, end } = useMemo(getOfferWindow, []);
  const [now, setNow] = useState(() => new Date());
  const [tick, setTick] = useState(0); // for subtle countdown “tick” animation

  useEffect(() => {
    const id = setInterval(() => {
      setNow(new Date());
      setTick((t) => (t + 1) % 2);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const phase = useMemo(() => getPhase(now, start, end), [now, start, end]);

  const headline = useMemo(() => {
    if (phase === "ACTIVE") return "Limited-Time Offer is LIVE";
    if (phase === "UPCOMING") return "Enrollment is Open";
    return "Enrollment is Open (Offer Ended)";
  }, [phase]);

  const subline = useMemo(() => {
    if (phase === "ACTIVE")
      return "Lock the lowest fee before the timer hits zero.";
    if (phase === "UPCOMING")
      return "Batch starts 2nd February. Reserve your seat early.";
    return "You can still join the same program. Start now—don’t wait another month.";
  }, [phase]);

  const timeLabel = useMemo(() => {
    if (phase === "ACTIVE") return "Offer ends in";
    if (phase === "UPCOMING") return "Offer starts in";
    return "Offer ended";
  }, [phase]);

  const timeMs = useMemo(() => {
    if (phase === "ACTIVE") return end - now;
    if (phase === "UPCOMING") return start - now;
    return 0;
  }, [phase, now, start, end]);

  const { hh, mm, ss } = useMemo(() => diffParts(timeMs), [timeMs]);

  const coreFeatures = [
    "12+ OEM-style automotive trim projects aligned with validation standards.",
    "CATIA + UG NX workflow (industry tools used in product design teams).",
    "Daily practice: assignments + CAD tests after each session.",
    "Live Zoom training with working-professional friendly timing.",
    "Portfolio + interview prep + job assistance support.",
    "Mentorship + guidance until you become job-ready.",
  ];

  const endedMessage = (
    <div className="mt-10 rounded-3xl p-6 sm:p-8 border shadow-lg bg-gradient-to-br from-amber-500/15 via-rose-500/10 to-white/5 border-amber-300/20">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-2xl bg-amber-400/15 border border-amber-300/25 flex items-center justify-center">
          <BadgePercent className="w-6 h-6 text-amber-200" />
        </div>
        <div className="flex-1">
          <h3 className="font-display text-xl sm:text-2xl font-bold">
            Missed the offer window? Don’t miss the career window.
          </h3>
          <p className="mt-2 text-white/90 leading-relaxed text-sm sm:text-base">
            A small discount should not decide your next 30 years. The
            curriculum, projects, and support remain the same—start today and
            move forward.
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3">
            <a
              href="https://imjo.in/mJS5Es"
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-transform duration-300 hover:scale-[1.02]"
            >
              Enroll Now <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold bg-white/8 border border-white/15 hover:bg-white/12 transition-transform duration-300 hover:scale-[1.02]"
            >
              Talk to Us <MessageCircle className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-14 sm:py-20 px-4 sm:px-6 text-white"
    >
      {/* Background: classy dark gradient with soft blobs */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900" />
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-indigo-500/15 blur-3xl" />
      <div className="absolute -bottom-28 -right-24 w-80 h-80 rounded-full bg-sky-500/15 blur-3xl" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.08] pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
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
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/6 px-4 py-2 text-xs sm:text-sm font-semibold">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-60" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-300" />
              </span>
              {headline}
            </div>

            <h2 className="mt-5 font-display text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
              Pricing that makes sense.
            </h2>

            <p className="mt-3 text-white/85 max-w-2xl mx-auto text-sm sm:text-lg leading-relaxed">
              {subline}
            </p>
          </div>
        </FadeIn>

        {/* Timer Panel (distinct color) */}
        <FadeIn delay={120}>
          <div className="mt-8 sm:mt-10 rounded-3xl border border-white/12 bg-gradient-to-br from-slate-900/75 via-indigo-900/35 to-slate-900/70 shadow-xl backdrop-blur-md p-5 sm:p-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white/8 border border-white/12 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-sky-200" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-white/70">
                    {timeLabel}
                  </p>
                  <p className="text-sm text-white/85">
                    {phase === "ACTIVE"
                      ? "Seat availability changes fast during the offer."
                      : phase === "UPCOMING"
                        ? "Enroll early to avoid last-minute rush."
                        : "You can still enroll at the standard fee."}
                  </p>
                </div>
              </div>

              <div
                className={[
                  "flex items-center justify-center gap-3",
                  tick ? "scale-[1.01]" : "scale-100",
                  "transition-transform duration-300",
                ].join(" ")}
              >
                <TimeBox label="Hours" value={pad2(hh)} accent />
                <div className="text-2xl sm:text-3xl font-bold opacity-80">
                  :
                </div>
                <TimeBox label="Minutes" value={pad2(mm)} />
                <div className="text-2xl sm:text-3xl font-bold opacity-80">
                  :
                </div>
                <TimeBox label="Seconds" value={pad2(ss)} />
              </div>
            </div>

            <div className="mt-4 text-xs sm:text-sm text-white/70">
              Offer Window:{" "}
              <span className="font-semibold text-white/85">
                {start.toLocaleString()} → {end.toLocaleString()}
              </span>
            </div>
          </div>
        </FadeIn>

        {/* Cards */}
        <div className="mt-8 sm:mt-10 grid gap-6 lg:gap-8 lg:grid-cols-2">
          {/* Offer Card */}
          <FadeIn delay={180}>
            <div
              className={[
                "relative overflow-hidden rounded-3xl p-6 sm:p-8 border shadow-2xl",
                "transition-transform duration-300 hover:-translate-y-1",
                phase === "ACTIVE"
                  ? "bg-gradient-to-br from-indigo-500/18 via-sky-500/10 to-white/5 border-white/15"
                  : "bg-white/5 border-white/10 opacity-90",
              ].join(" ")}
            >
              {/* Ribbon */}
              <div className="absolute top-4 right-4">
                <span
                  className={[
                    "inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider border",
                    phase === "ACTIVE"
                      ? "bg-emerald-400/12 border-emerald-300/20 text-emerald-50"
                      : "bg-white/6 border-white/12 text-white/70",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "h-2 w-2 rounded-full",
                      phase === "ACTIVE" ? "bg-emerald-300" : "bg-white/40",
                    ].join(" ")}
                  />
                  {phase === "ACTIVE" ? "HOUR DEAL" : "Inactive"}
                </span>
              </div>

              <div className="rounded-3xl p-6 sm:p-8 border border-white/15 bg-gradient-to-br from-rose-500/20 via-amber-400/10 to-white/5 shadow-2xl">
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="inline-block text-xs font-semibold uppercase tracking-widest text-amber-200">
                      LAST-HOUR Deal
                    </span>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                      Offer Activated
                    </h3>
                    <p className="mt-2 text-white/85 text-sm sm:text-base leading-relaxed">
                      Enroll now or risk delaying your career growth.
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center">
                    <BadgePercent className="w-7 h-7 text-amber-200" />
                  </div>
                </div>

                {/* Batch Info */}
                <div className="mt-6 space-y-3 text-sm sm:text-base text-white/90">
                  <div>
                    📅 <span className="font-semibold">Batch Start:</span> 2
                    February 2026
                  </div>

                  <div>
                    ⏰ <span className="font-semibold">Time Slots:</span>
                    <ul className="mt-1 ml-5 list-disc text-white/85">
                      <li>8:30 PM – 9:30 PM India(working professionals)</li>
                      <li>
                        10:00 AM – 11:00 AM India(shift-based professionals and
                        USA/UAE/UK/MAXICO students)
                      </li>
                    </ul>
                    <div className="mt-1 text-xs text-white/70">
                      ✔ You may attend{" "}
                      <span className="font-semibold">both slots</span>
                    </div>
                  </div>
                </div>

                {/* Price Section */}
                <div className="mt-6 rounded-2xl bg-white/10 border border-white/15 p-4">
                  <div className="flex items-center gap-4 flex-wrap">
                    <div className="text-3xl sm:text-4xl font-display font-bold text-white">
                      ₹14,999 INR
                    </div>

                    <div className="text-sm text-white/75">
                      <div className="line-through">
                        Program Fee after LAST-HOUR-DEAL Expires: ₹24,999
                      </div>
                      <div className="text-amber-200 font-semibold">
                        LAST-HOUR-DEAL PRICE
                      </div>
                    </div>
                  </div>
                </div>

                {/* Registration + EMI */}
                <div className="mt-5 text-sm sm:text-base text-white/90 space-y-2">
                  <div>
                    🔐 <span className="font-semibold">Register with ₹999</span>{" "}
                    to confirm admission & lock price
                  </div>

                  <div>
                    💳 <span className="font-semibold">EMI Plan:</span>
                    <ul className="mt-1 ml-5 list-disc text-white/85">
                      <li>₹7,000 inr – 10 Feb</li>
                      <li>₹7,000 inr – 10 Mar</li>
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  {phase === "ACTIVE" ? (
                    <a
                      href="https://imjo.in/Hfvz9p"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-transform duration-300 hover:scale-[1.02]"
                    >
                      Enroll Now – ₹999 Only
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  ) : (
                    <button
                      type="button"
                      disabled
                      className="w-full rounded-full px-6 py-3.5 font-semibold bg-white/20 text-white/50 border border-white/10 cursor-not-allowed"
                    >
                      Offer Not Active
                    </button>
                  )}
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Regular Card (same styling + layout as Offer Card, with “standard” content) */}
          <FadeIn delay={240}>
            <div className="group relative overflow-hidden rounded-3xl p-8 md:p-10 transition-all border border-white/25 bg-gradient-to-br from-white/18 to-white/10 hover:shadow-2xl">
              {/* Top right tag */}
              <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
                Standard Fee
              </div>

              {/* Header (same as offer card header structure) */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold tracking-widest text-white/70 uppercase">
                    Anytime Enrollment
                  </p>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl font-bold text-white">
                    Regular Price
                  </h3>
                  <p className="mt-2 text-white/85 text-sm sm:text-base leading-relaxed">
                    Best for: students who want to enroll anytime (even if the
                    offer is missed) — same curriculum, same support.
                  </p>
                </div>

                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/8 border border-white/12 flex items-center justify-center">
                  <Zap className="w-7 h-7 text-white" />
                </div>
              </div>

              {/* Meta pills (same layout as offer card) */}
              <div className="mt-6 flex flex-wrap gap-2.5">
                <MetaPill
                  tone="dark"
                  icon={<Layers />}
                  text="120 Days program"
                />
                <MetaPill
                  tone="dark"
                  icon={<Users />}
                  text="Interview + Job assistance"
                />
                <MetaPill
                  tone="dark"
                  icon={<Clock />}
                  text="Working-professional friendly"
                />
              </div>

              {/* Middle content (keep it similar style: short, clean, no big FeatureList) */}
              <div className="mt-6 space-y-3 text-sm sm:text-base text-white/90">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span>
                    12+ OEM-based automotive trim projects in CATIA+UGNX
                  </span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span>CATIA & UG NX industry workflows</span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span>Get Trained By 12+ years industry expert only</span>
                </div>

                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-300 flex-shrink-0 mt-0.5" />
                  <span>
                    one-stop solution for a mech. engineer needs to move into
                    product design.
                  </span>
                </div>
              </div>

              {/* Price block (same style as offer card price row) */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
                <div>
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <div className="text-3xl sm:text-4xl font-display font-bold text-white">
                      ₹{formatINR(OFFER.regularPrice)}
                    </div>

                    <div className="text-sm text-white/75">
                      <div>
                        Register:{" "}
                        <span className="font-semibold text-white/90">
                          ₹{formatINR(OFFER.registerToFreeze)}
                        </span>{" "}
                        to confirm admission
                      </div>
                      <div>2 EMI available</div>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-white/70">
                  Enrollment stays open — join anytime and start your journey.
                </div>
              </div>

              {/* CTA (same CTA styling as offer card) */}
              <div className="mt-6">
                <a
                  href="https://imjo.in/mJS5Es"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="group w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-transform duration-300 hover:scale-[1.02]"
                >
                  Enroll Now
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </a>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Offer ended window (distinct color) */}
        {phase === "ENDED" ? <FadeIn delay={320}>{endedMessage}</FadeIn> : null}
      </div>

      {/* Local CSS animations (no external libs) */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
