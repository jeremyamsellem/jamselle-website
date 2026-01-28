import { useState } from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const customers = [
  { logo: "/img/hyro.png", displayName: "Hyro.ai" },
  { logo: "/img/onereach.png", displayName: "OneReach.ai" },
  { logo: "/img/amelia.png", displayName: "Amelia" },
  { logo: "/img/usaa.png", displayName: "USAA" },
  { logo: "/img/athenahealth.png", displayName: "Athena Health" },
  { logo: "/img/discounttire.png", displayName: "Discount Tire" },
  { logo: "/img/pepsico.png", displayName: "PepsiCo" },
  { logo: "/img/grady.png", displayName: "Grady Health Systems" },
  { logo: "/img/piedmont.png", displayName: "Piedmont" },
  { logo: "/img/SG.png", displayName: "Societe Generale" },
  { logo: "/img/snb.png", displayName: "SNB" },
  { logo: "/img/dayton.png", displayName: "Dayton" },
  { logo: "/img/UR.png", displayName: "Universal Robotics" },
];

export default function CustomersCarousel() {
  const { isDarkMode } = useDarkMode();
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className={`py-16 transition-colors duration-300 border-y ${
      isDarkMode
        ? 'bg-slate-800 border-slate-700'
        : 'bg-white border-gray-200'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={`text-2xl font-display font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Trusted by Industry Leaders
          </h2>
          <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Experience across healthcare, financial services, technology, and enterprise
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <style>{`
            @keyframes scrollSoft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .carousel-track {
              animation: scrollSoft 40s linear infinite;
              animation-play-state: ${isPaused ? 'paused' : 'running'};
            }
            .carousel-track:hover {
              animation-play-state: paused;
            }
          `}</style>

          <div className="carousel-track flex gap-6">
            {[...customers, ...customers].map((customer, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-48 h-24 rounded-lg flex items-center justify-center transition-premium hover:shadow-refined ${
                  isDarkMode
                    ? 'bg-slate-700/50 border border-slate-600'
                    : 'bg-white border border-gray-200 shadow-subtle'
                }`}
              >
                <img
                  src={customer.logo}
                  alt={customer.displayName}
                  className="h-16 max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <p className={`text-center text-xs mt-8 ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          Hover to pause
        </p>
      </div>
    </section>
  );
}
