import React, { useMemo, useState } from "react";
import { Plus } from "lucide-react";

export default function FAQSection() {
  const faqs = useMemo(
    () => [
      {
  q: "Am I eligible for this course?",
  a: (
    <>
      <p className="mb-3">
        <span className="font-semibold">Yes — you are eligible if you belong to any of the following:</span>
      </p>

      <ul className="list-disc pl-5 space-y-2">
        <li>
          Mechanical Engineering <span className="font-semibold">BE / Diploma freshers</span> (even with <span className="font-semibold">1+ year gap</span>)
        </li>
        <li>
          No prior <span className="font-semibold">Design or CATIA knowledge</span> required
        </li>
        <li>
          Professionals from <span className="font-semibold">Production / Manufacturing / Quality</span> background (1–15 years experience)
        </li>
        <li>
          Working in a <span className="font-semibold">non-automotive design domain</span> and planning a switch
        </li>
        <li>
          <span className="font-semibold">Mechanical Engineering students</span> currently in college
        </li>
      </ul>

      <p className="mt-4 font-semibold text-slate-700 dark:text-slate-300">
        👉 If you are ready to learn and serious about changing your career, this course is designed for you.
      </p>
    </>
  ),
},

      {
  q: "What software is used in this course?",
  a: (
    <p>
      As per global industry data, around <span className="font-semibold">90% of OEMs and Tier-1 automotive companies</span> use 
      <span className="font-semibold"> CATIA and Siemens NX (UG NX)</span> for product design.  
      <br /><br />
      In this course, we cover <span className="font-semibold">both CATIA and UG NX</span>.  
      Projects are divided across both tools — <span className="font-semibold">7 projects in CATIA</span> and 
      <span className="font-semibold">5 projects in UG NX</span> — so you gain practical exposure aligned with industry usage.  
      <br /><br />
      This approach prepares you for <span className="font-semibold">90% of automotive product design roles</span>.  
      Software access and installation guidance is provided during enrollment.
    </p>
  ),
},

      {
  q: "What if I miss live sessions?",
  a: (
    <p>
      All live sessions are <span className="font-semibold">recorded and shared within 5–10 minutes</span> after the class.
      You get <span className="font-semibold">lifetime access</span> to recordings, project files, and all learning resources,
      so you can revise anytime at your own pace.
    </p>
  ),
},

{
  q: "What about doubt support?",
  a: (
    <p>
      <span className="font-semibold">Doubt support is provided at every stage.</span>
      <br /><br />
      All doubts are addressed <span className="font-semibold">after every live session</span>.  
      If you have questions later, you can post them in our 
      <span className="font-semibold"> dedicated WhatsApp support group</span> with proper explanation, 
      so fellow learners can also participate and help.
      <br /><br />
      The <span className="font-semibold">tutor actively reviews the doubts</span> and provides guidance as early as possible.  
      For urgent cases, you can also <span className="font-semibold">contact the tutor directly</span> for immediate support.
      <br /><br />
      Our goal is simple — <span className="font-semibold">100% doubt resolution</span>.  
      That is our commitment to every learner.
    </p>
  ),
},
{
  q: "Do we have assignments?",
  a: (
    <p>
      Yes! Assignments play a key role in learning and concept clarity.  
      We follow a <span className="font-semibold">structured assignment plan from Day 1</span> for every topic.
      <br /><br />
      All assignments are reviewed <span className="font-semibold">weekly by the tutor</span>, with clear feedback to help you improve.
      After every session, you will get an <span className="font-semibold">assignment along with a CAD test</span>, 
      ensuring strong hands-on practice.
      <br /><br />
      This process helps you gain confidence in CAD tools and makes you 
      <span className="font-semibold">interview-ready with real project understanding</span>.
    </p>
  ),
},


      {
  q: "How does job assistance work?",
  a: (
    <p>
      Our job assistance is <span className="font-semibold">practical and industry-driven</span>, not just theoretical.
      <br /><br />
      We support you with <span className="font-semibold">resume building</span>, 
      <span className="font-semibold"> real-time project portfolio guidance</span>, and 
      <span className="font-semibold"> interview preparation based on actual industry expectations</span>.
      <br /><br />
      You can verify our strength through our community — 
      <span className="font-semibold"> Tier-1 and OEM HR teams regularly contact us</span> for genuine openings and 
      <span className="font-semibold"> job-ready candidates</span>.  
      In addition, our <span className="font-semibold">referral partners working in MNC automotive companies</span> 
      continuously share requirements with us.
      <br /><br />
      From all these sources, we <span className="font-semibold">share daily interview opportunities</span> with our students.  
      Interviews are <span className="font-semibold">scheduled based on your experience level</span> 
      (fresher or experienced), so you can apply and attend interviews continuously.
      <br /><br />
      We keep supporting you <span className="font-semibold">until you get a deserving and expected job</span>.  
      That is our motive.
    </p>
  ),
},
    ],
    []
  );

  const [openIndex, setOpenIndex] = useState(0); // first open by default (change to -1 if you want all closed)

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
          {faqs.map((item, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={item.q}
                className="accordion-item bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                  className="accordion-header w-full px-6 py-5 flex items-center justify-between text-left hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                >
                  <span className="font-semibold text-lg">{item.q}</span>
                  <Plus
                    className={`w-5 h-5 accordion-icon transition-transform duration-300 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  />
                </button>

                <div
                  className={`accordion-content overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="px-6 py-5 border-t border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400">
                    {item.a}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
