import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllArticles } from '../data/articles';
import ArticleCard from '../components/ArticleCard';
import { ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const ARTICLES_PER_PAGE = 9;

export default function ArticleArchivePage() {
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

      <div className="min-h-screen bg-white">
        {/* Navigation */}
        <nav className="sticky top-0 z-40 glass shadow-blue-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold tracking-tight text-gradient">
              Jamselle Consulting
            </Link>
            <Link
              to="/#contact"
              className="text-sm px-4 py-2 bg-gradient-blue-vibrant text-white rounded font-medium hover:shadow-blue-md transition-smooth hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </nav>

        {/* Header */}
        <header className="bg-gradient-blue-light py-16">
          <div className="max-w-6xl mx-auto px-6">
            <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors">
              <ArrowLeft size={18} /> Back to Home
            </Link>
            <h1 className="text-5xl font-bold mb-4 text-gray-900">Articles & Insights</h1>
            <p className="text-xl text-gray-600">Strategic insights on GenAI adoption, implementation, and what works in the real world.</p>
          </div>
        </header>

        {/* Category Filters */}
        <section className="max-w-6xl mx-auto px-6 py-8 border-b border-gray-200">
          <div className="flex gap-3 flex-wrap">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => handleFilterChange(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                  categoryFilter === category
                    ? 'bg-gradient-blue-vibrant text-white shadow-blue-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Showing {paginatedArticles.length} of {filteredArticles.length} article{filteredArticles.length !== 1 ? 's' : ''}
          </p>
        </section>

        {/* Articles Grid */}
        <section className="max-w-6xl mx-auto px-6 py-16">
          {paginatedArticles.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {paginatedArticles.map((article, index) => (
                <ArticleCard key={article.id} article={article} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found in this category.</p>
            </div>
          )}
        </section>

        {/* Pagination */}
        {totalPages > 1 && (
          <section className="max-w-6xl mx-auto px-6 pb-16">
            <div className="flex justify-center items-center gap-2 flex-wrap">
              <button
                onClick={() => {
                  setCurrentPage(Math.max(1, currentPage - 1));
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                disabled={currentPage === 1}
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors flex items-center gap-1"
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
                      ? 'bg-gradient-blue-vibrant text-white shadow-blue-md'
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
                className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors flex items-center gap-1"
              >
                Next <ChevronRight size={18} />
              </button>
            </div>
          </section>
        )}
      </div>
    </>
  );
}
