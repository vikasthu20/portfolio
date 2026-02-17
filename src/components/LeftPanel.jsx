import SocialLinks from "./SocialLinks";
import Navbar from "./Navbar";
import About from "./About";

export default function LeftPanel() {
  return (
    <aside className="lg:col-span-4 lg:sticky lg:top-0 lg:h-screen lg:overflow-y-auto scrollbar-hide flex flex-col lg:justify-between py-8 md:py-12 lg:py-24 border-b lg:border-b-0 border-slate-700/50 lg:border-0">
      <div>
        <About />
        <Navbar />
      </div>

      <div className="flex gap-6 text-slate-600 dark:text-slate-400 mt-8 lg:mt-0">
        <i className="ri-github-fill hover:text-teal-400 transition-colors cursor-pointer text-xl md:text-2xl"></i>
        <i className="ri-linkedin-fill hover:text-teal-400 transition-colors cursor-pointer text-xl md:text-2xl"></i>
        <i className="ri-instagram-line hover:text-teal-400 transition-colors cursor-pointer text-xl md:text-2xl"></i>
      </div>

      <div className="mt-6 lg:mt-12">
        <SocialLinks />
      </div>
    </aside>
  );
}
