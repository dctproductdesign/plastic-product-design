// src/pages/Landing.jsx
// React conversion of your provided HTML + Tailwind (with interactive behavior)
// Dependencies: npm i lucide-react
// Tailwind: keep your existing main.css / tailwind setup.
// NOTE: add `scroll-smooth` to <html> via global CSS or set on root wrapper if needed.

import React, { useEffect, useMemo, useRef, useState } from "react";
import PlasticSyllabusSection from "./Components/Syllabus/index";
import {
  Sun,
  Moon,
  Menu,
  ArrowDown,
  Download,
  Video,
  FolderOpen,
  Briefcase,
  Headphones,
  BookOpen,
  Zap,
  Clock,
  Users,
  Layers,
  CheckCircle,
  Check,
  Quote,
  Phone,
  MessageCircle,
  Mail,
  Plus,
  X,
  Circle,
} from "lucide-react";
import ProjectsSection from "./Components/Projects";
import PricingOffer from "./Components/Pricingoffer";
import ContactCTA from "./Components/ContactUs";
import TrustCommunitySection from "./Components/SocialCommunity";
import FAQSection from "./Components/FAQ";

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const preferred =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    if (preferred) {
      root.classList.add("dark");
      setIsDark(true);
    } else {
      root.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    const root = document.documentElement;
    root.classList.toggle("dark");
    const nowDark = root.classList.contains("dark");
    localStorage.theme = nowDark ? "dark" : "light";
    setIsDark(nowDark);
  };

  return { isDark, toggleTheme };
}

