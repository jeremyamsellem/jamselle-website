import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function ArticleCard({ article, index, getCategoryColor }) {
  // Format date if needed
  const formattedDate = typeof article.date === 'string' && article.date.includes('-')
    ? new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
    : article.date;

  // Determine category color - handle both cases (with or without getCategoryColor function)
  const categoryClass = getCategoryColor
    ? getCategoryColor(article.category)
    : 'bg-blue-100 text-blue-700';

  return (
    <Link
      to={`/articles/${article.slug}`}
      className="group bg-white rounded-xl overflow-hidden shadow-elevation hover-lift border-t-4 border-blue-500 flex flex-col animate-fade-in transition-all duration-300 no-underline"
      style={{animationDelay: `${index * 0.1}s`}}
    >
      <div className="p-8 flex flex-col h-full">
        <div className="flex items-center justify-between mb-4">
          <span className={`text-xs font-semibold px-3 py-1 rounded-full ${categoryClass}`}>
            {article.category}
          </span>
          <span className="text-xs text-gray-500">{article.readTime}</span>
        </div>

        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors flex-grow">
          {article.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500">{formattedDate}</span>
          <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700 inline-flex items-center gap-1 transition-all">
            Read more <ArrowRight size={14} />
          </span>
        </div>
      </div>
    </Link>
  );
}
