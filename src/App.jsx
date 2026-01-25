import LeftPanel from "./components/LeftPanel";
import Content from "./components/Content/Content";
import AmbientBackground from "./components/AmbientBackground";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";

export default function App() {
  return (
    <AmbientBackground>
      {/* Desktop: Two-column layout | Mobile: Single column stacked */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 overflow-x-hidden">
        
        {/* Desktop: Grid layout with fixed height | Mobile: Flex column auto height */}
        <div className="lg:grid lg:grid-cols-12 lg:gap-12 lg:h-screen flex flex-col">
          <ThemeToggle />
          
          {/* LEFT PANEL - Desktop: Sticky sidebar | Mobile: Top section */}
          <LeftPanel />

          {/* RIGHT CONTENT - Desktop: Scrollable | Mobile: Continues below */}
          <div className="lg:col-span-8 lg:overflow-y-auto lg:h-screen scrollbar-hide w-full overflow-x-hidden">
            <Content />
            <Footer />
          </div>
        </div>

      </div>
    </AmbientBackground>
  );
}
