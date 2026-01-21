import Section from "../Section";
import About from "./About";
import Experience from "./Experience";
import AnimatedImageGallery from './Gallery';
export default function Content() {
  return (
    <main className="col-span-8 py-24 space-y-32">
      <Section id="about">
        <About />
      </Section>

      <Section id="experience">
        <Experience />
        {/* View Full Resume */}
        <div className="ml-6">
          <a
            href="/Vignesh_Kasthurisamy_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-md bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300 transition-all hover:bg-cyan-400/20 hover:text-cyan-200"
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
        <p>
          Sony PlayStation(www.sonyinteractive.com) Website, Agathiyar Pyramid(www.agathiyarpyramid.org) Website, AEGIS Mobile App(Available on ios and android), Cisco DNAC(www.cisco.com), ShopClues Adzone, C1X product(https://c1exchange.com/) Website
        </p>
      </Section>

      <Section id="gallery">
        <AnimatedImageGallery />
      </Section>
    </main>
  );
}
