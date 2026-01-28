import { Award, Zap, TrendingUp, Users } from 'lucide-react';
import CountUp from './CountUp';
import { useDarkMode } from '../hooks/useDarkMode';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useState } from 'react';

export default function CredentialsSection() {
  const { isDarkMode } = useDarkMode();
  const [focusedStat, setFocusedStat] = useState(0);
  const ref = useIntersectionObserver({ threshold: 0.1 });

  const stats = [
    {
      icon: Users,
      value: 10,
      label: 'K+',
      description: 'Daily AI interactions deployed and managed across healthcare systems',
    },
    {
      icon: TrendingUp,
      value: 87,
      label: '%',
      description: 'Accuracy achieved in specialized NLP pipelines for clinical use',
    },
    {
      icon: Zap,
      value: 35,
      label: '%',
      description: 'Average timeline reduction while improving implementation quality',
    },
    {
      icon: Award,
      value: 12,
      label: '+',
      description: 'Years architecting enterprise AI across healthcare, finance, and tech',
    },
  ];

  return (
    <section
      ref={ref}
      className={`scroll-animate py-24 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-slate-900 border-t border-slate-800'
          : 'bg-gradient-blue-light border-t border-gray-200'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className={`text-4xl font-display font-bold mb-12 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
          Why I Can Help
        </h2>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                onClick={() => setFocusedStat(index)}
                className={`relative rounded-xl p-8 cursor-pointer transition-premium stagger-item ${
                  isDarkMode
                    ? `${focusedStat === index
                      ? 'bg-slate-800 border border-blue-600/50 shadow-deep'
                      : 'bg-slate-800 border border-slate-700 hover:border-slate-600'
                    }`
                    : `${focusedStat === index
                      ? 'bg-white border-2 border-blue-600 shadow-deep'
                      : 'bg-white border border-gray-200 hover:border-gray-300'
                    }`
                }`}
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Icon background */}
                <div className={`mb-4 p-3 rounded-lg w-fit ${
                  isDarkMode
                    ? 'bg-blue-900/30'
                    : 'bg-blue-50'
                }`}>
                  <Icon size={24} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
                </div>

                {/* Value */}
                <div className={`mb-2 font-display text-4xl font-bold flex items-baseline gap-1 ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {focusedStat === index ? (
                    <CountUp
                      end={stat.value}
                      duration={800}
                      decimals={0}
                      isActive={true}
                    />
                  ) : (
                    stat.value
                  )}
                  <span className={`text-2xl font-semibold ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                    {stat.label}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-sm leading-relaxed ${isDarkMode ? 'text-gray-400' : 'text-gray-700'}`}>
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bio Section */}
        <div className={`rounded-xl p-8 transition-colors duration-300 ${
          isDarkMode
            ? 'bg-slate-800 border border-slate-700'
            : 'bg-white border border-gray-200'
        }`}>
          <div className="flex gap-4 mb-4">
            <div className="w-1 bg-gradient-to-b from-blue-600 to-orange-500 rounded-full"></div>
            <div className="flex-1">
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-4 leading-relaxed`}>
                <strong>Recent roles:</strong> Senior Solution Architect at Hyro.ai (healthcare GenAI), VP of Solution Architecture at OneReach.ai (enterprise AI automation), Head of Cognitive Architects at Amelia (conversational AI), with earlier experience at Morgan Stanley and Societe Generale.
              </p>
              <p className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} leading-relaxed`}>
                I've built the technical foundations for AI adoption at some of the most regulated and complex organizations in the world. I know what works, what doesn't, and what your organization actually needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
