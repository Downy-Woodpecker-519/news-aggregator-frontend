import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

const API_URL = "https://mynewsapi.onrender.com/news"; // Replace with your Render API URL

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
    <div className="container mx-auto p-4 font-sans bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center text-blue-700">Personal News Aggregator</h1>
      {loading ? (
        <p className="text-lg text-gray-700 text-center">Loading...</p>
      ) : (
        <ul>
          {articles.map((article, index) => (
            <li key={index} className="mb-6 p-6 border rounded-lg shadow-lg bg-white">
              <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-2xl font-semibold text-blue-600 hover:underline">
                {article.title}
              </a>
              <p className="text-md text-gray-600 mt-2">
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
