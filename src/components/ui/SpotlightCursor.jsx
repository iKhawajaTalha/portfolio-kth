import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function SpotlightCursor({ children, className = "" }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMove}
      onMouseEnter={() => setIsInside(true)}
      onMouseLeave={() => setIsInside(false)}
    >
      <motion.div
        className="pointer-events-none absolute -inset-px z-0"
        animate={{
          background: isInside
            ? `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, rgba(249, 115, 22, 0.06), transparent 60%)`
            : "none",
        }}
        transition={{ duration: 0.15, ease: "linear" }}
      />
      {children}
    </div>
  );
}
