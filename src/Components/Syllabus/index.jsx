import React, { useMemo, useState, useRef, useLayoutEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PlasticSyllabusTableSection() {
  const [isOpen, setIsOpen] = useState(false);

  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  // ---------------- SESSIONS DATA ----------------
  const sessions = useMemo(
    () => [
      {
        no: "01",
        title: "CATIA SURFACING",
        category: "Surfacing Training",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "02",
        title: "CATIA SURFACING",
        category: "Surfacing Training",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "03",
        title: "CATIA SURFACING",
        category: "Surfacing Training",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "04",
        title: "CATIA SURFACING",
        category: "Surfacing Training",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "05",
        title: "CATIA SURFACING",
        category: "Surfacing Training",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "06",
        title: "Automotive Development Process",
        category: "Theory",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "07",
        title: "Benchmarking & Plastic Product Design",
        category: "Theory",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "08",
        title: "Injection Mould & Draft Analysis",
        category: "Theory + Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "09",
        title: "Tooling Direction Methods",
        category: "Theory + Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "10",
        title: "Class A Surface Analysis",
        category: "Theory + Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "11",
        title: "Tree Structure & Close Body",
        category: "Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "12",
        title: "Map Pocket Close Body",
        category: "Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "13",
        title: "Mastersection Based Close Body",
        category: "Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "14",
        title: "Seat Recliner Cover",
        category: "Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "15",
        title: "Fuse Box Cover",
        category: "Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "16",
        title: "Front Bumper Close Body",
        category: "Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "17",
        title: "Front Bumper – Part 2",
        category: "Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "18",
        title: "Slider, Lifter & Undercuts",
        category: "Theory",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "19",
        title: "B-Side Features Introduction",
        category: "Theory",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "20",
        title: "Snap Design",
        category: "Theory + Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "21",
        title: "Locator Design",
        category: "Theory + Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "22",
        title: "Dog House Design",
        category: "Theory + Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "23",
        title: "Clip Tower Design",
        category: "Theory + Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "24",
        title: "Weld & Screw Boss",
        category: "Theory + Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "25",
        title: "Ribs Design",
        category: "Theory + Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "26",
        title: "Powercopy",
        category: "Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "27",
        title: "RPS & Locating Strategy",
        category: "Theory + Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "28",
        title: "Gap & Flush",
        category: "Design",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "29",
        title: "Mastersection Exercise 01",
        category: "Design Exercise",
        trainer: "Mr. Balkrishna Dhuri",
      },
      {
        no: "30",
        title: "Mastersection EX. 02",
        category: "Design Exercise",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "31",
        title: "Mastersection EX. 03",
        category: "Design Exercise",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "32",
        title: "Mastersection EX. 04",
        category: "Design Exercise",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "33",
        title: "Mastersection EX. 05",
        category: "Design Exercise",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "34",
        title: "Mastersection EX. 06",
        category: "Design Exercise",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "35",
        title: "Mastersection Variable Thickness",
        category: "Design Exercise",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "36",
        title: "Remastering Boolean",
        category: "Design Exercise",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "37",
        title: "Remastering Surfacing",
        category: "Design Exercise",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "38",
        title: "Style Replacement Methods",
        category: "Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "39",
        title: "GD and T",
        category: "Theory",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "40",
        title: "Plastic Defects",
        category: "Theory",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "41",
        title: "Plastic Materials",
        category: "Theory",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "42",
        title: "DMU Analysis and Report Creation",
        category: "Analysis",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "43",
        title: "Resume Building and Mock Interview",
        category: "Career",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "44",
        title: "Mock Interview Session 01",
        category: "Career",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "45",
        title: "Mock Interview Session 02",
        category: "Career",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "46",
        title: "Shut off and Graining",
        category: "Theory",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "47",
        title: "2D Drawing creation",
        category: "Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "48",
        title: "Features Remastering",
        category: "Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "49",
        title: "Mold Flow analysis Report reading",
        category: "Theory",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "50",
        title: "Toolroom mold design review",
        category: "Theory",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
    ],
    [],
  );

  // -------- HEIGHT CALCULATION (CRITICAL FIX) --------
  useLayoutEffect(() => {
    if (!contentRef.current) return;
    const height = contentRef.current.scrollHeight;
    setContentHeight(height);
  }, [isOpen, sessions.length]);

  return (
    <section className="py-20 px-6 bg-blue-300 border-y border-slate-200">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-slate-500 block mb-2">
            Day-wise Industry Syllabus
          </span>
          <h2 className="text-4xl md:text-5xl font-bold uppercase">
            Plastic Product Design Syllabus
          </h2>
          <p className="text-slate-600 mt-3">
            Session-wise syllabus designed exactly as OEM expectations.
          </p>
        </div>

        {/* Collapsible Wrapper */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden">
          {/* Toggle Header */}
          <div className="px-6 py-5 flex justify-between items-center">
            <div>
              <p className="font-semibold text-lg">
                View complete session list
              </p>
              <p className="text-sm text-slate-600">
                {sessions.length}+ sessions | 120 Days Program
              </p>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-300 font-semibold"
            >
              {isOpen ? (
                <>
                  Collapse <ChevronUp size={16} />
                </>
              ) : (
                <>
                  Click Here For Syllabus<ChevronDown size={16} />
                </>
              )}
            </button>
          </div>

          {/* Collapsible Content */}
          <div
            style={{
              maxHeight: isOpen ? `${contentHeight}px` : "0px",
              overflow: "hidden",
              transition: "max-height 0.4s ease",
            }}
          >
            <div ref={contentRef} className="px-6 pb-6">
              {/* Mobile + Desktop Cards */}
              <div className="space-y-3">
                {sessions.map((s) => (
                  <div
                    key={s.no}
                    className="bg-white border border-slate-200 rounded-xl p-4"
                  >
                    <div className="flex justify-between mb-1">
                      <p className="font-semibold">Session {s.no}</p>
                      <span className="text-xs bg-sky-100 text-sky-600 px-2 py-1 rounded-full font-semibold">
                        {s.category}
                      </span>
                    </div>
                    <p className="font-semibold">{s.title}</p>
                    <p className="text-sm text-slate-600 mt-1">
                      Trainer: {s.trainer}
                    </p>
                  </div>
                ))}
              </div>

              {/* Minimize Button */}
              <div className="pt-6 flex justify-center">
                <button
                  onClick={() => setIsOpen(false)}
                  className="px-6 py-3 rounded-full bg-slate-900 text-white font-semibold"
                >
                  Minimize syllabus
                </button>
              </div>
            </div>
          </div>

          {!isOpen && (
            <div className="px-6 py-4 border-t text-sm text-slate-600">
              Syllabus minimized. Click <b>Open</b> to view full list.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
