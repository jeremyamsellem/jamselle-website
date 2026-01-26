import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function GlareHover({ children, intensity = 0.5 }) {
  const containerRef = useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden"
      style={{ perspective: 1000 }}
    >
      {children}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-lg"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, rgba(255,255,255,${0.3 * intensity}), transparent 50%)`,
        }}
        animate={{
          opacity: position.x === 0 && position.y === 0 ? 0 : 1,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  );
}
