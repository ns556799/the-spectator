import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { ReactComponent as Cross } from "../assets/cross.svg";
import { SelectedArticlesContext } from "../../contexts/SelectedArticleContext";

const BookmarkBarItemContainer = styled.div``;
const BookmarkBarItemCol = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;
const BookmarkBarItemHeadline = styled.div`
  font-size: 26px;
  font-family: ${(props) => props.theme.goudyFont};
  font-weight: bold;
  line-height: 1.08;
  color: ${(props) => props.theme.nero};
  margin-bottom: 28px;
  min-height: 160px;
`;
const BookmarkBarItemButton = styled.button`
  width: 24px;
  border-radius: 100%;
  height: 24px;
  line-height: 1;
  box-shadow: inset 0.375rem 0.375rem 0 ${(props) => props.theme.white},
    0.375rem 0.375rem 0 ${(props) => props.theme.lightVenetianRed};
  border: solid 0.5px ${(props) => props.theme.venetianRed};
  background-color: ${(props) => props.theme.lighterVenetianRed};
  cursor: pointer;
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }

  svg {
    height: 10px;

    path {
      fill: ${(props) => props.theme.venetianRed};
    }
  }
`;
const BookmarkBarItemAuthor = styled.div`
  color: ${(props) => props.theme.venetianRed};
  font-family: ${(props) => props.theme.goudyFont};
  font-size: 20px;
  font-style: italic;
  line-height: 1.2;
  margin-bottom: 4px;
`;

const BookmarkBarItemDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: rgba(38, 34, 34, 0.1);
  margin-bottom: 12px;
`;

const BookmarkBarItem = ({ author, title, uuid }) => {
  const [selectedArticles, setSelectedArticles] = useContext(
    SelectedArticlesContext
  );

  useEffect(() => {}, [selectedArticles]);

  function handleArticleSelection(e) {
    const uuid = e.target.dataset.uuid;
    const selArr = selectedArticles;

    var index = selArr.indexOf(uuid);
    console.log(index);
    if (index !== -1) {
      selArr.splice(index, 1);
      setSelectedArticles(selArr);
    }
  }

  return (
    <BookmarkBarItemContainer>
      <BookmarkBarItemCol>
        <BookmarkBarItemAuthor>{author}</BookmarkBarItemAuthor>
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
