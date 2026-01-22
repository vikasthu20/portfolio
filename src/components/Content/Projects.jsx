import { useState, useRef } from "react";

const projects = [
  {
    title: "PlayStation Digital Products Website",
    description:
      "Enterprise-scale web platform for managing and showcasing PlayStation digital products, built with a focus on performance, scalability, and seamless user experience.",
    image: "/images/projects/playstation-vega.png",
  },
  {
    title: "PlayStation Finance Management Website",
    description:
      "Internal finance management platform for PlayStation, providing dashboards, reporting, and data-driven insights to support business operations.",
    image: "/images/projects/playstation-fma.png",
  },
  {
    title: "Agathiyar Pyramid",
    description:
      "Public-facing website for a spiritual organization, featuring events, media galleries, and content management for community engagement.",
    image: "/images/projects/agathiyar.png",
    link: "https://www.agathiyarpyramid.org",
  },
  {
    title: "AEGIS Mobile App",
    description:
      "Cross-platform mobile application delivering a consistent and intuitive experience across iOS and Android devices.",
    image: "/images/projects/aegis.png",
  },
  {
    title: "Cisco DNAC",
    description:
      "Enterprise network automation and analytics platform enabling visibility, control, and optimization of large-scale network infrastructures.",
    image: "/images/projects/cisco.png",
    link: "https://www.cisco.com",
  },
];


export default function Projects() {
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

  return (
    <div
      className="relative w-full overflow-hidden rounded-xl
                 border-slate-700/50 bg-slate-900/40"
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      {/* SLIDES */}
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {projects.map((project, i) => (
          <div key={i} className="min-w-full">
            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover
                         h-48 sm:h-56 md:h-72 lg:h-96"
            />

            <div className="p-4 sm:p-6 space-y-2">
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-slate-100">
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-400">
                {project.description}
              </p>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-sm text-cyan-400 hover:underline"
                >
                  View Project ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* ARROWS (tablet & desktop) */}
      <button
        onClick={prev}
        className="hidden sm:flex absolute left-3 top-1/2 -translate-y-1/2
                   bg-slate-900/70 hover:bg-slate-800
                   text-white p-2 rounded-full transition"
      >
        ←
      </button>

      <button
        onClick={next}
        className="hidden sm:flex absolute right-3 top-1/2 -translate-y-1/2
                   bg-slate-900/70 hover:bg-slate-800
                   text-white p-2 rounded-full transition"
      >
        →
      </button>

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 rounded-full transition-all ${
              index === i ? "bg-cyan-400 w-4" : "bg-slate-500 w-2"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
