import React, { useContext, useEffect } from "react";
import { SelectedArticlesContext } from "../../contexts/SelectedArticleContext";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import { BookmarkBarItem } from "./";
import { BookmarkContainer } from "./BookmarkBarComponentStyle";

const BookmarkBar = () => {
  const selectedArticles = useContext(SelectedArticlesContext)[0];
  const articles = useContext(ArticlesContext)[0];

  useEffect(() => {
    console.log(selectedArticles);
  }, [selectedArticles]);

  return (
    <BookmarkContainer>
      {selectedArticles.map((selected) => {
        return articles
          .filter((value) => value.uuid === selected)
          .map((article, i) => {
            return (
              <BookmarkBarItem
                key={i}
                author={article.author}
                title={article.title}
                uuid={article.uuid}
              />
            );
          });
      })}
    </BookmarkContainer>
  );
};

export default BookmarkBar;
