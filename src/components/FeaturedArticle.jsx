import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function FeaturedArticle({ article }) {
  const { isDarkMode } = useDarkMode();
  const ref = useIntersectionObserver({ threshold: 0.2 });

  if (!article) return null;

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

  const accentGradient = article.category === 'AI Strategy'
    ? 'from-blue-600 to-blue-800'
    : article.category === 'Implementation'
    ? 'from-orange-500 to-orange-700'
    : 'from-emerald-600 to-emerald-800';

  return (
    <section ref={ref} className={`scroll-animate py-16 transition-colors duration-300 ${
      isDarkMode
        ? 'bg-slate-950'
        : 'bg-white'
    }`}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center gap-3 mb-12">
          <Sparkles size={24} className={isDarkMode ? 'text-blue-400' : 'text-blue-600'} />
          <span className={`text-sm font-semibold uppercase tracking-wider ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>Featured Insight</span>
        </div>

        {/* Featured article card */}
        <div className={`group relative rounded-2xl overflow-hidden transition-premium stagger-item ${
          isDarkMode
            ? 'bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 shadow-deep hover:shadow-premium'
            : 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-refined hover:shadow-premium'
        }`}>
          {/* Top accent bar */}
          <div className={`h-1.5 w-full bg-gradient-to-r ${accentGradient}`}></div>

          <div className="p-10 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Left side - Article content */}
              <div className="md:col-span-2 flex flex-col justify-between">
                <div>
                  {/* Category and metadata */}
                  <div className="flex items-center gap-3 mb-6">
                    <span className={`text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap ${categoryClass}`}>
                      {article.category}
                    </span>
                    <span className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {article.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
                    isDarkMode ? 'text-white' : 'text-gray-900'
                  }`}>
                    {article.title}
                  </h2>

                  {/* Excerpt */}
                  <p className={`text-lg leading-relaxed mb-6 ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {article.excerpt}
                  </p>
                </div>

                {/* CTA Button */}
                <Link
                  to={`/articles/${article.slug}`}
                  className={`self-start px-6 py-3 rounded-lg font-medium transition-premium inline-flex items-center gap-2 ${
                    isDarkMode
                      ? 'bg-blue-600/20 border border-blue-500 text-blue-400 hover:bg-blue-600/30'
                      : 'bg-blue-50 border border-blue-300 text-blue-700 hover:bg-blue-100'
                  }`}
                >
                  Read Full Article <ArrowRight size={18} />
                </Link>
              </div>

              {/* Right side - Meta info */}
              <div className={`flex flex-col justify-between p-6 rounded-xl ${
                isDarkMode
                  ? 'bg-slate-800/50 border border-slate-700'
                  : 'bg-gray-100/50 border border-gray-200'
              }`}>
                <div>
                  <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Published</p>
                  <p className={`text-sm mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                    {new Date(article.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </p>

                  <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>By</p>
                  <p className={`text-sm mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-800'}`}>
                    {article.author || 'Jeremy Amsellem'}
                  </p>

                  <p className={`text-xs font-semibold uppercase tracking-wider mb-3 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-600'
                  }`}>Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {article.keywords?.slice(0, 2).map((keyword, idx) => (
                      <span key={idx} className={`text-xs px-2 py-1 rounded-full ${
                        isDarkMode
                          ? 'bg-slate-700 text-gray-300'
                          : 'bg-gray-300 text-gray-700'
                      }`}>
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
