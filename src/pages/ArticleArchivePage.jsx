import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllArticles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import Navigation from '../components/Navigation';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

const ARTICLES_PER_PAGE = 9;

export default function ArticleArchivePage() {
  const { isDarkMode } = useDarkMode();
  const [currentPage, setCurrentPage] = useState(1);
  const [categoryFilter, setCategoryFilter] = useState('All');

  const allArticles = getAllArticles();
  const categories = ['All', ...new Set(allArticles.map(a => a.category))];

  const filteredArticles = useMemo(() => {
    if (categoryFilter === 'All') return allArticles;
    return allArticles.filter(a => a.category === categoryFilter);
  }, [allArticles, categoryFilter]);

  const totalPages = Math.ceil(filteredArticles.length / ARTICLES_PER_PAGE);
  const startIndex = (currentPage - 1) * ARTICLES_PER_PAGE;
  const paginatedArticles = filteredArticles.slice(startIndex, startIndex + ARTICLES_PER_PAGE);

  const handleFilterChange = (category) => {
    setCategoryFilter(category);
    setCurrentPage(1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Articles & Insights | Jamselle Consulting</title>
        <meta name="description" content="Strategic insights on GenAI adoption, implementation, and what works in the real world." />
        <meta property="og:title" content="Articles & Insights | Jamselle Consulting" />
        <meta property="og:description" content="Strategic insights on GenAI adoption, implementation, and what works in the real world." />
      </Helmet>

      <div className={`min-h-screen transition-colors duration-300 ${
        isDarkMode
          ? 'bg-slate-950 text-white'
          : 'bg-white text-gray-900'
      }`}>
        {/* Navigation */}
        <Navigation />

        {/* Header */}
        <header className={`py-16 transition-colors duration-300 ${
          isDarkMode
            ? 'bg-slate-900 border-b border-slate-800'
            : 'bg-gradient-subtle border-b border-gray-200'
        }`}>
          <div className="max-w-6xl mx-auto px-6">
            <Link to="/" className={`inline-flex items-center gap-2 mb-8 transition-colors ${
              isDarkMode
                ? 'text-blue-400 hover:text-blue-300'
                : 'text-blue-600 hover:text-blue-700'
            }`}>
              <ArrowLeft size={18} /> Back to Home
            </Link>
            <h1 className={`text-5xl font-display font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
              Articles & Insights
            </h1>
            <p className={`text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Strategic insights on GenAI adoption, implementation, and what works in the real world.
            </p>
          </div>
        </header>

        {/* Category Filters */}
        <section className={`transition-colors duration-300 ${
          isDarkMode
            ? 'bg-slate-900 border-b border-slate-800'
            : 'bg-white border-b border-gray-200'
        }`}>
          <div className="max-w-6xl mx-auto px-6 py-8">
            <div className="flex gap-3 flex-wrap mb-4">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => handleFilterChange(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    categoryFilter === category
                      ? isDarkMode
                        ? 'bg-blue-600 text-white shadow-deep'
                        : 'bg-blue-600 text-white shadow-refined'
                      : isDarkMode
                      ? 'bg-slate-800 text-gray-300 border border-slate-700 hover:bg-slate-700'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Showing {paginatedArticles.length} of {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className={`transition-colors duration-300 ${isDarkMode ? 'bg-slate-950' : 'bg-white'}`}>
          <div className="max-w-6xl mx-auto px-6 py-16">
            {paginatedArticles.length > 0 ? (
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {paginatedArticles.map((article, index) => (
                  <ArticleCard key={article.id} article={article} index={index} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className={`text-lg ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  No articles found in this category.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <section className={`transition-colors duration-300 ${
            isDarkMode
              ? 'bg-slate-900 border-t border-slate-800'
              : 'bg-gradient-subtle border-t border-gray-200'
          }`}>
            <div className="max-w-6xl mx-auto px-6 py-12">
              <div className="flex justify-center items-center gap-2 flex-wrap">
                <button
                  onClick={() => {
                    setCurrentPage(Math.max(1, currentPage - 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === 1}
                  className={`px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-1 font-medium ${
                    isDarkMode
                      ? 'bg-slate-800 text-gray-300 border border-slate-700 hover:bg-slate-700 disabled:hover:bg-slate-800'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:hover:bg-gray-100'
                  }`}
                >
                  <ChevronLeft size={18} /> Previous
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => {
                      setCurrentPage(page);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                      currentPage === page
                        ? isDarkMode
                          ? 'bg-blue-600 text-white shadow-deep'
                          : 'bg-blue-600 text-white shadow-refined'
                        : isDarkMode
                        ? 'bg-slate-800 text-gray-300 border border-slate-700 hover:bg-slate-700'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {page}
                  </button>
                ))}

                <button
                  onClick={() => {
                    setCurrentPage(Math.min(totalPages, currentPage + 1));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  disabled={currentPage === totalPages}
                  className={`px-4 py-2 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center gap-1 font-medium ${
                    isDarkMode
                      ? 'bg-slate-800 text-gray-300 border border-slate-700 hover:bg-slate-700 disabled:hover:bg-slate-800'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200 disabled:hover:bg-gray-100'
                  }`}
                >
                  Next <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
