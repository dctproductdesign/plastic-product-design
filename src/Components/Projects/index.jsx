import React, { useMemo, useState } from "react";

import p01Cad from "./p01-cad.png";
import p01Car from "./p01-car.png";
import p02Cad from "./p02-cad.png";
import p02Car from "./p02-car.png";
import p03Cad from "./p03-cad.png";
import p03Car from "./p03-car.png";
import p04Cad from "./p04-cad.png";
import p04Car from "./p04-car.png";
import p05Cad from "./p05-cad.png";
import p05Car from "./p05-car.png";
import p06Cad from "./p06-cad.png";
import p06Car from "./p06-car.png";
import p07Cad from "./p07-cad.png";
import p07Car from "./p07-car.png";
import p08Cad from "./p08-cad.png";
import p08Car from "./p08-car.png";

function ProjectFlipCard({ project }) {
  const [flipped, setFlipped] = useState(false);

  // ✅ Safe defaults (prevents blank screen)
  const tag = project.tag || "OEM Project";
  const desc = project.desc || "Flip to see real in-car position.";
  const area = project.area || "Automotive Trims";
  const points = Array.isArray(project.points) ? project.points : [];

  return (
    <div className="group">
      <button
        type="button"
        onClick={() => setFlipped((v) => !v)}
        className="w-full text-left"
        aria-label={`Flip card: ${project.title}`}
      >
        <div
          className={[
            "relative rounded-2xl border border-slate-200 dark:border-slate-800",
            "bg-white dark:bg-slate-900 overflow-hidden",
            "shadow-sm hover:shadow-2xl transition-all",
          ].join(" ")}
        >
          {/* 3D stage */}
          <div
            className="relative h-[360px] sm:h-[380px]"
            style={{ perspective: "1200px" }}
          >
            {/* 3D object */}
            <div
              className={[
                "absolute inset-0 transition-transform duration-700",
                "[transform-style:preserve-3d]",
                "group-hover:[transform:rotateY(180deg)]",
                flipped ? "[transform:rotateY(180deg)]" : "",
              ].join(" ")}
            >
              {/* FRONT */}
              <div className="absolute inset-0 [backface-visibility:hidden]">
                <div className="relative h-full">
                  <img
                    src={project.frontImg}
                    alt={project.frontAlt || project.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  <div className="absolute bottom-0 p-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-sky-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-sky-200">
                      {tag}
                    </span>

                    <h3 className="mt-3 font-display text-xl font-semibold text-white">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-white/80">{desc}</p>

                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
                      Tap to flip →
                    </div>
                  </div>
                </div>
              </div>

              {/* BACK */}
              <div className="absolute inset-0 [transform:rotateY(180deg)] [backface-visibility:hidden]">
                <div className="relative h-full">
                  <img
                    src={project.backImg}
                    alt={project.backAlt || `${project.title} in-car position`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                  <div className="absolute bottom-0 p-5">
                    <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-200">
                      In-car position
                    </span>

                    {/* ✅ Show bullets only if points exist */}
                    {points.length > 0 ? (
                      <>
                        <h4 className="mt-3 text-base font-semibold text-white">
                          What you’ll validate
                        </h4>
                        <ul className="mt-2 space-y-1 text-sm text-white/80">
                          {points.map((pt) => (
                            <li key={pt} className="flex gap-2">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/70" />
                              <span>{pt}</span>
                            </li>
                          ))}
                        </ul>
                      </>
                    ) : (
                      <p className="mt-3 text-sm text-white/85">
                        Flip back to view CAD model.
                      </p>
                    )}

                    <div className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-white/80">
                      ← Tap to go back
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* shine */}
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="absolute -left-24 top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
              <div className="absolute -right-24 bottom-10 h-40 w-40 rounded-full bg-sky-500/10 blur-2xl" />
            </div>
          </div>

          {/* Footer meta */}
          <div className="flex items-center justify-between gap-3 px-5 py-4 border-t border-slate-200 dark:border-slate-800">
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900 dark:text-white truncate">
                {project.short || project.title}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                {area}
              </p>
            </div>

            <span className="shrink-0 rounded-full bg-slate-100 dark:bg-slate-800 px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300">
              Project {project.no}
            </span>
          </div>
        </div>
      </button>
    </div>
  );
}

export default function ProjectsSection() {
  const projects = useMemo(
    () => [
      {
        no: "01",
        title: "Seat Recliner Cover",
        short: "Seat side trim cover",
        frontImg: p01Cad,
        backImg: p01Car,
        frontAlt: "Project 01 CAD model (Seat Recliner Cover)",
        backAlt: "Project 01 in-car position (Seat Recliner Cover)",
        // ✅ optional fields (you can remove safely)
        area: "Seat Trims",
        tag: "Seat Trims",
      },
      {
        no: "02",
        title: "Fuse Box Cover",
        short: "Dashboard Trim",
        frontImg: p02Cad,
        backImg: p02Car,
        area: "IP / Dashboard",
        tag: "Dashboard",
      },
      {
        no: "03",
        title: "Cup Holder",
        short: "Console Trim",
        frontImg: p03Cad,
        backImg: p03Car,
        area: "Center Console",
        tag: "Console",
      },
      {
        no: "04",
        title: "Central FACIA",
        short: "Dashboard Trim",
        frontImg: p04Cad,
        backImg: p04Car,
        area: "IP / Dashboard",
        tag: "Dashboard",
      },
      {
        no: "05",
        title: "Map Pocket",
        short: "Door storage pocket",
        frontImg: p05Cad,
        backImg: p05Car,
        area: "Door Trims",
        tag: "Door Trims",
      },
      {
        no: "06",
        title: "Armrest Design",
        short: "Door armrest zone",
        frontImg: p06Cad,
        backImg: p06Car,
        area: "Door Trims",
        tag: "Door Trims",
      },
      {
        no: "07",
        title: "B-Pillar Upper Trim",
        short: "Pillar trim",
        frontImg: p07Cad,
        backImg: p07Car,
        area: "Pillar Trims",
        tag: "Pillar Trims",
      },
      {
        no: "08",
        title: "Tailgate Inner Trim",
        short: "Tailgate inner panel",
        frontImg: p08Cad,
        backImg: p08Car,
        area: "Tailgate Trims",
        tag: "Tailgate",
      },
    ],
    []
  );

  return (
    <section id="projects" className="py-20 px-6 overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-widest text-slate-500 dark:text-slate-500 mb-4 block">
            Hands-On Experience
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight font-semibold mb-6">
            Projects You’ll Build
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            OEM-style automotive trim parts — CAD model + real in-car context
            (flip to view).
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <ProjectFlipCard key={p.no} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