function AccordionItem({ title, children, variant = "light" }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

  return (
    <div
      className={cx(
        "accordion-item border rounded-xl overflow-hidden",
        variant === "light"
          ? "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800"
          : "bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700",
      )}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        className={cx(
          "accordion-header w-full px-6 py-5 flex items-center justify-between text-left transition-colors",
          variant === "light"
            ? "hover:bg-slate-50 dark:hover:bg-slate-800"
            : "hover:bg-slate-100 dark:hover:bg-slate-700",
        )}
        type="button"
      >
        <span className="font-semibold text-lg">{title}</span>
        <Plus
          className={cx(
            "w-5 h-5 accordion-icon transition-transform",
            open ? "rotate-45" : "rotate-0",
          )}
        />
      </button>

      <div
        ref={contentRef}
        className={cx(
          "accordion-content overflow-hidden transition-all duration-300",
          open ? "max-h-[999px]" : "max-h-0",
        )}
        style={
          open && contentRef.current
            ? { maxHeight: contentRef.current.scrollHeight }
            : undefined
        }
      >
        <div
          className={cx(
            "px-6 py-5 border-t text-slate-600 dark:text-slate-400",
            variant === "light"
              ? "border-slate-200 dark:border-slate-800"
              : "border-slate-200 dark:border-slate-700",
          )}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function GridPattern({ id, size = 40, strokeWidth = 0.5, opacityClass }) {
  return (
    <div className={cx("absolute inset-0 pointer-events-none", opacityClass)}>
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id={id}
            width={size}
            height={size}
            patternUnits="userSpaceOnUse"
          >
            <path
              d={`M ${size} 0 L 0 0 0 ${size}`}
              fill="none"
              stroke="currentColor"
              strokeWidth={strokeWidth}
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill={`url(#${id})`} />
      </svg>
    </div>
  );
}

export default function Landing() {
  const { isDark, toggleTheme } = useDarkMode();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [headerShadow, setHeaderShadow] = useState(false);

  const [syllabusTab, setSyllabusTab] = useState("basic"); // basic | advanced
  const [projectTab, setProjectTab] = useState("basic"); // basic | advanced

  const [brochureOpen, setBrochureOpen] = useState(false);

  const [offerEnded, setOfferEnded] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "45",
    seconds: "30",
  });

  // Sticky header shadow on scroll
  useEffect(() => {
    const onScroll = () => {
      const y = window.pageYOffset;
      setHeaderShadow(y > 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on hash navigation (smooth scrolling behavior)
  useEffect(() => {
    const onClick = (e) => {
      const a = e.target.closest?.('a[href^="#"]');
      if (!a) return;

      const href = a.getAttribute("href");
      const target = href ? document.querySelector(href) : null;
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      setMobileMenuOpen(false);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  // Brochure modal body lock
  useEffect(() => {
    if (brochureOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [brochureOpen]);

  // Countdown Timer (kept as close as possible to your original logic)
  useEffect(() => {
    let intervalId;

    const updateCountdown = () => {
      const now = new Date();
      const targetTime = new Date();
      targetTime.setHours(targetTime.getHours() + 2);
      targetTime.setMinutes(45);
      targetTime.setSeconds(30);

      const diff = targetTime - now;

      if (diff <= 0) {
        setOfferEnded(true);
        setTimeLeft({ hours: "00", minutes: "00", seconds: "00" });
        return;
      }

      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    updateCountdown();
    intervalId = window.setInterval(updateCountdown, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const projectsBasic = useMemo(
    () => [
      {
        tag: "B-side Features",
        title: "Door Trim Basic Features",
        desc: "Learn fundamental mounting points, locators, and basic B-side design",
        img: "https://img.rocket.new/generatedImages/rocket_gen_img_16c7a53ee-1769624671369.png",
        alt: "Automotive door trim interior panel with mounting points and structural features",
      },
      {
        tag: "Fundamentals",
        title: "Pillar Trim Fundamentals",
        desc: "Master basic pillar trim design with draft and rib patterns",
        img: "https://img.rocket.new/generatedImages/rocket_gen_img_12a7f942d-1769624671787.png",
        alt: "Automotive pillar trim component showing structural ribs and mounting features",
      },
      {
        tag: "Structural",
        title: "Bracket/Support Part",
        desc: "Design simple bracket with boss features and tooling logic",
        img: "https://img.rocket.new/generatedImages/rocket_gen_img_13a2e1ab9-1769624672034.png",
        alt: "Automotive bracket support part with mounting bosses and reinforcement ribs",
      },
      {
        tag: "Assembly",
        title: "Clip & Locator Practice",
        desc: "Learn snap-fit clip design and locator pin/hole features",
        img: "https://img.rocket.new/generatedImages/rocket_gen_img_1fa43c643-1769624670926.png",
        alt: "Plastic clip and locator assembly components for automotive interior fastening",
      },
      {
        tag: "Draft Rules",
        title: "Simple Trim Cover",
        desc: "Apply draft angle rules and tooling direction basics",
        img: "https://img.rocket.new/generatedImages/rocket_gen_img_1761c5938-1769624671112.png",
        alt: "Simple automotive trim cover showing draft angles and surface quality requirements",
      },
    ],
    [],
  );

  const projectsAdvanced = useMemo(
    () => [
      {
        tag: "Production-Level",
        title: "Door Trim Full B-side",
        desc: "Complete production-level door trim with advanced B-side network",
        img: "https://img.rocket.new/generatedImages/rocket_gen_img_139545073-1769624672709.png",
        alt: "Complete door trim with advanced B-side engineering including rib network and robust bosses",
      },
      {
        tag: "Complex Assembly",
        title: "IP Trim Design Approach",
        desc: "Master instrument panel trim with packaging complexity",
        img: "https://img.rocket.new/generatedImages/rocket_gen_img_13a0d94e6-1769624670238.png",
        alt: "Instrument panel trim design showing complex packaging and multi-component assembly",
      },
      {
        tag: "Packaging Logic",
        title: "Console Trim Advanced",
        desc: "Console design with integrated packaging and assembly logic",
        img: "https://img.rocket.new/generatedImages/rocket_gen_img_1f772c184-1769624671376.png",
        alt: "Center console trim with integrated packaging logic and advanced mounting features",
      },
      {
        tag: "Master Section",
        title: "Pillar Trim Master Section",
        desc: "Apply master section workflow to complex pillar trim",
        img: "https://img.rocket.new/generatedImages/rocket_gen_img_181107eb3-1769624670569.png",
        alt: "Pillar trim with master section workflow showing sectional design methodology",
      },
      {
        tag: "DMU Validation",
        title: "DMU Clearance Case",
        desc: "Learn DMU methodology with clearance and fitment validation",
        img: "https://img.rocket.new/generatedImages/rocket_gen_img_14fa57398-1769624669895.png",
        alt: "DMU clearance analysis visualization showing interference detection and gap validation",
      },
      {
        tag: "Capstone Project",
        title: "Complete Part: Scratch to Advanced",
        desc: "Portfolio-ready project: full workflow from concept to production",
        img: "https://img.rocket.new/generatedImages/rocket_gen_img_1a378c629-1769624670244.png",
        alt: "Complete automotive trim part from concept to production-level advanced design",
      },
    ],
    [],
  );

  return (
    <div className="bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
      {/* Sticky Header */}
      <header
        id="main-header"
        className={cx(
          "fixed top-0 w-full z-50 bg-slate-50/90 dark:bg-slate-950/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-all duration-300",
          headerShadow && "shadow-lg",
        )}
      >
        <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Digital CAD Logo */}
            <img
              src="/dctlogo.jpg"
              alt="Digital CAD Training"
              className="h-10 w-auto object-contain"
            />

            {/* Text + Authorization */}
            <div className="leading-tight hidden sm:block">
              <div className="font-display font-semibold text-xl tracking-tight">
                Digital CAD Training
              </div>
              <div className="inline-flex items-center px-3 py-1 rounded-sm bg-[#ff0202]">
                <span className="text-[11px] font-bold uppercase tracking-widest text-white">
                  CADPOINT Authorized Training Centre
                </span>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
            <a href="#Pricingoffer" className="hover:text-sky-500 transition-colors">
              WEBINAR-OFFER-Details
            </a>
            <a
              href="#syllabus"
              className="hover:text-sky-500 transition-colors"
            >
              Syllabus
            </a>
            <a
              href="#projects"
              className="hover:text-sky-500 transition-colors"
            >
              Projects
            </a>
            <a href="#pricing" className="hover:text-sky-500 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-sky-500 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-sky-500 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Toggle theme"
              type="button"
            >
              {isDark ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            <a
              href="#pricing"
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-all hover:scale-105"
            >
              Enroll Now
            </a>

            <button
              onClick={() => setMobileMenuOpen((v) => !v)}
              className="lg:hidden p-2 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-lg transition-colors"
              type="button"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={cx(
            "lg:hidden absolute top-full left-0 w-full bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 transition-all duration-300",
            mobileMenuOpen
              ? "transform translate-y-0 opacity-100 pointer-events-auto"
              : "transform -translate-y-full opacity-0 pointer-events-none",
          )}
        >
          <div className="px-6 py-6 flex flex-col gap-4 text-sm font-medium">
            <a href="#courses" className="hover:text-sky-500 transition-colors">
              Courses
            </a>
            <a
              href="#syllabus"
              className="hover:text-sky-500 transition-colors"
            >
              Syllabus
            </a>
            <a
              href="#projects"
              className="hover:text-sky-500 transition-colors"
            >
              Projects
            </a>
            <a href="#pricing" className="hover:text-sky-500 transition-colors">
              Pricing
            </a>
            <a href="#faq" className="hover:text-sky-500 transition-colors">
              FAQ
            </a>
            <a href="#contact" className="hover:text-sky-500 transition-colors">
              Contact
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-20 px-6 flex flex-col justify-center relative overflow-hidden">
        <GridPattern
          id="grid"
          size={40}
          strokeWidth={0.5}
          opacityClass="opacity-[0.03] dark:opacity-[0.05]"
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-sky-500/10 border border-sky-500/20 rounded-full text-sky-600 dark:text-sky-400 text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500" />
              </span>
              Registrations Closing Today - Batch Starts Tomorrow|9th February 2026!
            </span>
          </div>

          <h1 className="font-display text-[13vw] md:text-[11vw] lg:text-[9vw] leading-[0.85] tracking-tighter uppercase font-semibold mb-8">
            <span className="block reveal-text">
              <span className="reveal-inner" style={{ animationDelay: "0.1s" }}>
                Automotive
              </span>
            </span>
            <span className="block reveal-text">
              <span className="reveal-inner" style={{ animationDelay: "0.2s" }}>
                Plastic Product
              </span>
            </span>
            <span className="block reveal-text">
              <span className="reveal-inner" style={{ animationDelay: "0.3s" }}>
                Design
              </span>
            </span>
          </h1>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 items-end">
            <div className="md:col-span-2">
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light leading-relaxed mb-8 max-w-2xl">
                Learn real OEM-style methodology. Build job-ready skills with
                practical projects.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium">
                  Basic + Advanced Tracks
                </div>
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium">
                  Job-Assisted Learning
                </div>
                <div className="px-4 py-2 bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg text-sm font-medium">
                  Industry Workflow
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a
                  href="#pricing"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 group"
                >
                  <span>WEBINAR-HOUR-OFFER</span>
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </a>

                {/* <button
                  onClick={() => setBrochureOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                  type="button"
                >
                  <Download className="w-5 h-5" />
                  <span>Get Course Brochuree</span>
                </button> */}

                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                <a
                  href="#trust"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 group"
                >
                  <span>Get Trust Varified</span>
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </a>
              </div>
              </div>

              <p className="text-xs text-slate-500 dark:text-slate-500">
                Offer Hour pricing updates automatically. Limited seats
                available.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
                <div className="text-4xl font-display font-bold mb-2">
                  2000+
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  Students Trained
                </div>
              </div>
              <div className="bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-900 dark:to-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-6">
                <div className="text-4xl font-display font-bold mb-2">100%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  Job Placement Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <PlasticSyllabusSection />

      <ProjectsSection />

      <PricingOffer />

      <ContactCTA />

      <TrustCommunitySection />

      <FAQSection />

      <footer>
        <div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-800 text-sm">
            <p>© 2026 Digital CAD Training. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition-colors"
              >
                WhatsApp
              </a>
              <a
                href="mailto:info@digitalcadtraining.com"
                className="hover:text-sky-400 transition-colors"
              >
                Email
              </a>
              <a
                href="tel:+919876543210"
                className="hover:text-sky-400 transition-colors"
              >
                Phone
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Brochure Modal */}
      {/* Brochure Modal */}
      <div
        id="brochure-modal"
        className={cx(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-6 transition-opacity duration-300",
          brochureOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none",
        )}
        onMouseDown={(e) => {
          if (e.target?.id === "brochure-modal") setBrochureOpen(false);
        }}
      >
        <div
          className={cx(
            "bg-white dark:bg-slate-900 rounded-2xl max-w-md w-full p-8 transition-transform duration-300",
            brochureOpen ? "scale-100" : "scale-95",
          )}
        >
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-display text-2xl font-semibold">
              Download Brochure
            </h3>
            <button
              onClick={() => setBrochureOpen(false)}
              className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              type="button"
              aria-label="Close brochure modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Content */}
          <p className="text-slate-600 dark:text-slate-400 mb-8 text-center">
            Get the complete course brochure including syllabus, projects,
            pricing, and upcoming batch details directly on WhatsApp.
          </p>

          {/* CTA */}
          <a
            href="https://wa.aisensy.com/wThTGk"
            target="_blank"
            rel="noreferrer"
            className="block w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold text-center transition-all hover:scale-105"
          >
            📄 Get Brochure on WhatsApp
          </a>

          {/* Reassurance */}
          <p className="text-xs text-slate-500 dark:text-slate-500 mt-4 text-center">
            Instant access • No forms
          </p>
        </div>
      </div>
    </div>
  );
}
