import LeftPanel from "./components/LeftPanel";
import Content from "./components/Content/Content";
import AmbientBackground from "./components/AmbientBackground";
import Footer from "./components/Footer";

export default function App() {
  return (
    <AmbientBackground>
      <div className="h-screen max-w-7xl mx-auto px-8 grid grid-cols-12 gap-12">
        
        {/* LEFT PANEL */}
        <LeftPanel />

        {/* RIGHT SCROLL AREA */}
        <div className="col-span-8 overflow-y-auto hide-scrollbar">
          <Content />
          <Footer />
        </div>

      </div>
    </AmbientBackground>
  );
}
