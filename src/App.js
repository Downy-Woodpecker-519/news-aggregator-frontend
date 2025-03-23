import React, { useEffect, useState } from "react";

function App() {
  const [newsData, setNewsData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://your-api-url.onrender.com/news") // Replace with your actual backend URL
      .then((response) => response.json())
      .then((data) => {
        setNewsData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching news:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1 style={{ textAlign: "center" }}>Personal News Aggregator</h1>
      {newsData &&
        Object.entries(newsData).map(([section, articles]) => (
          <div key={section} style={{ marginBottom: "30px" }}>
            <h2 style={{ borderBottom: "2px solid #333", paddingBottom: "5px" }}>{section}</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {articles.map((article, index) => (
                <li key={index} style={{ marginBottom: "15px" }}>
                  <a href={article.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: "18px", fontWeight: "bold", textDecoration: "none", color: "#007BFF" }}>
                    {article.title}
                  </a>
                  <p style={{ margin: "5px 0", color: "#666" }}>{article.source} | {new Date(article.published).toLocaleString()}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
}

export default App;
