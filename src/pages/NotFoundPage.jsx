import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | Jamselle Consulting</title>
        <meta name="description" content="The page you're looking for doesn't exist." />
      </Helmet>

      <div className="min-h-screen bg-white flex flex-col">
        {/* Navigation */}
        <nav className="z-40 glass shadow-blue-md">
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

        {/* 404 Content */}
        <div className="flex-1 flex items-center justify-center px-6 py-24">
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-6xl md:text-8xl font-bold text-gradient mb-6">404</h1>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-xl text-gray-600 mb-8">
              The page you're looking for doesn't exist or has been moved. Let's get you back on track.
            </p>

            <div className="flex gap-4 flex-wrap justify-center">
              <Link
                to="/"
                className="px-6 py-3 bg-gradient-blue-vibrant text-white rounded-lg font-medium hover:shadow-blue-lg transition-smooth hover:scale-105 inline-flex items-center gap-2"
              >
                Back to Home <ArrowRight size={18} />
              </Link>
              <Link
                to="/articles/archive"
                className="px-6 py-3 border-2 border-blue-300 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-smooth hover:border-blue-500"
              >
                View Articles
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
