import React, { useMemo, useRef, useState, useLayoutEffect } from "react";
import { Plus } from "lucide-react";

function FAQItem({ item, isOpen, onToggle }) {
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const update = () => {
      // Measure full inner height when open
      setHeight(el.scrollHeight);
    };

    // Measure after DOM paint to avoid 0 height on mobile
    requestAnimationFrame(update);

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [isOpen, item]);

  return (
    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
      >
        <span className="font-semibold text-lg">{item.q}</span>
        <Plus
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
        />
      </button>

      {/* Animated height container */}
      <div
        className="overflow-hidden transition-[max-height,opacity] duration-300 ease-in-out"
        style={{
          maxHeight: isOpen ? `${height}px` : "0px",
          opacity: isOpen ? 1 : 0,
        }}
      >
        {/* Real content (measured) */}
        <div
          ref={contentRef}
          className="px-6 py-5 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
        >
          {item.a}
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const faqs = useMemo(
    () => [
      {
        q: "Am I eligible for this course?",
        a: (
          <>
            <p className="mb-3">
              <span className="font-semibold">
                Yes — you are eligible if you belong to any of the following:
              </span>
            </p>

            <ul className="list-disc pl-5 space-y-2">
              <li>
                Mechanical Engineering{" "}
                <span className="font-semibold">BE / Diploma freshers</span>{" "}
                (even with <span className="font-semibold">1+ year gap</span>)
              </li>
              <li>
                No prior <span className="font-semibold">Design or CATIA</span>{" "}
                knowledge required
              </li>
              <li>
                Professionals from{" "}
                <span className="font-semibold">
                  Production / Manufacturing / Quality
                </span>{" "}
                background (1–15 years experience)
              </li>
              <li>
                Working in a{" "}
                <span className="font-semibold">
                  non-automotive design domain
                </span>{" "}
                and planning a switch
              </li>
              <li>
                <span className="font-semibold">
                  Mechanical Engineering students
                </span>{" "}
                currently in college
              </li>
            </ul>

            <p className="mt-4 font-semibold text-slate-700 dark:text-slate-300">
              👉 If you are ready to learn and serious about changing your
              career, this course is designed for you.
            </p>
          </>
        ),
      },
      {
        q: "What software is used in this course?",
        a: (
          <p>
            As per global industry usage, around{" "}
            <span className="font-semibold">
              90% of OEMs and Tier-1 automotive companies
            </span>{" "}
            use <span className="font-semibold">CATIA</span> and{" "}
            <span className="font-semibold">Siemens NX (UG NX)</span> for
            product design.
            <br />
            <br />
            In this course, we cover{" "}
            <span className="font-semibold">both CATIA and UG NX</span>.
            Projects are divided across both tools —{" "}
            <span className="font-semibold">7 projects in CATIA</span> and{" "}
            <span className="font-semibold">5 projects in UG NX</span> — so you
            gain practical exposure aligned with industry usage.
            <br />
            <br />
            This approach prepares you for{" "}
            <span className="font-semibold">
              the majority of automotive product design roles
            </span>
            . Software access and installation guidance is provided during
            enrollment.
          </p>
        ),
      },
      {
        q: "What if I miss live sessions?",
        a: (
          <p>
            All live sessions are{" "}
            <span className="font-semibold">
              recorded and shared within 5–10 minutes
            </span>{" "}
            after the class. You get{" "}
            <span className="font-semibold">lifetime access</span> to
            recordings, project files, and learning resources, so you can revise
            anytime at your own pace.
          </p>
        ),
      },
      {
        q: "What about doubt support?",
        a: (
          <p>
            <span className="font-semibold">
              Doubt support is provided at every stage.
            </span>
            <br />
            <br />
            All doubts are addressed{" "}
            <span className="font-semibold">after every live session</span>. If
            you have questions later, you can post them in our{" "}
            <span className="font-semibold">
              dedicated WhatsApp support group
            </span>{" "}
            with proper explanation, so fellow learners can also participate and
            help.
            <br />
            <br />
            The{" "}
            <span className="font-semibold">
              tutor actively reviews doubts
            </span>{" "}
            and guides as early as possible. For urgent cases, you can also{" "}
            <span className="font-semibold">contact the tutor directly</span>.
            <br />
            <br />
            Our goal is simple —{" "}
            <span className="font-semibold">100% doubt resolution</span>.
          </p>
        ),
      },
      {
        q: "Do we have assignments?",
        a: (
          <p>
            Yes! Assignments play a key role in learning and concept clarity. We
            follow a{" "}
            <span className="font-semibold">
              structured assignment plan from Day 1
            </span>
            .
            <br />
            <br />
            Assignments are reviewed{" "}
            <span className="font-semibold">weekly by the tutor</span>, with
            clear feedback. After every session, you will get an{" "}
            <span className="font-semibold">assignment + CAD test</span>.
            <br />
            <br />
            This helps you become{" "}
            <span className="font-semibold">
              interview-ready with real project understanding
            </span>
            .
          </p>
        ),
      },
      {
        q: "How does job assistance work?",
        a: (
          <p>
            Our job assistance is{" "}
            <span className="font-semibold">practical and industry-driven</span>
            .
            <br />
            <br />
            We support you with{" "}
            <span className="font-semibold">resume building</span>,{" "}
            <span className="font-semibold">
              real-time project portfolio guidance
            </span>
            , and{" "}
            <span className="font-semibold">
              interview preparation based on actual industry expectations
            </span>
            .
            <br />
            <br />
            <span className="font-semibold">
              Tier-1 and OEM HR teams regularly contact us
            </span>{" "}
            for genuine openings and job-ready candidates. Our{" "}
            <span className="font-semibold">
              referral partners in MNC automotive companies
            </span>{" "}
            also share requirements.
            <br />
            <br />
            We share{" "}
            <span className="font-semibold">daily interview opportunities</span>
            , schedule interviews based on your experience level, and keep
            supporting you{" "}
            <span className="font-semibold">until you get a deserving job</span>
            .
          </p>
        ),
      },
    ],
    [],
  );

  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
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
          {faqs.map((item, idx) => (
            <FAQItem
              key={item.q}
              item={item}
              isOpen={openIndex === idx}
              onToggle={() => toggle(idx)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
