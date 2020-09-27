import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import { SelectedArticlesContext } from "../contexts/SelectedArticleContext";
import { ArticlesContext } from "../contexts/ArticlesContext";

const BookmarkWrapper = styled.div`
  max-width: 25%;
  flex-basis: 25%;
  background-color: red;
  margin-left: 16px;
`;

const BookmarkBar = () => {
  const selectedArticles = useContext(SelectedArticlesContext)[0];
  const articles = useContext(ArticlesContext)[0];

  return (
    <BookmarkWrapper>
      {selectedArticles.map((selected) => {
        return articles
          .filter((value) => value.uuid === selected)
          .map((article, i) => {
            return <li key={i}>{article.title}</li>;
          });
      })}
    </BookmarkWrapper>
  );
};

export default BookmarkBar;
