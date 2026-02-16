import { useState, useRef } from "react";

import { DATA } from "../../components/constants";

export default function Projects() {
  const { projects } = DATA;
  const [index, setIndex] = useState(0);
  const startX = useRef(0);

  const prev = () => setIndex((i) => (i === 0 ? projects.length - 1 : i - 1));

  const next = () => setIndex((i) => (i === projects.length - 1 ? 0 : i + 1));

  const onTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    const diff = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 50) return;
    diff > 0 ? next() : prev();
  };

  const currentProject = projects[index];

  return (
    <div className="relative w-full">
      {/* CONTAINER WITH ARROWS OUTSIDE */}
      <div className="relative flex items-center gap-3 sm:gap-4 md:gap-6">
        {/* LEFT ARROW - OUTSIDE */}
        <button
          onClick={prev}
          className="flex-shrink-0 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md
                     text-white p-2 sm:p-3 md:p-4 rounded-full transition-all
                     shadow-2xl 
                     hover:scale-110 z-10"
          aria-label="Previous project"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        {/* MAIN CAROUSEL CONTAINER WITH BORDER */}
        <div className="flex-1 overflow-hidden rounded-xl bg-slate-900/40">
          {/* IMAGE CAROUSEL */}
          <div
            className="relative overflow-hidden"
            onTouchStart={onTouchStart}
            onTouchEnd={onTouchEnd}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {projects.map((project, i) => (
                <div key={i} className="min-w-full">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full object-contain bg-slate-950 h-48 sm:h-56 md:h-72 lg:h-96"
                  />
                </div>
              ))}
            </div>

            {/* DOTS INDICATOR */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
              {projects.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIndex(i)}
                  className={`h-3 rounded-full transition-all ${
                    index === i
                      ? "bg-cyan-400 w-8 shadow-[0_0_8px_rgba(34,211,238,0.8)]"
                      : "bg-black w-3 hover:bg-black"
                  }`}
                  aria-label={`Go to project ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* PROJECT DETAILS (INSIDE SAME CONTAINER) */}
          <div className="p-4 sm:p-6 space-y-3">
            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-100">
              {currentProject.title}
            </h3>

            <p className="text-sm sm:text-base text-slate-400">
              {currentProject.description}
            </p>

            {currentProject.link ? (
              <a
                href={currentProject.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm text-cyan-400 hover:text-cyan-300 hover:underline transition-colors"
              >
                View Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            ) : (
              <span className="inline-flex items-center gap-1 text-sm text-slate-600 cursor-not-allowed">
                View Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </span>
            )}
            {currentProject.partnerLink && (
              <>
                <span className="text-slate-500">. </span>
                <a
                  href={currentProject.partnerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-400 transition-colors inline-flex items-center gap-1"
                >
                  <span className="hover:underline">Website</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </>
            )}
          </div>
        </div>

        {/* RIGHT ARROW - OUTSIDE */}
        <button
          onClick={next}
          className="flex-shrink-0 bg-slate-900/90 hover:bg-slate-800 backdrop-blur-md
                     text-white p-2 sm:p-3 md:p-4 rounded-full transition-all
                     shadow-2xl 
                     hover:scale-110 z-10"
          aria-label="Next project"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
