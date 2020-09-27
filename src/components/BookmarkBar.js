import React, { useContext } from "react";
import styled from "styled-components";
import { SelectedArticlesContext } from "../contexts/SelectedArticleContext";

const BookmarkWrapper = styled.div`
  max-width: 25%;
  flex-basis: 25%;
  background-color: red;
  margin-left: 16px;
`;

const BookmarkBar = () => {
  const selectedArticles = useContext(SelectedArticlesContext)[0];
  return <BookmarkWrapper>Bookmark</BookmarkWrapper>;
};

export default BookmarkBar;
