import { motion } from "framer-motion";
import data from "../data/portfolio";
import SpotlightCursor from "./ui/SpotlightCursor";
import GlowCard from "./ui/GlowCard";

export default function Services() {
  const { title, subtitle, items } = data.services;

  return (
    <section id="services" className="relative overflow-hidden">
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
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {items.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <GlowCard>
                  <div className="bg-dark-card border border-dark-lighter rounded-xl p-7 group hover:border-accent/30 transition-all duration-300 h-full relative overflow-hidden">
                    {/* Top accent line */}
                    <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-xl mb-5 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                      <service.icon />
                    </div>
                    <h3 className="text-base font-semibold mb-2 group-hover:text-accent transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
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
