import SocialLinks from "./SocialLinks";


const sections = ["about", "experience", "projects"];

export default function LeftPanel() {
  const scrollTo = (id) => {
    document.getElementById(id).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <aside className="col-span-4 sticky top-0 h-screen flex flex-col justify-between py-24">
      <div>
        <h1 className="text-4xl font-bold">VIGNESH KASTHURISAMY</h1>
        <p className="mt-2 text-xl text-slate">Full Stack Developer</p>
        <p className="mt-4 max-w-sm text-slate">
          I’m a full-stack developer building robust web applications across frontend and backend with modern technologies.
        </p>

        <nav className="mt-16 space-y-6">
          {sections.map((sec) => (
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
      </div>

      <div className="flex gap-6 text-slate">
        <i className="ri-github-fill hover:text-accent"></i>
        <i className="ri-linkedin-fill hover:text-accent"></i>
        <i className="ri-instagram-line hover:text-accent"></i>
      </div>
      <div className="mt-12">
        <SocialLinks />
      </div>
    </aside>
  );
}
