import { useEffect, useRef } from "react";

export default function Contact() {
  const ref = useRef(null);

  // Simple fade-up animation on scroll (no library)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("animate-in");
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="contact-section opacity-0 translate-y-8 transition-all duration-700 ease-out"
    >
      <div
        className="
          relative overflow-hidden rounded-2xl
          border border-white/20
          bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-cyan-900/20
          p-6 sm:p-8 md:p-10 dark:bg-gray/10 dark:border-gray-700
        "
      >
        {/* Glow */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />

        <div className="relative space-y-4">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-slate-100">
            Let’s work together
          </h2>

          <p className="text-sm sm:text-base text-slate-400 max-w-xl">
            I’m always interested in discussing new opportunities, challenging
            problems, or building meaningful digital experiences.
          </p>

          {/* Email */}
          <a
            href="mailto:vikasthu20@gmail.com"
            className="
              inline-flex items-center gap-3
              rounded-lg border border-cyan-400/30
              bg-cyan-400/10 px-4 py-3
              text-sm sm:text-base font-medium text-cyan-300
              transition-all
              hover:bg-cyan-400/20 hover:border-cyan-400/60
              hover:translate-y-[-2px]
            "
          >
            <span className="text-lg">✉</span>
            vikasthu20@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
