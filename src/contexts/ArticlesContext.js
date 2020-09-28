import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const API_KEY = process.env.REACT_APP_API;

export const ArticlesContext = createContext();

export const ArticlesProvider = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(9);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const res = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=gb&pageSize=100&apiKey=${API_KEY}`
      );

      let results = res.data.articles;

      // API does not provide unique IDs to articles, UUID will provide this
      results.map((e) => {
        e.uuid = uuidv4();
      });

      setArticles(results);
      setLoading(false);
    };

    fetchArticles();
  }, []);
  return (
    <ArticlesContext.Provider
      value={[articles, loading, currentPage, articlesPerPage, setCurrentPage]}
    >
      {props.children}
    </ArticlesContext.Provider>
  );
};
