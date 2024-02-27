// LatestNews.jsx

import React from 'react';
import './LatestNews.css'; // Import your stylesheet

const latestNewsData = [
  {
    id: 1,
    title: 'Breaking News 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam cursus auctor sapien, sit amet rhoncus arcu ultrices vel.',
    date: '2024-03-01',
  },
  {
    id: 2,
    title: 'Latest Update 2',
    content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed vel augue in justo fermentum vulputate.',
    date: '2024-03-02',
  },
  // Add more news articles as needed
];

const LatestNews = () => {
  return (
    <div className="latest-news-container">
      <div className="news-list">
        {latestNewsData.map((news) => (
          <div key={news.id} className="news-item">
            <h3 className="news-title">{news.title}</h3>
            <p className="news-content">{news.content}</p>
            <p className="news-date">{formatDate(news.date)}</p>
            <button className="read-more-button">Read More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString(undefined, options);
};

export default LatestNews;
