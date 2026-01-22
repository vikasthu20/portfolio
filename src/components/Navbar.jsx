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
          className={`group flex items-center gap-4 uppercase tracking-widest text-sm transition-all ${
            activeSection === sec ? "text-accent" : "text-slate"
          }`}
        >
          <span
            className={`h-px transition-all ${
              activeSection === sec
                ? "w-16 bg-accent"
                : "w-8 bg-slate group-hover:w-16 group-hover:bg-accent"
            }`}
          ></span>
          <span className={activeSection === sec ? "" : "group-hover:text-accent"}>
            {sec}
          </span>
        </button>
      ))}
    </nav>
  );
}