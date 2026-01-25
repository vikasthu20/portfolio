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
        px-3 py-2 sm:px-4 sm:py-2
        rounded-full
        border border-white/20
        bg-white/10
        backdrop-blur-md
        text-sm font-medium
        transition-all duration-300
        hover:scale-105 active:scale-95 text-lightSlate
        dark:bg-black dark:border-gray-700 dark:text-white
      "
    >
      {theme === "dark" ? "🌙 Dark":  "🌞 Light" }
    </button>
  );
}
