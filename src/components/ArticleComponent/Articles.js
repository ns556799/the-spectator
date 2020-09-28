import React from "react";
import { ArticleItem } from "./";
import PropTypes from "prop-types";
import { ArticlesContainer } from "./ArticleComponentStyle";

const Articles = ({ articles, loading }) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <ArticlesContainer>
      {articles.map((article, i) => (
        <ArticleItem
          key={i}
          id={i}
          author={article.author}
          title={article.title}
          urlToImage={article.urlToImage}
          uuid={article.uuid}
        />
      ))}
    </ArticlesContainer>
  );
};

export default Articles;

Articles.propTypes = {
  articles: PropTypes.array,
  loading: PropTypes.bool,
};
