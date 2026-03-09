import { useState } from "react";
import { motion } from "framer-motion";

export default function GlowCard({ children, className = "" }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className={`relative group ${className}`}
      onMouseMove={handleMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated glow border */}
      <motion.div
        className="absolute -inset-[1px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
        style={{
          background: isHovered
            ? `radial-gradient(300px circle at ${pos.x}px ${pos.y}px, rgba(249, 115, 22, 0.25), transparent 60%)`
            : "none",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
}
