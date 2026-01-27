import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import ArticleArchivePage from './pages/ArticleArchivePage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/articles/archive" element={<ArticleArchivePage />} />
      <Route path="/articles/:slug" element={<ArticleDetailPage />} />
      <Route path="/articles" element={<Navigate to="/articles/archive" replace />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
