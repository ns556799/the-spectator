import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Lottie from "react-lottie";
import * as animationData from "../assets/loader.json";
import { ReactComponent as Star } from "../assets/star.svg";
import { ReactComponent as Tick } from "../assets/tick.svg";

import {
  ArticleItemAuthor,
  ArticleItemButton,
  ArticleItemButtonContent,
  ArticleItemDivider,
  ArticleItemImage,
  ArticleItemImageWrapper,
  ArticleItemContainer,
  ArticleItemHeadline,
} from "./ArticleComponentStyle";

import { SelectedArticlesContext } from "../../contexts/SelectedArticleContext";

const ArticleItem = ({ author, title, urlToImage, id, uuid }) => {
  const [selectedArticles, setSelectedArticles] = useContext(
    SelectedArticlesContext
  );

  const [stopStatus, setStopStatus] = useState(false);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    selectedArticles.includes(uuid) ? setDisabled(true) : setDisabled(false);
  }, [selectedArticles, uuid]);

  // Lottie animation opts
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // cb when img has loaded
  function handleImageLoaded() {
    setStopStatus(true);
  }

  function handleArticleSelection(e) {
    const uuid = e.target.dataset.uuid;
    if (!selectedArticles.includes(uuid)) {
      setSelectedArticles((prevArr) => [...prevArr, uuid]);
    }
  }

  const ButtonText = () => {
    return disabled ? (
      <React.Fragment>
        Added <Tick />
      </React.Fragment>
    ) : (
      <React.Fragment>
        Add <Star />
      </React.Fragment>
    );
  };

  return (
    <ArticleItemContainer id={id}>
      <ArticleItemAuthor>{author || "Unauthored"}</ArticleItemAuthor>
      <ArticleItemHeadline>{title}</ArticleItemHeadline>
      <ArticleItemButton
        data-uuid={uuid}
        disabled={disabled}
        onClick={(e) => handleArticleSelection(e)}
      >
        <ArticleItemButtonContent>
          <ButtonText />
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
