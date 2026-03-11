import { motion } from "framer-motion";
import data from "../data/portfolio";
import SpotlightCursor from "./ui/SpotlightCursor";
import GlowCard from "./ui/GlowCard";
import GridPattern from "./ui/GridPattern";

const cardAccents = [
  "from-orange-500 to-amber-500",
  "from-violet-500 to-purple-500",
  "from-cyan-500 to-blue-500",
  "from-emerald-500 to-green-500",
  "from-rose-500 to-pink-500",
  "from-yellow-500 to-orange-400",
];

export default function Services() {
  const { title, subtitle, items } = data.services;

  return (
    <section id="services" className="relative overflow-hidden">
      <GridPattern />

      <div className="section-padding relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-4"
        >
          <span className="inline-block text-accent text-xs font-semibold tracking-[0.25em] uppercase mb-3">
            What I Do
          </span>
          <h2 className="section-title !mb-0">{title}</h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="section-subtitle"
        >
          {subtitle}
        </motion.p>

        <SpotlightCursor>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-2">
            {items.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
              >
                <GlowCard>
                  <div className="relative bg-dark-card border border-dark-lighter rounded-2xl p-6 sm:p-7 group hover:border-accent/20 transition-all duration-500 h-full overflow-hidden">
                    {/* Top gradient accent bar */}
                    <div
                      className={`absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r ${cardAccents[i % cardAccents.length]} opacity-0 group-hover:opacity-80 transition-all duration-500`}
                    />

                    {/* Background glow on hover */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-accent/[0.03] blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                    {/* Number watermark */}
                    <span className="absolute top-3 right-4 text-[4rem] font-bold leading-none text-white/[0.02] group-hover:text-white/[0.04] transition-colors duration-500 select-none pointer-events-none">
                      {String(i + 1).padStart(2, "0")}
                    </span>

                    <div className="relative">
                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl mb-4 group-hover:bg-accent group-hover:text-white group-hover:shadow-lg group-hover:shadow-accent/20 transition-all duration-300">
                        <service.icon />
                      </div>

                      {/* Tagline */}
                      {service.tagline && (
                        <p className="text-accent/60 text-[11px] font-medium tracking-wider uppercase mb-1.5">
                          {service.tagline}
                        </p>
                      )}

                      {/* Title */}
                      <h3 className="text-[15px] font-semibold text-white mb-2.5 group-hover:text-accent transition-colors duration-300">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-500 text-[13px] leading-[1.7] mb-4">
                        {service.description}
                      </p>

                      {/* Highlight tags */}
                      {service.highlights && (
                        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-dark-lighter">
                          {service.highlights.map((tag, j) => (
                            <span
                              key={j}
                              className="px-2.5 py-1 rounded-md bg-white/[0.03] border border-white/[0.05] text-gray-500 text-[10px] font-medium tracking-wide group-hover:border-accent/15 group-hover:text-gray-400 transition-all duration-300"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </GlowCard>
              </motion.div>
            ))}
          </div>
        </SpotlightCursor>
      </div>
    </section>
  );
}
