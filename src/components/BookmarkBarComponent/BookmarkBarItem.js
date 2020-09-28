import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import {
  BookmarkBarItemContainer,
  BookmarkBarItemAuthor,
  BookmarkBarItemCol,
  BookmarkBarItemButton,
  BookmarkBarItemHeadline,
  BookmarkBarItemDivider,
} from "./BookmarkBarComponentStyle";
import { SelectedArticlesContext } from "../../contexts/SelectedArticleContext";
import { ReactComponent as Cross } from "../assets/cross.svg";

const BookmarkBarItem = ({ author, title, uuid }) => {
  const [selectedArticles, setSelectedArticles] = useContext(
    SelectedArticlesContext
  );

  useEffect(() => {}, [selectedArticles]);

  function handleArticleSelection(e) {
    const uuid = e.target.dataset.uuid;

    setSelectedArticles(selectedArticles.filter((item) => item !== uuid));
  }

  return (
    <BookmarkBarItemContainer>
      <BookmarkBarItemCol>
        <BookmarkBarItemAuthor>{author || "Unauthored"}</BookmarkBarItemAuthor>
        <BookmarkBarItemButton
          data-uuid={uuid}
          onClick={(e) => handleArticleSelection(e)}
        >
          <Cross />
        </BookmarkBarItemButton>
      </BookmarkBarItemCol>
      <BookmarkBarItemCol>
        <BookmarkBarItemHeadline> {title} </BookmarkBarItemHeadline>
      </BookmarkBarItemCol>
      <BookmarkBarItemDivider />
    </BookmarkBarItemContainer>
  );
};

export default BookmarkBarItem;

BookmarkBarItem.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  uuid: PropTypes.string,
};
