import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaDownload } from "react-icons/fa";
import data from "../data/portfolio";

function useCountUp(target, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    let current = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [target, duration, started]);

  return [count, () => setStarted(true)];
}

function TypewriterText({ texts, speed = 100, pause = 2000 }) {
  const [displayText, setDisplayText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let timeout;

    if (!isDeleting && charIndex < currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      }, speed);
    } else if (!isDeleting && charIndex === currentText.length) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      }, speed / 2);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts, speed, pause]);

  return (
    <span>
      {displayText}
      <span className="animate-pulse text-accent">|</span>
    </span>
  );
}

function StatItem({ value, suffix, label }) {
  const ref = useRef(null);
  const [count, start] = useCountUp(value, 1800);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          start();
          setHasStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted, start]);

  return (
    <div ref={ref} className="text-center px-3 sm:px-6 py-3">
      <p className="text-2xl sm:text-3xl font-bold text-accent">
        {count}
        {suffix}
      </p>
      <p className="text-gray-500 text-xs sm:text-sm mt-1 whitespace-nowrap">{label}</p>
    </div>
  );
}

export default function Hero() {
  const { hero, social } = data;

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/[0.03] rounded-full blur-[100px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/[0.02] rounded-full blur-[150px]" />

      <div className="section-padding relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >
            <motion.p
              variants={itemVariants}
              className="text-gray-500 text-sm sm:text-base tracking-wider uppercase"
            >
              {hero.greeting}
            </motion.p>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-[3.25rem] font-bold mt-2 mb-3 leading-tight"
            >
              {hero.name}
            </motion.h2>

            <motion.h1
              variants={itemVariants}
              className="text-xl sm:text-2xl lg:text-3xl font-semibold text-accent mb-5 min-h-[2rem] sm:min-h-[2.5rem]"
            >
              <TypewriterText texts={hero.titles} />
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-gray-400 text-sm sm:text-base max-w-md mb-6 leading-relaxed"
            >
              {hero.bio}
            </motion.p>

            {/* Social icons */}
            <motion.div variants={itemVariants} className="flex gap-3 mb-8">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-700 bg-dark-card/50 flex items-center justify-center text-gray-400 hover:text-accent hover:border-accent hover:bg-accent/10 transition-all duration-300"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </motion.div>

            {/* Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
              <Link
                to="contact"
                smooth
                offset={-80}
                duration={600}
                className="btn-primary cursor-pointer"
              >
                Hire Me
              </Link>
              <a href={hero.cvLink} className="btn-outline">
                <FaDownload size={14} />
                Download CV
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="inline-flex rounded-2xl bg-dark-card/60 border border-dark-lighter backdrop-blur-sm divide-x divide-dark-lighter"
            >
              {hero.stats.map((stat, i) => (
                <StatItem key={i} {...stat} />
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              {/* Outer glow ring */}
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-b from-accent/20 via-accent/5 to-transparent blur-xl" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Image container — rounded rectangle for half-body portrait */}
                <div className="w-64 sm:w-72 lg:w-80 aspect-[3/4] rounded-[2rem] overflow-hidden relative bg-dark-card border border-dark-lighter shadow-2xl shadow-black/40">
                  <img
                    src={hero.profileImage}
                    alt={hero.name}
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Bottom gradient fade into dark */}
                  <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-dark-card/90 to-transparent" />
                </div>

                {/* Decorative accent corner */}
                <div className="absolute -bottom-2 -right-2 w-16 h-16 border-b-2 border-r-2 border-accent/40 rounded-br-[2rem]" />
                <div className="absolute -top-2 -left-2 w-16 h-16 border-t-2 border-l-2 border-accent/40 rounded-tl-[2rem]" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
