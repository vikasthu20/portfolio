export default function Section({ id, title, children }) {
  return (
    <section
      id={id}
      className="scroll-mt-24 transition-all duration-500"
    >
      <h2 className="text-2xl font-semibold text-lightSlate">
        {title}
      </h2>
      <div className="text-slate leading-relaxed">
        {children}
      </div>
    </section>
  );
}
