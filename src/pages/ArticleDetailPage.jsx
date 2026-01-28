import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Helmet } from 'react-helmet-async';
import { getArticleBySlug } from '../data/articles';
import { ArrowLeft, ArrowRight, Calendar, Clock, User } from 'lucide-react';
import 'highlight.js/styles/atom-one-dark.css';
import Navigation from '../components/Navigation';
import { useDarkMode } from '../hooks/useDarkMode';

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const { isDarkMode } = useDarkMode();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/" replace />;
  }

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
    <>
      <Helmet>
        <title>{article.title} | Jamselle Consulting</title>
        <meta name="description" content={article.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={article.title} />
        <meta property="og:description" content={article.description} />
        <meta name="article:published_time" content={article.date} />
        <meta name="author" content={article.author} />
        {article.keywords && <meta name="keywords" content={article.keywords.join(', ')} />}
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
          <div className="max-w-4xl mx-auto px-6">
            <Link to="/articles/archive" className={`inline-flex items-center gap-2 mb-8 transition-colors ${
              isDarkMode
                ? 'text-blue-400 hover:text-blue-300'
                : 'text-blue-600 hover:text-blue-700'
            }`}>
              <ArrowLeft size={18} /> Back to Articles
            </Link>

            <div className="mb-6">
              <span className={`inline-block px-3 py-1.5 text-xs font-semibold rounded-full whitespace-nowrap ${categoryClass}`}>
                {article.category}
              </span>
            </div>

            <h1 className={`text-4xl md:text-5xl font-display font-bold mb-6 leading-tight ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              {article.title}
            </h1>

            <p className={`text-lg mb-8 leading-relaxed ${
              isDarkMode ? 'text-gray-300' : 'text-gray-700'
            }`}>
              {article.description}
            </p>

            {/* Metadata */}
            <div className={`flex items-center gap-6 text-sm flex-wrap ${
              isDarkMode ? 'text-gray-400' : 'text-gray-600'
            }`}>
              <div className="flex items-center gap-2">
                <Calendar size={16} />
                <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} />
                <span>{article.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <User size={16} />
                <span>{article.author}</span>
              </div>
            </div>
          </div>
        </header>

        {/* Article Content */}
        <article className="max-w-4xl mx-auto px-6 py-16">
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                h1: ({ node, children, ...props }) => <h1 className={`text-4xl font-display font-bold mt-8 mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} {...props}>{children}</h1>,
                h2: ({ node, children, ...props }) => <h2 className={`text-3xl font-display font-bold mt-8 mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} {...props}>{children}</h2>,
                h3: ({ node, children, ...props }) => <h3 className={`text-2xl font-display font-bold mt-6 mb-3 ${isDarkMode ? 'text-white' : 'text-gray-900'}`} {...props}>{children}</h3>,
                p: ({ node, ...props }) => <p className={`leading-relaxed mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} {...props} />,
                ul: ({ node, ...props }) => <ul className={`list-disc list-inside space-y-2 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} {...props} />,
                ol: ({ node, ...props }) => <ol className={`list-decimal list-inside space-y-2 mb-4 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} {...props} />,
                li: ({ node, ...props }) => <li className={isDarkMode ? 'text-gray-300' : 'text-gray-700'} {...props} />,
                a: ({ node, children, ...props }) => <a className={`${isDarkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} underline`} {...props}>{children}</a>,
                code: ({ node, inline, children, ...props }) =>
                  inline
                    ? <code className={`px-2 py-1 rounded text-sm font-mono ${isDarkMode ? 'bg-slate-800 text-gray-300' : 'bg-gray-100 text-gray-800'}`} {...props}>{children}</code>
                    : <code className="text-sm" {...props}>{children}</code>,
                pre: ({ node, ...props }) => <pre className={`p-4 rounded-lg overflow-x-auto mb-4 ${isDarkMode ? 'bg-gray-900 text-gray-100' : 'bg-gray-100 text-gray-900'}`} {...props} />,
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Footer CTA */}
        <section className={`py-16 transition-colors duration-300 ${
          isDarkMode
            ? 'bg-slate-900 border-t border-slate-800'
            : 'bg-gradient-subtle border-t border-gray-200'
        }`}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className={`text-3xl font-display font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-900'
            }`}>
              Interested in discussing this topic?
            </h2>
            <p className={`text-lg mb-8 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
              Let's talk about how these insights apply to your organization.
            </p>
            <Link
              to="/#contact"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg font-medium hover:shadow-deep transition-premium hover:scale-105 inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
