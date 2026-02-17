export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 transition-all duration-500"
    >
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">
        {title}
      </h2>
      <div className="text-slate-700 dark:text-slate-400 leading-relaxed">
        {children}
      </div>
    </section>
  );
}
