import { motion, useScroll, useSpring } from "framer-motion";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Skills from "./components/Skills";
import TechMarquee from "./components/TechMarquee";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accent via-orange-400 to-accent origin-left z-[60]"
    />
  );
}

function SectionDivider() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="h-px bg-gradient-to-r from-transparent via-dark-lighter to-transparent" />
    </div>
  );
}

export default function App() {
  return (
    <div className="bg-dark min-h-screen">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <SectionDivider />
      <Services />
      <SectionDivider />
      <About />
      <TechMarquee />
      <Skills />
      <SectionDivider />
      <Portfolio />
      <SectionDivider />
      <Contact />
      <Footer />
    </div>
  );
}
