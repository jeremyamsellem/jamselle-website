import React from 'react';
import { motion } from 'framer-motion';

export default function StarBorder({ children, color = '#0066ff', speed = '3s' }) {
  return (
    <motion.div
      className="relative inline-block"
      style={{
        background: `conic-gradient(from 0deg, ${color}, transparent 30%, transparent 70%, ${color})`,
        borderRadius: '8px',
        padding: '2px',
      }}
      animate={{
        backgroundPosition: '360deg',
      }}
      transition={{
        duration: parseFloat(speed),
        repeat: Infinity,
        ease: 'linear',
      }}
    >
      <div className="relative bg-white dark:bg-gray-900 rounded-[6px]">
        {children}
      </div>
    </motion.div>
  );
}
