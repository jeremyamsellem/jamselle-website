import { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function ContactSection() {
  const { isDarkMode } = useDarkMode();
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const ref = useIntersectionObserver({ threshold: 0.1 });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission delay for micro-interaction
    await new Promise(resolve => setTimeout(resolve, 800));

    window.location.href = `mailto:jamselle@gmail.com?subject=Let's talk about AI strategy&body=Email: ${email}`;
    setSubmitted(true);
    setIsSubmitting(false);

    // Reset after 2 seconds
    setTimeout(() => {
      setSubmitted(false);
      setEmail('');
    }, 2000);
  };

  return (
    <section
      ref={ref}
      id="contact"
      className={`scroll-animate relative py-24 overflow-hidden transition-colors duration-300 ${
        isDarkMode
          ? 'bg-slate-950 text-white'
          : 'bg-gradient-to-b from-gray-900 to-gray-950 text-white'
      }`}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10 blur-3xl pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-600 rounded-full"></div>
      </div>

      <div className="relative max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 animate-slide-in-up">
          Ready to Get Strategic?
        </h2>

        <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed animate-slide-in-up" style={{animationDelay: '0.1s'}}>
          Let's talk about your GenAI strategy, implementation challenges, or whatever's on your mind.
          No commitment, just a conversation about how I can help.
        </p>

        {/* Form Container */}
        <div className="max-w-md mx-auto animate-scale-in" style={{animationDelay: '0.2s'}}>
          <form onSubmit={handleSubmit} className="relative">
            <div className="relative flex gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className={`flex-1 px-6 py-4 rounded-lg text-gray-900 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-premium ${
                  isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
                } ${submitted ? 'ring-2 ring-green-500' : ''}`}
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className={`px-6 py-4 rounded-lg font-medium text-lg transition-premium whitespace-nowrap overflow-hidden relative ${
                  isSubmitting
                    ? 'bg-gray-500 cursor-not-allowed'
                    : submitted
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-gradient-to-r from-blue-600 to-blue-800 hover:shadow-deep hover:scale-105'
                }`}
              >
                <span className={`inline-flex items-center justify-center transition-all ${
                  isSubmitting ? 'animate-pulse' : ''
                }`}>
                  {isSubmitting && (
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></span>
                  )}
                  {isSubmitting ? 'Sending...' : submitted ? '✓ Sent!' : 'Get in Touch'}
                </span>
              </button>
            </div>
          </form>

          <p className="text-gray-400 text-sm mt-6">
            Or call <a href="tel:+12012901267" className="text-blue-400 hover:text-blue-300 transition-colors font-medium">
              (201) 290-1267
            </a> to schedule directly
          </p>
        </div>

        {/* Additional contact info */}
        <div className="mt-16 pt-12 border-t border-gray-800">
          <p className={`text-sm mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            Let's connect
          </p>
          <div className="flex justify-center gap-6">
            <a
              href="mailto:jamselle@gmail.com"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/jeremyamsellem"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              LinkedIn
            </a>
            <a
              href="tel:+12012901267"
              className="text-blue-400 hover:text-blue-300 transition-colors font-medium"
            >
              Phone
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
