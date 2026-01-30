// src/pages/Landing.jsx
// React conversion of your provided HTML + Tailwind (with interactive behavior)
// Dependencies: npm i lucide-react
// Tailwind: keep your existing main.css / tailwind setup.
// NOTE: add `scroll-smooth` to <html> via global CSS or set on root wrapper if needed.

import React, { useEffect, useMemo, useRef, useState } from "react";
import Comparison from "./Components/Comparison/index";
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
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-display font-bold text-lg">
                D
              </span>
            </div>
            <span className="font-display font-semibold text-xl tracking-tight hidden md:block">
              Digital CAD Training
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-sm font-medium">
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
              Enrollments Open - Offer Hour Active
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
                  href="#courses"
                  className="inline-flex items-center justify-center gap-2 bg-sky-500 hover:bg-sky-600 text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105 group"
                >
                  <span>View Courses</span>
                  <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
                </a>

                <button
                  onClick={() => setBrochureOpen(true)}
                  className="inline-flex items-center justify-center gap-2 bg-white dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300 dark:border-slate-700 px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
                  type="button"
                >
                  <Download className="w-5 h-5" />
                  <span>Get Course Brochure</span>
                </button>
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
                <div className="text-4xl font-display font-bold mb-2">95%</div>
                <div className="text-sm text-slate-600 dark:text-slate-400 uppercase tracking-wide">
                  Job Placement Rate
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Get Section */}
      <section className="py-20 px-6 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-4 block">
              What Makes Us Different
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight font-semibold">
              What You Get
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
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
            ].map((f) => (
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

      <Comparison />

      <PlasticSyllabusSection />
      
      <ProjectsSection />

      {/* Offer Hour Pricing Section */}
      <section
        id="pricing"
        className="py-20 px-6 bg-gradient-to-br from-sky-500 to-blue-600 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="pricing-grid"
                width="60"
                height="60"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 60 0 L 0 0 0 60"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pricing-grid)" />
          </svg>
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              <span>OFFER HOUR ACTIVE</span>
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight font-semibold mb-6">
              Limited-Time Pricing
            </h2>
            <p className="text-white/90 text-lg max-w-2xl mx-auto">
              Special offer window pricing. Enroll now to secure your seat at
              discounted rates.
            </p>
          </div>

          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mb-12 text-center">
            <p className="text-sm uppercase tracking-widest mb-4">
              Offer Hour Ends In:
            </p>

            <div className="flex justify-center gap-4 mb-4">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span id="hours" className="text-3xl font-display font-bold">
                    {timeLeft.hours}
                  </span>
                </div>
                <span className="text-xs mt-2 uppercase tracking-wider opacity-80">
                  Hours
                </span>
              </div>

              <div className="flex items-center text-3xl font-bold">:</div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span
                    id="minutes"
                    className="text-3xl font-display font-bold"
                  >
                    {timeLeft.minutes}
                  </span>
                </div>
                <span className="text-xs mt-2 uppercase tracking-wider opacity-80">
                  Minutes
                </span>
              </div>

              <div className="flex items-center text-3xl font-bold">:</div>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <span
                    id="seconds"
                    className="text-3xl font-display font-bold"
                  >
                    {timeLeft.seconds}
                  </span>
                </div>
                <span className="text-xs mt-2 uppercase tracking-wider opacity-80">
                  Seconds
                </span>
              </div>
            </div>

            <p className="text-sm text-white/80" id="next-offer-message">
              Next Offer Window: Tomorrow at 10:00 AM
            </p>
          </div>

          {!offerEnded ? (
            <div className="grid md:grid-cols-2 gap-8">
              {/* Basic Pricing */}
              <div className="bg-white text-slate-900 rounded-2xl p-8 relative">
                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold uppercase mb-2">
                    Basic Course
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Perfect for beginners entering automotive design
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-slate-400 line-through text-xl">
                      ₹18,000
                    </span>
                    <span className="text-5xl font-display font-bold text-sky-600">
                      ₹15,000
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Registration: ₹5,000 | EMI available
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "8-10 weeks training",
                    "7 modules + 5 projects",
                    "Live training + lifetime access",
                    "Job assistance + interview prep",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://imjo.in/mJS5Es"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="relative z-10 block w-full bg-sky-500 hover:bg-sky-600 text-white text-center py-4 rounded-full font-semibold transition-all hover:scale-105"
                >
                  Enroll Now - Basic
                </a>

                <p className="text-xs text-center text-slate-500 mt-4">
                  <Users className="w-3 h-3 inline mr-1" />
                  12 seats remaining
                </p>
              </div>

              {/* Advanced Pricing */}
              <div className="bg-white text-slate-900 rounded-2xl p-8 relative border-4 border-yellow-400">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-slate-900 px-6 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider">
                  Most Popular
                </div>

                <div className="mb-6">
                  <h3 className="font-display text-2xl font-bold uppercase mb-2">
                    Advanced Course
                  </h3>
                  <p className="text-slate-600 text-sm">
                    Production-level design readiness
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-slate-400 line-through text-xl">
                      ₹35,000
                    </span>
                    <span className="text-5xl font-display font-bold text-sky-600">
                      ₹28,000
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">
                    Registration: ₹8,000 | EMI available
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  {[
                    "12-14 weeks intensive training",
                    "7 modules + 6 production projects",
                    "DMU validation + master section",
                    "Portfolio building + enhanced job support",
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-2 text-sm">
                      <Check className="w-5 h-5 text-sky-500 flex-shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="https://imjo.in/mJS5Es"
                  className="block w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white text-center py-4 rounded-full font-semibold transition-all hover:scale-105 shadow-lg"
                >
                  Enroll Now - Advanced
                </a>

                <p className="text-xs text-center text-slate-500 mt-4">
                  <Users className="w-3 h-3 inline mr-1" />8 seats remaining -
                  Moving fast!
                </p>
              </div>
            </div>
          ) : (
            <div
              id="notify-form"
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 mt-8"
            >
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl font-bold mb-2">
                  Offer Window Closed
                </h3>
                <p className="text-white/90">
                  Get notified when the next offer window opens
                </p>
              </div>
              <form className="space-y-4 max-w-md mx-auto">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input
                  type="tel"
                  placeholder="WhatsApp Number"
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-sky-600 py-3 rounded-lg font-semibold hover:bg-slate-100 transition-colors"
                >
                  Notify Me for Next Offer
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Student Success Section */}
      <section className="py-20 px-6 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-4 block">
              Success Stories
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight font-semibold">
              Student Outcomes
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  '"The master section workflow taught in Advanced course helped me crack my interview at a major OEM. The portfolio projects were exactly what recruiters wanted to see."',
                name: "Rahul M.",
                role: "Product Design Engineer, Automotive OEM",
              },
              {
                quote:
                  '"Coming from mechanical background, Basic course gave me the perfect foundation. The B-side engineering modules were game-changers. Got placed within 2 months."',
                name: "Priya S.",
                role: "Design Engineer, Tier-1 Supplier",
              },
              {
                quote:
                  '"DMU validation and DFM mindset training in Advanced course set me apart from other candidates. Now working on production-level IP trims confidently."',
                name: "Amit K.",
                role: "Senior Design Engineer, Automotive",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-8"
              >
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-sky-500 opacity-50" />
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-6 leading-relaxed">
                  {t.quote}
                </p>
                <div>
                  <p className="font-semibold">{t.name}</p>
                  <p className="text-sm text-slate-500 dark:text-slate-500">
                    {t.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-4 block">
              Common Questions
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight font-semibold">
              FAQ
            </h2>
          </div>

          <div className="space-y-3">
            <AccordionItem title="Who can join these courses?" variant="light">
              <p>
                Basic course: Fresh graduates (Mechanical/Automobile), career
                switchers, anyone interested in automotive design (no prior CAD
                experience required).
              </p>
              <p className="mt-2">
                Advanced course: Candidates with basic CAD knowledge or those
                who completed Basic course, professionals seeking
                specialization.
              </p>
            </AccordionItem>

            <AccordionItem title="What software is needed?" variant="light">
              <p>
                We teach industry-standard CAD software used in OEMs. You'll
                gain awareness of CATIA/NX workflows. Software access and
                installation guidance provided during enrollment.
              </p>
            </AccordionItem>

            <AccordionItem title="How are projects delivered?" variant="light">
              <p>
                Projects are hands-on, step-by-step guided sessions during live
                classes. You'll build actual automotive trim parts (Door,
                Pillar, IP, Console) with instructor support. Project files and
                references provided.
              </p>
            </AccordionItem>

            <AccordionItem
              title="What if I miss live sessions?"
              variant="light"
            >
              <p>
                All live sessions are recorded and shared. You get lifetime
                access to recordings, project files, and resources.
                Doubt-clearing support available through dedicated channels.
              </p>
            </AccordionItem>

            <AccordionItem
              title="How does job assistance work?"
              variant="light"
            >
              <p>
                We provide: Resume building, portfolio guidance, interview
                preparation with common question practice, referrals to our
                partner companies, and ongoing career mentoring even after
                course completion.
              </p>
            </AccordionItem>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-6 bg-gradient-to-br from-slate-900 to-slate-800 dark:from-slate-950 dark:to-slate-900 text-white"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs uppercase tracking-widest text-slate-400 mb-4 block">
                Get In Touch
              </span>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight font-semibold mb-6">
                Ready to Start?
              </h2>
              <p className="text-slate-300 text-lg mb-8 leading-relaxed">
                Have questions? Want to know more about the courses? Our team is
                here to help you make the right choice for your career.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-sky-500 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Phone</p>
                    <p className="text-lg font-semibold">+91 98765 43210</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-green-500 transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">WhatsApp</p>
                    <p className="text-lg font-semibold">+91 797750 8768</p>
                  </div>
                </a>

                <a
                  href="mailto:info@digitalcadtraining.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-sky-500 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-400">Email</p>
                    <p className="text-lg font-semibold">
                      info@digitalcadtraining.com
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-display font-bold text-lg">
                    D
                  </span>
                </div>
                <span className="font-display font-semibold text-xl text-white">
                  Digital CAD Training
                </span>
              </div>
              <p className="text-sm mb-4">
                Professional automotive plastic product design training with
                real OEM methodology.
              </p>
              <p className="text-xs text-slate-500">Authorized by CADPOINT</p>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-wider">
                Quick Links
              </h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#courses"
                  className="block hover:text-sky-400 transition-colors"
                >
                  Courses
                </a>
                <a
                  href="#syllabus"
                  className="block hover:text-sky-400 transition-colors"
                >
                  Syllabus
                </a>
                <a
                  href="#projects"
                  className="block hover:text-sky-400 transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#pricing"
                  className="block hover:text-sky-400 transition-colors"
                >
                  Pricing
                </a>
                <a
                  href="#faq"
                  className="block hover:text-sky-400 transition-colors"
                >
                  FAQ
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-white mb-4 uppercase text-sm tracking-wider">
                Legal
              </h4>
              <div className="space-y-2 text-sm">
                <a
                  href="#"
                  className="block hover:text-sky-400 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="block hover:text-sky-400 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="block hover:text-sky-400 transition-colors"
                >
                  Refund Policy
                </a>
              </div>
            </div>
          </div>

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
            brochureOpen ? "transform scale-100" : "transform scale-95",
          )}
        >
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

          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Enter your details to receive the complete course brochure with
            syllabus, pricing, and batch details.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full px-4 py-3 bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white py-3 rounded-lg font-semibold transition-all hover:scale-105"
            >
              Download Brochure
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
