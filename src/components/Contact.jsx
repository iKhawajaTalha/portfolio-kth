import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiChevronDown } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import data from "../data/portfolio";
import GridPattern from "./ui/GridPattern";

export default function Contact() {
  const { title, subtitle, email, phone, location, serviceOptions } =
    data.contact;

  const whatsappNumber = phone.replace(/[^0-9]/g, "");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    timeline: "",
    details: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      errs.email = "Invalid email format";
    if (!form.details.trim()) errs.details = "Please describe your project";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      alert("Message sent successfully! (Connect a backend to actually send)");
      setForm({ name: "", email: "", phone: "", service: "", timeline: "", details: "" });
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const inputClass = (field) =>
    `w-full bg-dark/50 border ${
      errors[field] ? "border-red-500/50" : "border-dark-lighter"
    } rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300`;

  const contactCards = [
    {
      icon: FiMail,
      label: "Email",
      value: email,
      href: `mailto:${email}`,
      color: "from-orange-500/20 to-orange-600/5",
    },
    {
      icon: FiPhone,
      label: "Phone",
      value: phone,
      href: `tel:${phone}`,
      color: "from-blue-500/20 to-blue-600/5",
    },
    {
      icon: FaWhatsapp,
      label: "WhatsApp",
      value: phone,
      href: `https://wa.me/${whatsappNumber}`,
      color: "from-green-500/20 to-green-600/5",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: location,
      href: null,
      color: "from-purple-500/20 to-purple-600/5",
    },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
      <GridPattern />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-accent/[0.02] rounded-full blur-[120px]" />

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

        {/* Contact cards row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-4xl mx-auto mb-10"
        >
          {contactCards.map((info, i) => {
            const Wrapper = info.href ? "a" : "div";
            return (
              <Wrapper
                key={i}
                {...(info.href
                  ? { href: info.href, target: info.href.startsWith("http") ? "_blank" : undefined, rel: "noopener noreferrer" }
                  : {})}
                className="relative overflow-hidden rounded-xl bg-dark-card border border-dark-lighter p-4 sm:p-5 group hover:border-accent/20 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5"
              >
                {/* Gradient accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${info.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-3 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <info.icon size={18} />
                  </div>
                  <p className="text-gray-500 text-[11px] uppercase tracking-wider mb-0.5">
                    {info.label}
                  </p>
                  <p className="text-gray-300 text-xs sm:text-sm font-medium truncate">
                    {info.value}
                  </p>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto bg-dark-card/80 backdrop-blur-sm border border-dark-lighter rounded-2xl p-6 sm:p-8 relative overflow-hidden"
        >
          {/* Top accent line */}
          <div className="absolute top-0 inset-x-0 h-[2px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />

          <h3 className="text-white font-semibold text-base mb-6">Send a Message</h3>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className={inputClass("name")}
              />
              {errors.name && (
                <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>
              )}
            </div>
            <div>
              <input
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                className={inputClass("email")}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>
              )}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="Phone Number"
              className={inputClass("phone")}
            />
            <div className="relative">
              <select
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`${inputClass("service")} appearance-none pr-10`}
              >
                <option value="" disabled>
                  Service Of Interest
                </option>
                {serviceOptions.map((opt) => (
                  <option key={opt} value={opt} className="bg-dark-card">
                    {opt}
                  </option>
                ))}
              </select>
              <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" size={16} />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <input
              name="timeline"
              value={form.timeline}
              onChange={handleChange}
              placeholder="Timeline (e.g. 2 weeks)"
              className={inputClass("timeline")}
            />
            <div>
              <textarea
                name="details"
                value={form.details}
                onChange={handleChange}
                placeholder="Tell me about your project..."
                rows={4}
                className={`${inputClass("details")} resize-none`}
              />
              {errors.details && (
                <p className="text-red-400 text-xs mt-1.5">{errors.details}</p>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between mt-6 pt-5 border-t border-dark-lighter">
            <p className="text-gray-600 text-xs hidden sm:block">
              I typically respond within 24 hours
            </p>
            <button
              type="submit"
              className="btn-primary group ml-auto"
            >
              <FiSend size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
              Send Message
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
