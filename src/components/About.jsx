import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { FiBriefcase, FiCpu, FiBookOpen } from "react-icons/fi";
import data from "../data/portfolio";
import GridPattern from "./ui/GridPattern";

export default function About() {
  const { title, subtitle, image, bio, cvLink } = data.about;

  const highlights = [
    { icon: FiBriefcase, label: "ML Engineer at Scraperrs Lab" },
    { icon: FiCpu, label: "YOLO / Computer Vision Expert" },
    { icon: FiBookOpen, label: "BS CS — COMSATS University" },
  ];

  return (
    <section id="about" className="relative overflow-hidden">
      <GridPattern />

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

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-center mt-10">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-accent/10 via-transparent to-accent/5 blur-lg" />
              <div className="relative w-64 sm:w-72 lg:w-full max-w-xs rounded-2xl overflow-hidden border border-dark-lighter shadow-2xl shadow-black/30">
                <img
                  src={image}
                  alt="About me"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-dark to-transparent" />
              </div>
              <div className="absolute -bottom-2 -right-2 w-12 h-12 border-b-2 border-r-2 border-accent/30 rounded-br-xl" />
              <div className="absolute -top-2 -left-2 w-12 h-12 border-t-2 border-l-2 border-accent/30 rounded-tl-xl" />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="flex flex-wrap gap-3 mb-6">
              {highlights.map((h, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-dark-card border border-dark-lighter text-xs text-gray-300"
                >
                  <h.icon className="text-accent" size={13} />
                  {h.label}
                </span>
              ))}
            </div>

            <p className="text-gray-400 leading-relaxed text-sm sm:text-[15px] mb-8">
              {bio}
            </p>

            <a href={cvLink} className="btn-primary">
              <FaDownload size={14} />
              Download CV
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
