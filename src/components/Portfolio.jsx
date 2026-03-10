import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiExternalLink } from "react-icons/fi";
import data from "../data/portfolio";
import SpotlightCursor from "./ui/SpotlightCursor";

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

        {/* Grid */}
        <SpotlightCursor>
          <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.a
                  key={item.title}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.35 }}
                  whileHover={{ y: -5, transition: { duration: 0.25 } }}
                  className="group relative overflow-hidden rounded-xl bg-dark-card border border-dark-lighter hover:border-accent/30 transition-all duration-300 block hover:shadow-xl hover:shadow-accent/5"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-accent/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                        <FiExternalLink className="text-white text-lg" />
                      </div>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex items-center gap-2 mb-1.5">
                      <h3 className="font-semibold text-white text-sm sm:text-base group-hover:text-accent transition-colors duration-300">
                        {item.title}
                      </h3>
                      {item.featured && (
                        <span className="text-[9px] font-bold uppercase tracking-wider bg-accent/20 text-accent px-2 py-0.5 rounded-full shrink-0">
                          Featured
                        </span>
                      )}
                    </div>
                    <span className="text-[11px] text-accent/80 font-medium uppercase tracking-wider">
                      {item.category}
                    </span>
                    {item.description && (
                      <p className={`text-xs text-gray-500 mt-2 leading-relaxed ${item.featured ? "line-clamp-4" : "line-clamp-2"}`}>
                        {item.description}
                      </p>
                    )}
                    {item.tech && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[10px] text-gray-500 bg-dark-lighter px-2 py-0.5 rounded-md"
                          >
                            {t}
                          </span>
                        ))}
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
