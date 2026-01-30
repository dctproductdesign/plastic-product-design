import React, { useEffect, useMemo, useState } from "react";
import { Clock, Users, Layers, CheckCircle, Zap, BadgePercent } from "lucide-react";
import { OFFER } from "./offerSchedule";

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

function MetaItem({ icon, text, inverted = false }) {
  return (
    <div className="flex items-center gap-2 text-sm">
      {React.cloneElement(icon, {
        className: `${icon.props.className || ""} ${inverted ? "" : "text-sky-500"}`,
      })}
      <span className={inverted ? "text-white/90" : ""}>{text}</span>
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
          <span className={`text-sm ${inverted ? "text-white/90" : ""}`}>{t}</span>
        </div>
      ))}
    </div>
  );
}

export default function PricingOffer() {
  const { start, end } = useMemo(getOfferWindow, []);
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const phase = useMemo(() => getPhase(now, start, end), [now, start, end]);

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

  const bannerText =
    phase === "ACTIVE"
      ? "HOUR DEAL is activated — enroll before seats get filled."
      : "Enrollment Open — Batch starts 2nd February. Hurry up!";

  // Use best “useful bits” from your course cards
  const coreFeatures = [
    "12+ real-time automotive trim projects based on OEM validation standards.",
    "Covers CATIA & UG NX — tools used by most automotive product design companies.",
    "Curriculum designed to match 3+ years of industry-relevant experience.",
    "Practice assignments / CAD test after every session.",
    "100% live Zoom sessions + working professionals friendly timing.",
    "Interview prep + portfolio guidance + job assistance support.",
  ];

  const regretMessage = (
    <div className="mt-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center">
      <h3 className="font-display text-2xl font-bold mb-2">Offer Window Closed</h3>
      <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
        You’re investing in your next 30 years — a 4–5k discount shouldn’t decide your career.
        Don’t go back. Start your journey today with us and enroll now.
      </p>

      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
        <a
          href="https://imjo.in/mJS5Es"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center gap-2 bg-white text-sky-600 hover:bg-slate-100 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
        >
          Enroll Now
        </a>
        <a
          href="#contact"
          className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
        >
          Talk to Us
        </a>
      </div>
    </div>
  );

  return (
    <section
      id="pricing"
      className="py-20 px-6 bg-gradient-to-br from-sky-500 to-blue-600 text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="pricing-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pricing-grid)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            {bannerText}
          </span>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight font-semibold mb-4">
            Pricing
          </h2>

          <p className="text-white/90 text-lg max-w-2xl mx-auto">
            {phase === "ACTIVE"
              ? "Limited-time offer is live. Secure your seat now."
              : "Seats are limited. Enroll early to lock your batch."}
          </p>
        </div>

        {/* Timer */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-12 text-center">
          <p className="text-sm uppercase tracking-widest mb-4">{timeLabel}</p>

          <div className="flex justify-center gap-4 mb-4">
            <TimeBox label="Hours" value={pad2(hh)} />
            <div className="flex items-center text-3xl font-bold">:</div>
            <TimeBox label="Minutes" value={pad2(mm)} />
            <div className="flex items-center text-3xl font-bold">:</div>
            <TimeBox label="Seconds" value={pad2(ss)} />
          </div>

          <p className="text-sm text-white/80">
            Offer Window:{" "}
            <span className="font-semibold">
              {start.toLocaleString()} → {end.toLocaleString()}
            </span>
          </p>
        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Offer Card (only when ACTIVE) */}
          <div
            className={`group rounded-3xl p-8 md:p-10 transition-all relative overflow-hidden ${
              phase === "ACTIVE"
                ? "bg-gradient-to-br from-white/18 to-white/10 border border-white/25 hover:shadow-2xl"
                : "bg-white/10 border border-white/20 opacity-80"
            }`}
          >
            <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
              {phase === "ACTIVE" ? "HOUR DEAL" : "Offer (inactive)"}
            </div>

            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                  Limited Time
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">
                  Offer Price
                </h3>
              </div>
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <BadgePercent className="w-8 h-8 text-white" />
              </div>
            </div>

            <p className="text-white/90 mb-6 text-lg font-medium">
              Best for: Students who want to lock the lowest fee within the offer window
            </p>

            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-white/20">
              <MetaItem inverted icon={<Clock className="w-4 h-4" />} text="Strict 2 hours" />
              <MetaItem inverted icon={<Layers className="w-4 h-4" />} text="120 Days program" />
              <MetaItem inverted icon={<Users className="w-4 h-4" />} text={`${OFFER.seatsLeft} seats left`} />
            </div>

            <FeatureList items={coreFeatures} inverted />

            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl font-display font-bold">
                ₹{formatINR(OFFER.offerPrice)}
              </div>
              <div className="text-sm text-white/80">
                <div className="line-through opacity-80">₹{formatINR(OFFER.regularPrice)}</div>
                <div>Register: ₹{formatINR(OFFER.registerToFreeze)} to freeze offer</div>
              </div>
            </div>

            <a
              href="https://imjo.in/mJS5Es"
              target="_blank"
              rel="noreferrer noopener"
              className="block w-full bg-white text-sky-700 hover:bg-slate-100 text-center py-4 rounded-full font-semibold transition-all hover:scale-105"
            >
              Enroll Now (Offer)
            </a>
          </div>

          {/* Regular Card (always visible) */}
          <div className="group bg-white text-slate-900 rounded-3xl p-8 md:p-10 hover:shadow-2xl transition-all border-2 border-slate-200">
            <div className="flex items-start justify-between mb-6">
              <div>
                <span className="inline-block px-3 py-1 bg-sky-500/10 text-sky-600 text-xs font-semibold uppercase tracking-wider rounded-full mb-4">
                  Standard Fee
                </span>
                <h3 className="font-display text-3xl md:text-4xl font-bold uppercase tracking-tight">
                  Regular Price
                </h3>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-sky-400 to-blue-600 rounded-2xl flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
            </div>

            <p className="text-slate-600 mb-6 text-lg font-medium">
              Best for: Anyone who wants to enroll anytime (even if offer is missed)
            </p>

            <div className="flex flex-wrap gap-4 mb-8 pb-8 border-b border-slate-200">
              <MetaItem icon={<Layers className="w-4 h-4 text-sky-500" />} text="120 Days program" />
              <MetaItem icon={<Users className="w-4 h-4 text-sky-500" />} text="Job assistance + interview prep" />
              <MetaItem icon={<Clock className="w-4 h-4 text-sky-500" />} text="Working professionals friendly" />
            </div>

            <FeatureList
              items={[
                "Same complete curriculum + projects + support",
                "Priority onboarding + batch guidance",
                "EMI plan available",
                "Course access + mentorship support",
              ]}
            />

            <div className="flex items-center gap-3 mb-6">
              <div className="text-3xl font-display font-bold">
                ₹{formatINR(OFFER.regularPrice)}
              </div>
              <div className="text-sm text-slate-500">
                <div>Register: ₹{formatINR(OFFER.registerToFreeze)}</div>
                <div>EMI available</div>
              </div>
            </div>

            <a
              href="https://imjo.in/mJS5Es"
              target="_blank"
              rel="noreferrer noopener"
              className="block w-full bg-sky-500 hover:bg-sky-600 text-white text-center py-4 rounded-full font-semibold transition-all hover:scale-105"
            >
              Enroll Now
            </a>
          </div>
        </div>

        {/* Ended Message */}
        {phase === "ENDED" ? regretMessage : null}
      </div>
    </section>
  );
}

function TimeBox({ label, value }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
        <span className="text-3xl font-display font-bold">{value}</span>
      </div>
      <span className="text-xs mt-2 uppercase tracking-wider opacity-80">{label}</span>
    </div>
  );
}
