import { ArrowRight, CheckCircle } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

// Industry-specific color indicators
const industryColors = {
  'Healthcare': {
    light: 'from-emerald-500 to-emerald-700',
    badge: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    badgeDark: 'bg-emerald-900/30 text-emerald-300 border-emerald-700',
  },
  'Enterprise': {
    light: 'from-blue-600 to-blue-800',
    badge: 'bg-blue-50 text-blue-700 border-blue-200',
    badgeDark: 'bg-blue-900/30 text-blue-300 border-blue-700',
  },
  'Financial': {
    light: 'from-amber-600 to-amber-800',
    badge: 'bg-amber-50 text-amber-700 border-amber-200',
    badgeDark: 'bg-amber-900/30 text-amber-300 border-amber-700',
  },
  'Conversational': {
    light: 'from-purple-600 to-purple-800',
    badge: 'bg-purple-50 text-purple-700 border-purple-200',
    badgeDark: 'bg-purple-900/30 text-purple-300 border-purple-700',
  },
};

export default function PortfolioCard({ project, index, onOpenModal }) {
  const { isDarkMode } = useDarkMode();

  const getIndustryType = () => {
    if (project.type.includes('Healthcare')) return 'Healthcare';
    if (project.type.includes('Financial')) return 'Financial';
    if (project.type.includes('Conversational')) return 'Conversational';
    return 'Enterprise';
  };

  const industry = getIndustryType();
  const colors = industryColors[industry];

  return (
    <div
      onClick={() => onOpenModal(project)}
      className={`group relative rounded-xl overflow-hidden transition-premium cursor-pointer stagger-item ${
        isDarkMode
          ? 'bg-slate-800 border border-slate-700 hover:shadow-deep'
          : 'bg-white border border-gray-200 shadow-refined hover:shadow-deep'
      }`}
      style={{animationDelay: `${index * 0.1}s`}}
    >
      {/* Gradient accent top */}
      <div className={`h-1 w-full bg-gradient-to-r ${colors.light}`}></div>

      <div className="p-8 flex flex-col h-full">
        {/* Header with initials badge */}
        <div className="flex items-start gap-4 mb-6">
          <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-white font-bold text-xl flex-shrink-0 shadow-refined bg-gradient-to-br ${colors.light} group-hover:shadow-deep transition-premium group-hover:scale-105`}>
            {project.initials}
          </div>
          <div className="flex-1">
            <h3 className={`text-lg font-bold font-display mb-1 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {project.companyName}
            </h3>
            <p className={`text-sm font-medium mb-1 ${
              isDarkMode
                ? 'text-blue-400'
                : 'text-blue-600'
            }`}>
              {project.type}
            </p>
            <p className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
              {project.timeframe}
            </p>
          </div>
        </div>

        <p className={`mb-6 flex-grow leading-relaxed ${
          isDarkMode ? 'text-gray-300' : 'text-gray-700'
        }`}>
          {project.description}
        </p>

        {/* Key Achievements */}
        <div className="mb-6">
          <h4 className={`text-sm font-semibold font-display mb-3 ${
            isDarkMode ? 'text-gray-200' : 'text-gray-900'
          }`}>
            Key Achievements
          </h4>
          <ul className="space-y-2">
            {project.achievements.slice(0, 3).map((achievement, idx) => (
              <li key={idx} className={`flex gap-2 text-sm leading-snug ${
                isDarkMode ? 'text-gray-400' : 'text-gray-600'
              }`}>
                <CheckCircle size={16} className={`flex-shrink-0 mt-0.5 ${
                  isDarkMode ? 'text-blue-400' : 'text-blue-600'
                }`} />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className={`mb-4 py-4 border-t ${isDarkMode ? 'border-slate-700' : 'border-gray-100'}`}>
          <p className={`text-xs font-semibold mb-3 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            KEY TECHNOLOGIES
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, idx) => (
              <span
                key={idx}
                className={`inline-block px-3 py-1 text-xs rounded-full border font-medium ${
                  isDarkMode
                    ? 'bg-slate-700/50 text-gray-300 border-slate-600'
                    : 'bg-gray-50 text-gray-700 border-gray-200'
                }`}
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className={`text-xs font-medium ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className={`flex items-center justify-between pt-4 border-t ${
          isDarkMode ? 'border-slate-700' : 'border-gray-100'
        } group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors`}>
          <span className={`text-sm font-medium ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
            View Case Study
          </span>
          <ArrowRight size={18} className={`group-hover:translate-x-1 transition-transform`} />
        </div>
      </div>
    </div>
  );
}
