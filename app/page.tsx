import NavBar from "./components/nav-bar";
import Hero from "./components/hero";
import About from "./components/about";
import Education from "./components/education";
import TechnicalCompetencies from "./components/technical-competencies";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Contact from "./components/contact";

const SectionSeparator = () => (
  <div className="w-full py-8">
    <svg
      className="w-full h-8"
      preserveAspectRatio="none"
      viewBox="0 0 1200 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 16 C 100 14, 200 18, 400 16 S 800 14, 1000 16 S 1100 18, 1190 16"
        stroke="#9CA3AF"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  </div>
);

export default function Home() {
  return (
    <main className="grid-paper min-h-screen w-full">
      <NavBar />
      <Hero />
      <SectionSeparator />
      <About />
      <SectionSeparator />
      <Education />
      <SectionSeparator />
      <TechnicalCompetencies />
      <SectionSeparator />
      <Experience />
      <SectionSeparator />
      <Projects />
      <SectionSeparator />
      <Contact />

      <footer className="border-t border-white/30 py-8 mt-20 relative z-10 bg-white/60 backdrop-blur-xl shadow-xl shadow-black/5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          <span className="text-gray-700 raleway">Joshua Gonzales</span>
          <span className="text-gray-700 raleway mt-2 md:mt-0">© 2026 </span>
        </div>
      </footer>
    </main>
  );
}
