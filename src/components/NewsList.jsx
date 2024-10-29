import React from 'react';

export default function NewsList({ news, onSelect }) {
  return (
    <div className="news-list">
      {news.map((article) => (
        <div onClick={() => onSelect(article.key)} className="news-card" key={article.key}>
          <img src={article.thumb} alt={article.title} />
          <div className="news-detail">
            <h2>{article.title}</h2>
            <p>{article.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
