import { useEffect } from "react";

export default function AmbientBackground({ children }) {
  useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty(
        "--x",
        `${e.clientX}px`
      );
      document.documentElement.style.setProperty(
        "--y",
        `${e.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="relative min-h-screen bg-navy dark:bg-lightnavy transition-colors duration-500 overflow-hidden">
      {/* Glow Layer */}
      <div className="pointer-events-none absolute inset-0 bg-glow" />
      {children}
    </div>
  );
}
