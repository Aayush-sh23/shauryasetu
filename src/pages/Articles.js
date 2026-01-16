import React, { useState } from 'react';
import './Articles.css';

const Articles = ({ user }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [bookmarked, setBookmarked] = useState([]);

  const categories = [
    { id: 'all', label: 'All Articles' },
    { id: 'army-life', label: 'Army Life & Training' },
    { id: 'regiments', label: 'Regiments & Traditions' },
    { id: 'border', label: 'Border Service' },
    { id: 'disaster', label: 'Disaster Relief' },
    { id: 'history', label: 'Historical Milestones' }
  ];

  const articles = [
    {
      id: 1,
      title: 'Life at Siachen: The Highest Battlefield',
      category: 'border',
      date: '2024-01-15',
      excerpt: 'Understanding the challenges and valor of soldiers serving at the world\'s highest battlefield at 20,000+ feet.',
      readTime: '8 min read',
      image: '🏔️'
    },
    {
      id: 2,
      title: 'The Gorkha Regiment: Legacy of Bravery',
      category: 'regiments',
      date: '2024-01-10',
      excerpt: 'Exploring the rich history and traditions of one of India\'s most decorated regiments.',
      readTime: '10 min read',
      image: '⚔️'
    },
    {
      id: 3,
      title: 'Operation Rahat: Humanitarian Mission in Yemen',
      category: 'disaster',
      date: '2024-01-05',
      excerpt: 'How the Indian Army evacuated thousands of civilians from war-torn Yemen in 2015.',
      readTime: '6 min read',
      image: '🚁'
    },
    {
      id: 4,
      title: 'Training at NDA: Forging Future Leaders',
      category: 'army-life',
      date: '2023-12-28',
      excerpt: 'A detailed look at the rigorous training regimen at the National Defence Academy.',
      readTime: '12 min read',
      image: '🎓'
    },
    {
      id: 5,
      title: '1971 War: The Birth of Bangladesh',
      category: 'history',
      date: '2023-12-20',
      excerpt: 'Understanding India\'s decisive military victory and its historical significance.',
      readTime: '15 min read',
      image: '📜'
    },
    {
      id: 6,
      title: 'Kargil War: Operation Vijay',
      category: 'history',
      date: '2023-12-15',
      excerpt: 'The story of courage and sacrifice during the 1999 Kargil conflict.',
      readTime: '14 min read',
      image: '🗻'
    }
  ];

  const filteredArticles = selectedCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === selectedCategory);

  const toggleBookmark = (articleId) => {
    if (!user) {
      alert('Please login to bookmark articles');
      return;
    }
    
    if (bookmarked.includes(articleId)) {
      setBookmarked(bookmarked.filter(id => id !== articleId));
    } else {
      setBookmarked([...bookmarked, articleId]);
    }
  };

  return (
    <div className="articles-page">
      <div className="container">
        <div className="page-header">
          <h1>Educational Articles</h1>
          <p>Explore well-researched content about the Indian Army</p>
        </div>

        <div className="category-filter">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`category-btn ${selectedCategory === cat.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="articles-grid">
          {filteredArticles.map(article => (
            <div key={article.id} className="article-card card">
              <div className="article-image">{article.image}</div>
              <div className="article-content">
                <div className="article-meta">
                  <span className="article-date">{article.date}</span>
                  <span className="article-read-time">{article.readTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="article-actions">
                  <button className="btn btn-primary">Read Article</button>
                  <button 
                    className={`bookmark-btn ${bookmarked.includes(article.id) ? 'bookmarked' : ''}`}
                    onClick={() => toggleBookmark(article.id)}
                  >
                    {bookmarked.includes(article.id) ? '★' : '☆'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="no-articles">
            <p>No articles found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;