import React, { useMemo, useState, useRef, useLayoutEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function PlasticSyllabusTableSection() {
  const [isOpen, setIsOpen] = useState(false);

  // Put your 1–120 sessions here (I added 01–50 from your message)
  const sessions = useMemo(
    () => [
      {
        no: "01",
        title: "CATIA SURFACING",
        category: "Surfacing Training",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "02",
        title: "CATIA SURFACING",
        category: "Surfacing Training",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "03",
        title: "CATIA SURFACING",
        category: "Surfacing Training",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "04",
        title: "CATIA SURFACING",
        category: "Surfacing Training",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "05",
        title: "CATIA SURFACING",
        category: "Surfacing Training",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "06",
        title: "Automotive Development Process",
        category: "Theory",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "07",
        title: "Benchmarking and Plastic Product Design Concepts",
        category: "Theory",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "08",
        title: "Injection Mould Intro and Draft Analysis",
        category: "Theory+Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "09",
        title: "Tooling Direction Methods",
        category: "Theory+Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "10",
        title: "Class A Surface Analysis and Report",
        category: "Theory+Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "11",
        title: "Tree Structure Design and Close Body",
        category: "Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "12",
        title: "Close Body Creation Map Pocket",
        category: "Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "13",
        title: "Close Body Using Mastersections",
        category: "Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "14",
        title: "Close Body Seat Recliner Cover",
        category: "Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "15",
        title: "Close Body Fuse Box Cover",
        category: "Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "16",
        title: "Close Body Front Bumper Close Body",
        category: "Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "17",
        title: "Close Body Front Bumper Close Body Part 02",
        category: "Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "18",
        title: "Slider - Lifter - Undercut",
        category: "Theory",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "19",
        title: "B SIDE Features Intro",
        category: "Theory",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "20",
        title: "Snap Design with Functional Dimensions",
        category: "Theory+Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "21",
        title: "Locator Design",
        category: "Theory+Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "22",
        title: "Dog House Design",
        category: "Theory+Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "23",
        title: "Clip Tower Design",
        category: "Theory+Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "24",
        title: "Welding Boss and Screw Boss Design",
        category: "Theory+Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "25",
        title: "RIBS Design",
        category: "Theory+Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "26",
        title: "Powercopy Design",
        category: "Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "27",
        title: "RPS and Part Locating Strategy",
        category: "Theory+Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "28",
        title: "Gap and Flush and Mastersection Intro",
        category: "Design",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
      },
      {
        no: "29",
        title: "Mastersection EX. 01",
        category: "Design Exercise",
        status: "",
        trainer: "Mr. Balkrishna Dhuri",
        remarks: "",
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

    const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useLayoutEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    const update = () => setContentHeight(el.scrollHeight);
    update();

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [sessions.length, isOpen]);

  return (
    <section
      id="syllabus"
      className="py-20 px-6 bg-white dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-10">
          <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-4 block">
            Day 1–120 Sessions Tracker
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight font-semibold mb-4">
            Plastic Course Syllabus
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Simple session-wise syllabus with topic, category, trainer &
            remarks.
          </p>
        </div>

        {/* Collapsible Wrapper */}
        <div className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden">
          {/* Top toggle row */}
          <div className="px-6 py-5 flex items-center justify-between gap-4">
            <div>
              <p className="font-semibold text-lg">
                View complete session list
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400">
                Total shown: {sessions.length} sessions, guaranteed 80 hours
                course.
              </p>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((v) => !v)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors font-semibold"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <>
                  Collapse <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  Open <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          {/* Content */}
          <div
            className="transition-[max-height,opacity] duration-300 ease-in-out"
            style={{
              maxHeight: isOpen ? `${contentHeight}px` : "0px",
              opacity: isOpen ? 1 : 0,
              overflow: "hidden",
            }}
          >
            <div className="px-6 pb-6">
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl">
                <table className="min-w-[900px] w-full text-sm">
                  <thead className="bg-slate-100 dark:bg-slate-800">
                    <tr className="text-left">
                      <th className="px-4 py-3 font-semibold">Session No</th>
                      <th className="px-4 py-3 font-semibold">Title</th>
                      <th className="px-4 py-3 font-semibold">Category</th>
                      <th className="px-4 py-3 font-semibold">Status</th>
                      <th className="px-4 py-3 font-semibold">Trainer</th>
                      <th className="px-4 py-3 font-semibold">Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    {sessions.map((s, idx) => (
                      <tr
                        key={s.no + s.title}
                        className={`border-t border-slate-200 dark:border-slate-800 ${
                          idx % 2 === 0
                            ? "bg-white dark:bg-slate-900"
                            : "bg-slate-50 dark:bg-slate-950/30"
                        }`}
                      >
                        <td className="px-4 py-3 font-semibold text-slate-700 dark:text-slate-200">
                          {s.no}
                        </td>
                        <td className="px-4 py-3">{s.title}</td>
                        <td className="px-4 py-3">{s.category}</td>
                        <td className="px-4 py-3">{s.status || "-"}</td>
                        <td className="px-4 py-3">{s.trainer}</td>
                        <td className="px-4 py-3">{s.remarks || "-"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Cards */}
              <div className="md:hidden space-y-3">
                {sessions.map((s) => (
                  <div
                    key={s.no + s.title}
                    className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl p-4"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <p className="font-semibold">Session {s.no}</p>
                      <span className="text-xs px-2 py-1 rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400 font-semibold">
                        {s.category}
                      </span>
                    </div>
                    <p className="font-semibold">{s.title}</p>
                    <div className="mt-3 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                      <p>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          Trainer:
                        </span>{" "}
                        {s.trainer}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          Status:
                        </span>{" "}
                        {s.status || "-"}
                      </p>
                      <p>
                        <span className="font-semibold text-slate-700 dark:text-slate-300">
                          Remarks:
                        </span>{" "}
                        {s.remarks || "-"}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom minimize */}
              <div className="pt-6 flex justify-center">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-slate-100 transition-colors font-semibold"
                >
                  Minimize syllabus <ChevronUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {!isOpen && (
            <div className="px-6 py-4 border-t border-slate-200 dark:border-slate-700 text-sm text-slate-600 dark:text-slate-400">
              Syllabus minimized. Click{" "}
              <span className="font-semibold">Open</span> to view session-wise
              syllabus.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
