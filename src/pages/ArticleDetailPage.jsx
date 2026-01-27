import { useParams, Link, Navigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Helmet } from 'react-helmet-async';
import { getArticleBySlug } from '../data/articles';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import 'highlight.js/styles/atom-one-dark.css';

export default function ArticleDetailPage() {
  const { slug } = useParams();
  const article = getArticleBySlug(slug);

  if (!article) {
    return <Navigate to="/" replace />;
  }

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
          <div className="max-w-4xl mx-auto px-6">
            <Link to="/articles/archive" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-6 transition-colors">
              <ArrowLeft size={18} /> Back to Articles
            </Link>
            <div className="mb-4">
              <span className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-sm font-semibold rounded-full">
                {article.category}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{article.title}</h1>
            <p className="text-lg text-gray-600 mb-6">{article.description}</p>
            <div className="flex items-center gap-6 text-sm text-gray-500 flex-wrap">
              <span>{new Date(article.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
              <span>•</span>
              <span>{article.readTime}</span>
              <span>•</span>
              <span>By {article.author}</span>
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
                h1: ({ node, children, ...props }) => <h1 className="text-4xl font-bold mt-8 mb-4 text-gray-900" {...props}>{children}</h1>,
                h2: ({ node, children, ...props }) => <h2 className="text-3xl font-bold mt-8 mb-4 text-gray-900" {...props}>{children}</h2>,
                h3: ({ node, children, ...props }) => <h3 className="text-2xl font-bold mt-6 mb-3 text-gray-900" {...props}>{children}</h3>,
                p: ({ node, ...props }) => <p className="text-gray-700 leading-relaxed mb-4" {...props} />,
                ul: ({ node, ...props }) => <ul className="list-disc list-inside space-y-2 mb-4 text-gray-700" {...props} />,
                ol: ({ node, ...props }) => <ol className="list-decimal list-inside space-y-2 mb-4 text-gray-700" {...props} />,
                li: ({ node, ...props }) => <li className="text-gray-700" {...props} />,
                a: ({ node, children, ...props }) => <a className="text-blue-600 hover:text-blue-700 underline" {...props}>{children}</a>,
                code: ({ node, inline, children, ...props }) =>
                  inline
                    ? <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800" {...props}>{children}</code>
                    : <code className="text-sm" {...props}>{children}</code>,
                pre: ({ node, ...props }) => <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-4" {...props} />,
              }}
            >
              {article.content}
            </ReactMarkdown>
          </div>
        </article>

        {/* Footer CTA */}
        <section className="bg-gradient-blue-light py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Interested in discussing this topic?</h2>
            <p className="text-lg text-gray-600 mb-8">Let's talk about how these insights apply to your organization.</p>
            <Link
              to="/#contact"
              className="px-6 py-3 bg-gradient-blue-vibrant text-white rounded-lg font-medium hover:shadow-blue-lg transition-smooth hover:scale-105 inline-flex items-center gap-2"
            >
              Get in Touch <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
