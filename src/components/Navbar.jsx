import React from "react";
import { DATA } from "./constants";

const { navigation } = DATA;

export default function Navbar() {
  const scrollTo = (id) => {
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
          className="group flex items-center gap-4 text-slate uppercase tracking-widest text-sm"
        >
          <span className="h-px w-8 bg-slate group-hover:w-16 group-hover:bg-accent transition-all"></span>
          <span className="group-hover:text-accent">{sec}</span>
        </button>
      ))}
    </nav>
  );
}
