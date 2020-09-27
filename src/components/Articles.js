import React from "react";

const Articles = ({ articles, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <ul>
        {articles.map((article, i) => (
          <li key={i}>{article.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Articles;
