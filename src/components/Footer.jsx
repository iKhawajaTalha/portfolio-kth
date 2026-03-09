import { Link } from "react-scroll";
import { FiMail, FiArrowUp } from "react-icons/fi";
import data from "../data/portfolio";

export default function Footer() {
  const { footer, navLinks, social, contact } = data;

  return (
    <footer className="relative border-t border-dark-lighter">
      {/* Subtle top gradient */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid sm:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link
              to="hero"
              smooth
              duration={600}
              className="font-bold text-2xl cursor-pointer inline-block mb-3"
            >
              <span className="text-accent">K</span>
              <span className="text-white">TH</span>
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    smooth
                    offset={-80}
                    duration={600}
                    className="text-gray-500 hover:text-accent transition-colors cursor-pointer text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              {social.map((s, i) => (
                <a
                  key={i}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-dark-card border border-dark-lighter flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/30 transition-all duration-300"
                >
                  <s.icon size={15} />
                </a>
              ))}
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <FiMail size={14} />
              <span>{contact.email}</span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-dark-lighter">
          <p className="text-gray-600 text-xs">
            {footer.copyright}
          </p>
          <Link
            to="hero"
            smooth
            duration={800}
            className="w-9 h-9 rounded-lg bg-dark-card border border-dark-lighter flex items-center justify-center text-gray-500 hover:text-accent hover:border-accent/30 cursor-pointer transition-all duration-300"
          >
            <FiArrowUp size={16} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
