import React, { useState } from "react";
import { DATA } from "./constants";

const { navigation } = DATA;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState(navigation[0]);

  const scrollTo = (id) => {
    setActiveSection(id);
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <nav className="mt-16 space-y-6">
      {navigation.map((sec) => (
        <button
          key={sec}
          onClick={() => scrollTo(sec)}
          className={`group flex items-center gap-4 uppercase tracking-widest text-sm transition-all ${activeSection === sec ? "text-cyan-600 dark:text-cyan-400" : "text-slate-600 dark:text-slate-400"
            }`}
        >
          <span
            className={`h-px transition-all ${activeSection === sec
              ? "w-16 bg-cyan-600 dark:bg-cyan-400"
              : "w-8 bg-slate-400 group-hover:w-16 group-hover:bg-cyan-600 dark:group-hover:bg-cyan-400"
              }`}
          ></span>
          <span className={activeSection === sec ? "" : "group-hover:text-cyan-600 dark:group-hover:text-cyan-400"}>
            {sec}
          </span>
        </button>
      ))}
    </nav>
  );
}