import React from "react";
import ArticleItem from "./ArticleItem";
import styled from "styled-components";
import PropTypes from "prop-types";

const ArticlesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 75%;
  flex-basis: 75%;
  padding: 32px 0;
`;

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
