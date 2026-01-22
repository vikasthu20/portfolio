import SocialLinks from "./SocialLinks";
import Navbar from "./Navbar";
import About from "./About";

export default function LeftPanel() {
  return (
    <aside className="col-span-4 sticky top-0 h-screen flex flex-col justify-between py-24">
      <div>
        <About />
        <Navbar />
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
