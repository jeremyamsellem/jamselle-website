import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen } from 'lucide-react';
import ArticleCard from './ArticleCard';
import { useDarkMode } from '../hooks/useDarkMode';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function KnowledgeHub({ articles }) {
  const { isDarkMode } = useDarkMode();
  const ref = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section
      id="resources"
      ref={ref}
      className={`scroll-animate py-24 transition-colors duration-300 ${
        isDarkMode
          ? 'bg-gradient-to-b from-slate-900 to-slate-850'
          : 'bg-gradient-subtle'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Header with visual interest */}
        <div className="mb-20">
          <div className="flex items-baseline gap-4 mb-6">
            <BookOpen
              size={28}
              className={isDarkMode ? 'text-blue-400' : 'text-blue-600'}
            />
            <h2 className={`text-5xl font-display font-bold ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Knowledge Hub
            </h2>
          </div>

          <p className={`text-xl leading-relaxed max-w-2xl ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Strategic insights on GenAI adoption, implementation patterns, and what actually works
            when scaling AI initiatives across enterprises.
          </p>

          {/* Decorative element */}
          <div className="mt-8 flex gap-2">
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-orange-500 rounded-full"></div>
            <div className="w-12 h-1 bg-blue-400 rounded-full opacity-50"></div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {articles.map((article, index) => (
            <ArticleCard
              key={article.id}
              article={article}
              index={index}
              getCategoryColor={() => {}}
            />
          ))}
        </div>

        {/* CTA Section */}
        <div className={`rounded-xl p-12 text-center transition-colors duration-300 ${
          isDarkMode
            ? 'bg-slate-800 border border-slate-700'
            : 'bg-white border border-gray-200'
        }`}>
          <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Dive deeper into AI strategy, implementation challenges, and organizational alignment.
          </p>

          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              to="/articles/archive"
              className={`px-6 py-3 border-2 rounded-lg font-medium transition-premium inline-flex items-center gap-2 ${
                isDarkMode
                  ? 'border-blue-500 text-blue-400 hover:bg-blue-500/10'
                  : 'border-blue-600 text-blue-600 hover:bg-blue-50'
              }`}
            >
              Explore All Articles <ArrowRight size={18} />
            </Link>

            <button
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium hover:shadow-deep transition-premium inline-flex items-center gap-2"
            >
              Discuss Your Challenges
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
