import React, { useEffect } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectDetailContent from './ProjectDetailContent';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Handle escape key and prevent background scroll
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 py-8 flex items-start justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="relative bg-white rounded-2xl shadow-2xl max-w-5xl w-full mx-auto my-8"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
                  aria-label="Close modal"
                >
                  <X size={24} className="text-gray-600" />
                </button>

                {/* Header with gradient */}
                <div className="bg-gradient-to-br from-blue-600 to-blue-900 p-8 md:p-10 rounded-t-2xl text-white">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center text-white font-bold text-2xl flex-shrink-0 backdrop-blur-sm">
                      {project.initials}
                    </div>
                    <div className="flex-1">
                      <h2 className="text-3xl md:text-4xl font-bold mb-2">
                        {project.companyName}
                      </h2>
                      <p className="text-blue-100 font-medium mb-1 text-lg">
                        {project.type}
                      </p>
                      <p className="text-sm text-blue-200">{project.timeframe}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 max-h-[calc(100vh-350px)] overflow-y-auto">
                  <ProjectDetailContent project={project} />
                </div>

                {/* Footer CTA */}
                <div className="border-t border-gray-200 p-6 bg-gray-50 rounded-b-2xl">
                  <button
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                      onClose();
                    }}
                    className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
                  >
                    Discuss Your Project <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
