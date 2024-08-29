import React, { createContext, useState, useEffect } from 'react';

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        // Remplacez 'YOUR_API_KEY' par votre clé API GNews
        const response = await fetch('https://gnews.io/api/v4/search?q=example&lang=en&country=us&max=30&apikey=cc3967a5794438ff5e87760d017b7e36');
        const data = await response.json();
        console.log(data)
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
