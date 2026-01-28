import { ArrowRight, TrendingUp, Clock, Users } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export default function ProjectImpactCard({ project, index, onOpenModal }) {
  const { isDarkMode } = useDarkMode();

  // Extract key metrics from achievements
  let metrics = [];

  if (project.companyName.includes('Hyro')) {
    metrics = [
      { label: 'MVP Timeline', value: '78 days', icon: Clock },
      { label: 'Reach', value: 'Multi-Hospital', icon: Users }
    ];
  } else if (project.companyName.includes('OneReach')) {
    metrics = [
      { label: 'Deployment Scale', value: '1,500 Stores', icon: TrendingUp },
      { label: 'Uptime', value: '99.97%', icon: Clock }
    ];
  } else if (project.companyName.includes('Amelia')) {
    metrics = [
      { label: 'Accuracy', value: '96.8%', icon: TrendingUp },
      { label: 'ROI', value: '312%', icon: Users }
    ];
  } else if (project.companyName.includes('Fintech')) {
    metrics = [
      { label: 'Funding Raised', value: '$2.3M Series A', icon: TrendingUp },
      { label: 'POC Timeline', value: '8 weeks', icon: Clock }
    ];
  }

  const isWide = index === 0 || index === 3; // First and last cards span full width

  return (
    <div
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 stagger-item ${
        isDarkMode
          ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 hover:shadow-deep hover:border-blue-600'
          : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-refined hover:shadow-deep hover:border-blue-400'
      } ${isWide ? 'col-span-full md:col-span-2' : 'col-span-full md:col-span-1'}`}
      onClick={() => onOpenModal(project)}
      style={{animationDelay: `${index * 0.1}s`}}
    >
      {/* Top accent bar */}
      <div className="h-1.5 w-full bg-gradient-to-r from-blue-600 via-blue-500 to-orange-500"></div>

      <div className={`p-8 md:p-10 h-full flex flex-col ${isWide ? 'md:flex-row' : ''}`}>
        {/* Left side - Main content */}
        <div className={`flex-1 flex flex-col justify-between ${isWide ? 'md:pr-8' : ''}`}>
          {/* Company name and type */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center font-display font-bold text-lg transition-all group-hover:scale-110 ${
                isDarkMode
                  ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-blue-200'
                  : 'bg-gradient-to-br from-blue-100 to-blue-50 text-blue-700'
              }`}>
                {project.initials}
              </div>
              <div>
                <h3 className={`text-lg font-display font-bold group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {project.companyName}
                </h3>
                <p className={`text-xs font-semibold uppercase tracking-wider ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.type}
                </p>
              </div>
            </div>

            <p className={`leading-relaxed mb-4 ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              {project.description}
            </p>
          </div>

          {/* Key achievement highlight */}
          {project.achievements?.[0] && (
            <div className={`mb-6 p-4 rounded-lg border-l-2 border-blue-600 ${
              isDarkMode
                ? 'bg-blue-900/15'
                : 'bg-blue-50'
            }`}>
              <p className={`text-sm font-medium ${isDarkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                <span className="font-bold">Key Win:</span> {project.achievements[0]}
              </p>
            </div>
          )}

          {/* Technology stack */}
          {project.technologies && (
            <div>
              <p className={`text-xs font-semibold uppercase tracking-wider mb-2 ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, idx) => (
                  <span key={idx} className={`text-xs px-2.5 py-1.5 rounded-full ${
                    isDarkMode
                      ? 'bg-slate-700 text-gray-300'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className={`text-xs px-2.5 py-1.5 rounded-full ${
                    isDarkMode
                      ? 'bg-slate-700 text-gray-300'
                      : 'bg-gray-200 text-gray-700'
                  }`}>
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Right side - Metrics (shown on desktop for wide cards, below on mobile) */}
        {metrics.length > 0 && (
          <div className={`flex gap-4 mt-6 ${isWide ? 'md:mt-0 md:flex-col md:justify-center md:min-w-48' : ''}`}>
            {metrics.map((metric, idx) => {
              const IconComponent = metric.icon;
              return (
                <div key={idx} className={`flex-1 ${isWide ? 'md:flex-none' : ''}`}>
                  <div className={`rounded-lg p-4 text-center ${
                    isDarkMode
                      ? 'bg-slate-700/50 border border-slate-600'
                      : 'bg-gray-100/50 border border-gray-200'
                  }`}>
                    <IconComponent size={16} className={`mx-auto mb-2 ${
                      isDarkMode ? 'text-blue-400' : 'text-blue-600'
                    }`} />
                    <p className={`text-sm font-bold mb-1 ${
                      isDarkMode ? 'text-white' : 'text-gray-900'
                    }`}>
                      {metric.value}
                    </p>
                    <p className={`text-xs ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      {metric.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Footer - CTA and timeframe */}
      <div className={`px-8 md:px-10 pb-8 pt-4 border-t ${
        isDarkMode ? 'border-slate-700' : 'border-gray-200'
      } flex items-center justify-between`}>
        <span className={`text-sm font-medium ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {project.timeframe}
        </span>
        <span className={`font-medium text-sm inline-flex items-center gap-2 transition-all group-hover:gap-3 ${
          isDarkMode
            ? 'text-blue-400 group-hover:text-blue-300'
            : 'text-blue-600 group-hover:text-blue-700'
        }`}>
          Case Study <ArrowRight size={16} />
        </span>
      </div>

      {/* Hover accent effect */}
      <div className={`absolute -right-20 -top-20 w-40 h-40 rounded-full opacity-0 group-hover:opacity-15 transition-opacity duration-500 ${
        isDarkMode
          ? 'bg-blue-500'
          : 'bg-blue-300'
      }`}></div>
    </div>
  );
}
