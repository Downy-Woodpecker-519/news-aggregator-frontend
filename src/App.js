import React, { useState, useEffect } from "react";

const API_URL = "https://downy-woodpecker-news.onrender.com/news"; // Replace with your actual Render API URL

const NewsApp = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setArticles(data.articles);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Personal News Aggregator</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index} className="mb-4 p-4 border rounded-lg shadow">
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                <h2 className="text-xl font-semibold">{article.title}</h2>
              </a>
              <p className="text-sm text-gray-500">
                🕒 {article.published} | 📰 {article.source}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NewsApp;
