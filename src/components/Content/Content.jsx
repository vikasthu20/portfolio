import Section from "../Section";
import Introduction from "./Introduction";
import Experience from "./Experience";
import AnimatedImageGallery from './Gallery';
export default function Content() {
  return (
    <main className="lg:col-span-8 py-8 md:py-12 lg:py-24 space-y-12 md:space-y-20 lg:space-y-32 w-full overflow-x-hidden">
      <Section id="about">
        <Introduction />
      </Section>

      <Section id="experience">
        <Experience />
        {/* View Full Resume */}
        <div className="mt-6 w-full">
          <a
            href="/Vignesh_Kasthurisamy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-cyan-400/10 px-3 py-2 md:px-4 md:py-2 text-sm font-medium text-cyan-300 transition-all hover:bg-cyan-400/20 hover:text-cyan-200"
          >
            <span className="border-b border-transparent group-hover:border-cyan-300 transition-all">
              View Full Resume
            </span>
            <span className="translate-y-[-1px] transition-transform group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>
      </Section>

      <Section id="projects">
        <div className="space-y-4 text-slate-300 text-sm md:text-base w-full overflow-x-hidden">
          <p className="leading-relaxed break-words">
            Sony PlayStation (www.sonyinteractive.com) Website, Agathiyar Pyramid (www.agathiyarpyramid.org) Website, 
            AEGIS Mobile App (Available on iOS and Android), Cisco DNAC (www.cisco.com), ShopClues Adzone, 
            C1X product (https://c1exchange.com/) Website
          </p>
        </div>
      </Section>

      <Section id="gallery">
        <AnimatedImageGallery />
      </Section>
    </main>
  );
}
