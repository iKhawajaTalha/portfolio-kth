import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink, FiArrowUpRight } from "react-icons/fi";
import data from "../data/portfolio";
import SpotlightCursor from "./ui/SpotlightCursor";

const gradients = [
  "from-accent/20 via-orange-900/20 to-dark-card",
  "from-blue-900/20 via-indigo-900/20 to-dark-card",
  "from-emerald-900/20 via-teal-900/20 to-dark-card",
  "from-purple-900/20 via-violet-900/20 to-dark-card",
];

export default function Portfolio() {
  const { title, categories, items } = data.portfolio;
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? items
      : items.filter((item) => item.category === activeCategory);

  return (
    <section id="portfolio" className="relative overflow-hidden">
      <div className="section-padding relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="section-title"
        >
          {title}
        </motion.h2>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mt-8 mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? "bg-accent text-white border-accent shadow-lg shadow-accent/20"
                  : "bg-dark-card text-gray-400 border-dark-lighter hover:border-accent/50 hover:text-accent"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid — 2 columns for symmetry */}
        <SpotlightCursor>
          <motion.div layout className="grid sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            <AnimatePresence mode="popLayout">
              {filtered.map((item, idx) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: idx * 0.08 }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="group relative overflow-hidden rounded-xl bg-dark-card border border-dark-lighter hover:border-accent/30 transition-all duration-300 block hover:shadow-xl hover:shadow-accent/5 flex flex-col"
                >
                  {/* Gradient header — uniform height, no placeholder images */}
                  <div className={`relative h-36 sm:h-40 bg-gradient-to-br ${gradients[idx % gradients.length]} flex items-center justify-center overflow-hidden`}>
                    {/* Subtle grid pattern */}
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                      }}
                    />
                    {/* Project number + name */}
                    <div className="relative text-center px-6">
                      <span className="text-accent/30 text-5xl sm:text-6xl font-bold absolute -top-3 left-1/2 -translate-x-1/2 select-none">
                        0{idx + 1}
                      </span>
                      <h4 className="relative text-white/90 text-lg sm:text-xl font-bold mt-6 leading-tight">
                        {item.title.split("—")[0].trim()}
                      </h4>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-accent/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-10 h-10 rounded-full bg-accent/20 backdrop-blur-sm flex items-center justify-center border border-accent/30">
                        <FiArrowUpRight className="text-accent text-lg" />
                      </div>
                    </div>
                    {/* Featured badge */}
                    {item.featured && (
                      <span className="absolute top-3 right-3 text-[9px] font-bold uppercase tracking-wider bg-accent/20 backdrop-blur-sm text-accent px-2.5 py-1 rounded-full border border-accent/20">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Card content — fixed structure for alignment */}
                  <div className="p-5 flex flex-col flex-1">
                    {/* Title */}
                    <h3 className="font-semibold text-white text-sm leading-snug mb-1.5 group-hover:text-accent transition-colors duration-300 min-h-[2.5rem] flex items-start">
                      {item.title}
                    </h3>

                    {/* Category */}
                    <span className="text-[11px] text-accent/70 font-medium uppercase tracking-wider">
                      {item.category}
                    </span>

                    {/* Description — consistent 3 lines */}
                    {item.description && (
                      <p className="text-[12px] text-gray-500 mt-2.5 leading-relaxed line-clamp-3 flex-1">
                        {item.description}
                      </p>
                    )}

                    {/* Tech tags — bottom aligned */}
                    {item.tech && (
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-dark-lighter">
                        {item.tech.slice(0, 5).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] text-gray-500 bg-dark-lighter/80 px-2 py-0.5 rounded"
                          >
                            {t}
                          </span>
                        ))}
                        {item.tech.length > 5 && (
                          <span className="text-[10px] text-gray-600 px-1 py-0.5">
                            +{item.tech.length - 5}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                </motion.a>
              ))}
            </AnimatePresence>
          </motion.div>
        </SpotlightCursor>
      </div>
    </section>
  );
}
