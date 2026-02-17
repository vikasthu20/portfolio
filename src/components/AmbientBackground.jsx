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
    <div className="relative min-h-screen bg-lightnavy dark:bg-navy transition-colors duration-500 overflow-hidden">
      {/* Glow Layer */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at var(--x, 50%) var(--y, 50%), rgba(100, 255, 218, 0.15), transparent 80%)`,
        }}
      />
      {children}
    </div>
  );
}