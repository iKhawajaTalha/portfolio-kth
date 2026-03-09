import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import data from "../data/portfolio";

function CircularProgress({ icon: Icon, name, percentage, delay = 0 }) {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let current = 0;
          const step = percentage / (1400 / 16);
          const timer = setInterval(() => {
            current += step;
            if (current >= percentage) {
              setProgress(percentage);
              clearInterval(timer);
            } else {
              setProgress(Math.floor(current));
            }
          }, 16);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [percentage, hasAnimated]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center group"
    >
      <div className="relative w-28 h-28 sm:w-32 sm:h-32">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 120 120">
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="#1a1a1a"
            strokeWidth="6"
          />
          <circle
            cx="60"
            cy="60"
            r={radius}
            fill="none"
            stroke="url(#orangeGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-75"
          />
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <Icon className="text-xl text-gray-400 mb-1 group-hover:text-accent transition-colors duration-300" />
          <span className="text-accent font-bold text-base">{progress}%</span>
        </div>
      </div>
      <p className="text-gray-400 text-xs sm:text-sm mt-3 font-medium group-hover:text-white transition-colors duration-300">
        {name}
      </p>
    </motion.div>
  );
}

export default function Skills() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-padding relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-subtitle"
        >
          Core technologies and tools I work with daily
        </motion.p>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 mt-4">
          {data.skills.map((skill, i) => (
            <CircularProgress key={i} {...skill} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
