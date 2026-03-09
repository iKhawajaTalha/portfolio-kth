import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiSend, FiChevronDown } from "react-icons/fi";
import data from "../data/portfolio";

export default function Contact() {
  const { title, subtitle, email, phone, location, serviceOptions } =
    data.contact;

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
    `w-full bg-dark border ${
      errors[field] ? "border-red-500/50" : "border-dark-lighter"
    } rounded-lg px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/20 transition-all duration-300`;

  const contactInfo = [
    { icon: FiMail, label: "Email", value: email, href: `mailto:${email}` },
    { icon: FiPhone, label: "Phone", value: phone, href: `tel:${phone}` },
    { icon: FiMapPin, label: "Location", value: location, href: null },
  ];

  return (
    <section id="contact" className="relative overflow-hidden">
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

        <div className="grid lg:grid-cols-5 gap-10 mt-10 max-w-5xl mx-auto">
          {/* Contact Info Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2 space-y-5"
          >
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Have a project in mind or want to discuss opportunities? Feel free to reach out through the form or contact me directly.
            </p>

            {contactInfo.map((info, i) => {
              const Wrapper = info.href ? "a" : "div";
              return (
                <Wrapper
                  key={i}
                  {...(info.href ? { href: info.href } : {})}
                  className="flex items-center gap-4 p-4 rounded-xl bg-dark-card border border-dark-lighter hover:border-accent/20 transition-all duration-300 group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <info.icon size={18} />
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{info.label}</p>
                    <p className="text-gray-300 text-sm font-medium">{info.value}</p>
                  </div>
                </Wrapper>
              );
            })}
          </motion.div>

          {/* Form Column */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="lg:col-span-3 bg-dark-card border border-dark-lighter rounded-2xl p-6 sm:p-8"
          >
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <div>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Name"
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
                  placeholder="Email"
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
                <FiChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none" />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              <input
                name="timeline"
                value={form.timeline}
                onChange={handleChange}
                placeholder="Timeline"
                className={inputClass("timeline")}
              />
              <div>
                <textarea
                  name="details"
                  value={form.details}
                  onChange={handleChange}
                  placeholder="Project Details..."
                  rows={4}
                  className={`${inputClass("details")} resize-none`}
                />
                {errors.details && (
                  <p className="text-red-400 text-xs mt-1.5">{errors.details}</p>
                )}
              </div>
            </div>

            <div className="flex justify-end mt-5">
              <button
                type="submit"
                className="btn-primary group"
              >
                <FiSend size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                Send Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
