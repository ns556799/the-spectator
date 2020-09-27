import React, { useState, useContext, useEffect } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import * as animationData from "./assets/loader.json";
import { ReactComponent as Star } from "./assets/star.svg";
import { SelectedArticlesContext } from "../contexts/SelectedArticleContext";

const ArticleItemContainer = styled.div`
  max-width: calc(100% / 3 - 32px);
  flex-basis: calc(100% / 3 - 32px);
  margin: 0 16px;
`;
const ArticleItemAuthor = styled.div`
  color: ${(props) => props.theme.venetianRed};
  font-family: ${(props) => props.theme.goudyFont};
  font-size: 20px;
  font-style: italic;
  line-height: 1.2;
  margin-bottom: 4px;
`;
const ArticleItemHeadline = styled.div`
  font-size: 26px;
  font-family: ${(props) => props.theme.goudyFont};
  font-weight: bold;
  line-height: 1.08;
  color: ${(props) => props.theme.nero};
  margin-bottom: 28px;
  min-height: 160px;
`;
const ArticleItemButton = styled.button`
  margin-bottom: 37px;
  color: ${(props) => props.theme.venetianRed};
  text-transform: uppercase;
  background-color: ${(props) => props.theme.lighterVenetianRed};
  position: relative;
  font-weight: 600;
  font-size: 16px;
  font-family: ${(props) => props.theme.josefinFont};
  border-radius: 20px;
  padding: 6px 50px 6px 30px;
  border: 2px solid ${(props) => props.theme.venetianRed};
  line-height: 1;
  cursor: pointer;
  box-shadow: inset 0.3rem 0.2rem 0 #fff,
    0.375rem 0.375rem 0 ${(props) => props.theme.lighterVenetianRed};
  transition: box-shadow 0.5s ease-in;

  &:active,
  &:focus {
    outline: none;
  }

  &:after {
    position: absolute;
    content: "";
    display: block;
    height: 100%;
    width: 100%;
    background-color: transparent;
    top: 0;
    left: 0;
  }

  &:hover {
    box-shadow: inset 0.3rem 0.2rem 0 #fff,
      0.375rem 0.375rem 0 ${(props) => props.theme.lightVenetianRed};

    transition: box-shadow 0.5s ease-in;
  }
`;

const ArticleItemButtonContent = styled.span`
  position: relative;
  margin-right: 10px;
  svg {
    max-width: 15px;
    position: absolute;
    top: 50%;
    right: -20px;
    transform: translate(5px, -55%);
  }
  &:before {
    display: block;
  }
`;

const ArticleItemImageWrapper = styled.div`
  width: 100%;
  position: relative;
  background-color: red;
  margin-bottom: 16px;

  &:after {
    content: "";
    display: block;
    padding-bottom: 56%;
  }

  [role="button"] {
    position: absolute;
    z-index: 1;
  }
`;
const ArticleItemImage = styled.img`
  width: 100%;
  position: absolute;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
  object-position: center center;
  z-index: 2;
`;

const ArticleItemDivider = styled.div`
  width: 100%;
  display: block;
  height: 1px;
  background-color: ${(props) => props.theme.lighterNero};
  margin-bottom: 16px;
`;

const ArticleItem = ({ author, title, urlToImage, id, uuid }) => {
  const [selectedArticles, setSelectedArticles] = useContext(
    SelectedArticlesContext
  );
  const [stopStatus, setStopStatus] = useState(false);

  useEffect(() => {}, []);

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  function handleImageLoaded() {
    setStopStatus(true);
  }

  function handleArticleSelection(e) {
    const uuid = e.target.dataset.uuid;

    setSelectedArticles((prevArr) => [...prevArr, uuid]);
  }

  return (
    <ArticleItemContainer id={id}>
      <ArticleItemAuthor>{author || "Unauthored"}</ArticleItemAuthor>
      <ArticleItemHeadline>{title}</ArticleItemHeadline>
      <ArticleItemButton
        data-uuid={uuid}
        onClick={(e) => handleArticleSelection(e)}
      >
        <ArticleItemButtonContent>
          Add <Star />
        </ArticleItemButtonContent>
      </ArticleItemButton>
      <ArticleItemImageWrapper>
        <ArticleItemImage
          src={urlToImage}
          alt='article'
          onLoad={handleImageLoaded}
        />
        <Lottie
          options={defaultOptions}
          isStopped={stopStatus}
          isPaused={false}
        />
      </ArticleItemImageWrapper>
      <ArticleItemDivider />
    </ArticleItemContainer>
  );
};

export default ArticleItem;

ArticleItem.propTypes = {
  author: PropTypes.string,
  title: PropTypes.string,
  urlToImage: PropTypes.string,
  id: PropTypes.number,
  uuid: PropTypes.string,
};