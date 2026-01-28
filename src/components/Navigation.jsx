import { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-40 transition-all duration-300 ${
      scrolled
        ? isDarkMode
          ? 'glass-dark shadow-deep'
          : 'glass shadow-premium'
        : isDarkMode
          ? 'bg-slate-850'
          : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className={`text-2xl font-bold tracking-tight font-display ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Jamselle Consulting
        </div>

        <div className="hidden md:flex gap-8 text-sm">
          <NavLink href="#services">Services</NavLink>
          <NavLink href="#portfolio">Portfolio</NavLink>
          <NavLink href="#resources">Resources</NavLink>
          <NavLink href="#about">About</NavLink>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className={`p-2 rounded-lg transition-premium ${
              isDarkMode
                ? 'bg-slate-700 text-yellow-400 hover:bg-slate-600'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
            aria-label="Toggle dark mode"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <button
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            className="text-sm px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium hover:shadow-deep transition-premium hover:scale-105"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </nav>
  );
}

function NavLink({ href, children }) {
  const { isDarkMode } = useDarkMode();

  return (
    <a
      href={href}
      className={`relative text-sm font-medium transition-colors group ${
        isDarkMode
          ? 'text-gray-300 hover:text-white'
          : 'text-gray-700 hover:text-blue-600'
      }`}
    >
      {children}
      <span className={`absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full ${
        isDarkMode ? 'bg-white' : 'bg-blue-600'
      }`}></span>
    </a>
  );
}
