import React, { useContext, useEffect } from "react";
import { SelectedArticlesContext } from "../../contexts/SelectedArticleContext";
import { ArticlesContext } from "../../contexts/ArticlesContext";
import { BookmarkBarItem } from "./";
import {
  BookmarkBarContainer,
  BookmarkBarContainerLine,
  BookmarkBarContainerLineItem,
  BookmarkBarContainerContent,
  BookmarkBarContainerTitle,
  BookmarkBarContainerDesc,
  BookmarkBarDivider,
  BookmarkBarItems,
  BookmarkBarWrapper,
} from "./BookmarkBarComponentStyle";

const BookmarkBar = () => {
  const selectedArticles = useContext(SelectedArticlesContext)[0];
  const articles = useContext(ArticlesContext)[0];

  useEffect(() => {}, [selectedArticles]);

  return (
    <BookmarkBarContainer>
      <BookmarkBarWrapper>
        <BookmarkBarContainerLine>
          <BookmarkBarContainerLineItem size='thick' />
          <BookmarkBarContainerLineItem size='med' />
          <BookmarkBarContainerLineItem size='thin' />
        </BookmarkBarContainerLine>
        <BookmarkBarContainerContent>
          <BookmarkBarContainerTitle>Your bookmarks</BookmarkBarContainerTitle>
          <BookmarkBarContainerDesc>
            Articles you bookmark will be added to this list
          </BookmarkBarContainerDesc>
        </BookmarkBarContainerContent>
        <BookmarkBarDivider />
      </BookmarkBarWrapper>
      <BookmarkBarItems>
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
      </BookmarkBarItems>
    </BookmarkBarContainer>
  );
};

export default BookmarkBar;
