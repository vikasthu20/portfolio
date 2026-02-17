import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("dark");

  // Load saved theme on first render
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);

    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);

    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle Theme"
      className="
        fixed top-4 right-4 z-50
        px-4 py-2
        rounded-full
        border border-slate-300 dark:border-slate-700
        dark:bg-slate-800/80
        backdrop-blur-lg
        text-sm font-semibold
        text-slate-800 dark:text-white
        shadow-lg
        transition-all duration-300
        hover:scale-105
        dark:hover:bg-slate-700
        active:scale-95
      "
    >
      {theme === "dark" ? "🌙 Dark" : "🌞 Light"}
    </button>
  );
}
