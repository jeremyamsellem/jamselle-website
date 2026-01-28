import { ArrowRight, Zap, Calendar } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export default function PortfolioCardEnhanced({ project, index, onOpenModal, isFeatured }) {
  const { isDarkMode } = useDarkMode();

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-premium stagger-item ${
        isDarkMode
          ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:shadow-deep hover:border-blue-600'
          : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-refined hover:shadow-deep hover:border-blue-400'
      } ${isFeatured ? 'md:col-span-2 md:row-span-2' : ''}`}
      onClick={() => onOpenModal(project)}
      style={{animationDelay: `${index * 0.1}s`}}
    >
      {/* Gradient accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 to-orange-500"></div>

      <div className={`p-8 md:p-10 h-full flex flex-col justify-between ${isFeatured ? 'min-h-80' : ''}`}>
        {/* Company initials badge */}
        <div className="flex items-start justify-between mb-6">
          <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-display font-bold text-lg transition-all group-hover:scale-110 ${
            isDarkMode
              ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-blue-200'
              : 'bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700'
          }`}>
            {project.initials}
          </div>

          {isFeatured && (
            <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${
              isDarkMode
                ? 'bg-blue-900/30 text-blue-300'
                : 'bg-blue-100 text-blue-700'
            }`}>Featured</span>
          )}
        </div>

        {/* Content */}
        <div className="flex-grow">
          <h3 className={`text-xl md:text-2xl font-display font-bold mb-3 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}>
            {project.companyName}
          </h3>

          <p className={`mb-4 leading-relaxed ${isFeatured ? 'text-lg' : ''} ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            {project.description}
          </p>

          {/* Key achievement highlight */}
          {project.achievements?.[0] && (
            <div className={`mb-6 p-4 rounded-lg border-l-2 border-blue-600 ${
              isDarkMode
                ? 'bg-blue-900/10'
                : 'bg-blue-50'
            }`}>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                <Zap size={14} className="inline mr-2" />
                {project.achievements[0]}
              </p>
            </div>
          )}

          {/* Tech stack - shown only on larger cards */}
          {(isFeatured || index < 2) && project.technologies && (
            <div className="mb-4">
              <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>Technologies</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 4).map((tech, idx) => (
                  <span key={idx} className={`text-xs px-3 py-1 rounded-full ${
                    isDarkMode
                      ? 'bg-slate-700 text-gray-300'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer - Timeframe and CTA */}
        <div className="pt-6 border-t border-gray-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm">
            <Calendar size={14} className={isDarkMode ? 'text-gray-500' : 'text-gray-400'} />
            <span className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              {project.timeframe}
            </span>
          </div>
          <span className={`font-medium text-sm inline-flex items-center gap-1 transition-all group-hover:gap-2 ${
            isDarkMode
              ? 'text-blue-400 group-hover:text-blue-300'
              : 'text-blue-600 group-hover:text-blue-700'
          }`}>
            View Details <ArrowRight size={16} />
          </span>
        </div>
      </div>

      {/* Hover accent effect */}
      <div className={`absolute -right-16 -top-16 w-32 h-32 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${
        isDarkMode
          ? 'bg-blue-500'
          : 'bg-blue-300'
      }`}></div>
    </div>
  );
}
