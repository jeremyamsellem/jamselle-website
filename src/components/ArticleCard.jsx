import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export default function ArticleCard({ article, index, getCategoryColor }) {
  const { isDarkMode } = useDarkMode();

  // Format date if needed
  const formattedDate = typeof article.date === 'string' && article.date.includes('-')
    ? new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : article.date;

  // Sophisticated category colors
  const categoryColors = {
    'AI Strategy': isDarkMode
      ? 'bg-blue-900/40 text-blue-300 border border-blue-800'
      : 'bg-blue-50 text-blue-700 border border-blue-200',
    'Implementation': isDarkMode
      ? 'bg-orange-900/40 text-orange-300 border border-orange-800'
      : 'bg-orange-50 text-orange-700 border border-orange-200',
    'Healthcare': isDarkMode
      ? 'bg-emerald-900/40 text-emerald-300 border border-emerald-800'
      : 'bg-emerald-50 text-emerald-700 border border-emerald-200',
  };

  const categoryClass = categoryColors[article.category] || (isDarkMode
    ? 'bg-gray-800 text-gray-300 border border-gray-700'
    : 'bg-gray-100 text-gray-700 border border-gray-200');

  return (
    <Link
      to={`/articles/${article.slug}`}
      className={`group relative rounded-xl overflow-hidden shadow-refined hover:shadow-deep transition-premium flex flex-col stagger-item no-underline h-full ${
        isDarkMode
          ? 'bg-slate-800 border border-slate-700'
          : 'bg-white border border-gray-200'
      }`}
      style={{animationDelay: `${index * 0.1}s`}}
    >
      {/* Accent bar */}
      <div className={`h-1 w-full ${
        article.category === 'AI Strategy'
          ? 'bg-gradient-to-r from-blue-600 to-blue-800'
          : article.category === 'Implementation'
          ? 'bg-gradient-to-r from-orange-500 to-orange-700'
          : 'bg-gradient-to-r from-emerald-600 to-emerald-800'
      }`}></div>

      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4 gap-2">
          <span className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap ${categoryClass}`}>
            {article.category}
          </span>
          <span className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {article.readTime}
          </span>
        </div>

        <h3 className={`text-lg font-display font-bold mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors flex-grow leading-snug ${
          isDarkMode ? 'text-white' : 'text-gray-900'
        }`}>
          {article.title}
        </h3>

        <p className={`text-sm mb-4 flex-grow leading-relaxed ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        }`}>
          {article.excerpt}
        </p>

        <div className={`flex items-center justify-between pt-4 border-t ${
          isDarkMode ? 'border-slate-700' : 'border-gray-100'
        }`}>
          <span className={`text-xs ${isDarkMode ? 'text-gray-500' : 'text-gray-500'}`}>
            {formattedDate}
          </span>
          <span className={`font-medium text-sm inline-flex items-center gap-1 transition-all group-hover:gap-2 ${
            isDarkMode
              ? 'text-blue-400 group-hover:text-blue-300'
              : 'text-blue-600 group-hover:text-blue-700'
          }`}>
            Read more <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
