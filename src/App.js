import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Articles from "./components/Articles";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage, setArticlesPerPage] = useState(10);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=gb&pageSize=100&apiKey=c8735f91d97b4c03b04490be531d6e13"
      );
      setArticles(res.data.articles);
      setLoading(false);
    };

    fetchArticles();
  }, []);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  return (
    <div className='container'>
      <Articles articles={currentArticles} loading={loading} />
    </div>
  );
};

export default App;
