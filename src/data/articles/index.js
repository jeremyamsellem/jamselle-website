// Auto-discover and import all articles
const articlesContext = require.context('./', false, /\.js$/);
const articlesArray = [];

articlesContext.keys().forEach(key => {
  if (key === './index.js') return;
  const module = articlesContext(key);
  if (module.article) {
    articlesArray.push(module.article);
  }
});

// Sort by date (newest first)
export const getAllArticles = () =>
  articlesArray.sort((a, b) => new Date(b.date) - new Date(a.date));

export const getArticleBySlug = (slug) =>
  getAllArticles().find(a => a.slug === slug);

export const getRecentArticles = (limit = 4) =>
  getAllArticles().slice(0, limit);

export const getArticlesByCategory = (category) =>
  getAllArticles().filter(a => a.category === category);
