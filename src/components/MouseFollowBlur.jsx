import React, { useRef } from 'react';
import { motion } from 'framer-motion';

export default function MouseFollowBlur({ children, isActive = true }) {
  const containerRef = useRef(null);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = React.useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  };

  const handleMouseEnter = () => {
    setIsInside(true);
  };

  const handleMouseLeave = () => {
    setIsInside(false);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden rounded-xl"
      animate={{
        boxShadow: isActive && isInside
          ? `0 0 60px 30px rgba(99, 102, 241, 0.3)`
          : 'none',
      }}
      transition={{ duration: 0.3 }}
    >
      {children}

      {isActive && (
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl"
          style={{
            background: `radial-gradient(circle 200px at ${position.x}px ${position.y}px, rgba(99, 102, 241, 0.15), transparent 70%)`,
            opacity: isInside ? 1 : 0,
          }}
          animate={{
            opacity: isInside ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
        />
      )}
    </motion.div>
  );
}
