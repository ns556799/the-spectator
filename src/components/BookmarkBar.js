import React from "react";
import styled from "styled-components";
const BookmarkWrapper = styled.div`
  max-width: 25%;
  flex-basis: 25%;
  background-color: red;
  margin-left: 16px;
`;
const BookmarkBar = () => {
  return <BookmarkWrapper>Bookmark</BookmarkWrapper>;
};

export default BookmarkBar;
