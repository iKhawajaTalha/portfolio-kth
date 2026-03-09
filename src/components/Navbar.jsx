import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import data from "../data/portfolio";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/70 backdrop-blur-xl shadow-lg shadow-black/10 border-b border-white/[0.03]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-[72px]">
        {/* Logo */}
        <Link
          to="hero"
          smooth
          duration={600}
          className="font-bold text-xl cursor-pointer tracking-wider group"
        >
          <span className="text-accent">K</span>
          <span className="text-white group-hover:text-accent transition-colors duration-300">TH</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-1">
          {data.navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={600}
                activeClass="!text-accent bg-accent/5"
                className="text-gray-400 hover:text-accent px-3 py-2 rounded-lg transition-all cursor-pointer text-[13px] font-medium"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hire Me Button (Desktop) */}
        <Link
          to="contact"
          smooth
          offset={-80}
          duration={600}
          className="hidden md:inline-block bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-accent/20"
        >
          Hire Me
        </Link>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-white text-2xl relative z-50"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm md:hidden z-40"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 h-full w-72 bg-dark-card border-l border-dark-lighter md:hidden z-40 flex flex-col"
            >
              <div className="pt-20 px-6 flex-1">
                <ul className="flex flex-col gap-1">
                  {data.navLinks.map((link) => (
                    <li key={link.to}>
                      <Link
                        to={link.to}
                        spy
                        smooth
                        offset={-80}
                        duration={600}
                        activeClass="!text-accent !bg-accent/10"
                        className="text-gray-300 hover:text-accent hover:bg-accent/5 px-4 py-3 rounded-lg transition-all cursor-pointer text-base font-medium block"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
                <div className="mt-6 px-4">
                  <Link
                    to="contact"
                    smooth
                    offset={-80}
                    duration={600}
                    className="btn-primary text-sm cursor-pointer w-full justify-center"
                    onClick={() => setMobileOpen(false)}
                  >
                    Hire Me
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
}
