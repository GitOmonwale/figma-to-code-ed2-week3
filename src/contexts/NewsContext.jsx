import React, { createContext, useState, useEffect } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/everything?q=bitcoin&apiKey=3e9e2a01288a4af280ed11a9a6743d68');
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching the news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ articles, loading }}>
      {children}
    </NewsContext.Provider>
  );
};
