import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

import { data } from "../results";

//Must hide API as ENV variable - shown here for demonstrations purposes
const API_KEY = process.env.REACT_APP_API || "c8735f91d97b4c03b04490be531d6e13";

export const ArticlesContext = createContext();

export const ArticlesProvider = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(9);

  useEffect(() => {
    fetchArticles();
  }, []);

  const fetchArticles = async () => {
    setLoading(true);

    try {
      // const res = await axios.get(
      //   `https://newsapi.org/v2/top-headlines?country=gb&pageSize=100&apiKey=${API_KEY}`
      // );
      // let results = res.data.articles;

      // Due to API limitations on Vercel
      const results = data;

      // API does not provide unique IDs to articles, UUID will provide this
      results.map((e) => {
        e.uuid = uuidv4();
      });

      setArticles(results);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ArticlesContext.Provider
      value={[articles, loading, currentPage, articlesPerPage, setCurrentPage]}
    >
      {props.children}
    </ArticlesContext.Provider>
  );
};
