import React, { useContext } from "react";
import styled from "styled-components";
import { Articles } from "./ArticleComponent";
import { Pagination } from "./includes";
import { BookmarkBar } from "./BookmarkBarComponent";
import { Header } from "./includes";
import { ArticlesContext } from "../contexts/ArticlesContext";

const AppContainer = styled.div``;

const ArticleWrapper = styled.div`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  min-width: 240px;
  max-width: 1220px;
  position: relative;
  max-width: 1220px;
  padding-left: 10px;
  padding-right: 10px;
  zoom: 1;
  display: flex;
  flex-direction: row;
`;

const App = () => {
  const [
    articles,
    loading,
    currentPage,
    articlesPerPage,
    setCurrentPage,
  ] = useContext(ArticlesContext);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = articles.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (number) => setCurrentPage(number);

  return (
    <AppContainer>
      <Header />
      <ArticleWrapper>
        <Articles articles={currentArticles} loading={loading} />
        <BookmarkBar />
        {/* <Pagination
        articlesPerPage={articlesPerPage}
        totalArticles={articles.length}
        paginate={paginate}
      /> */}
      </ArticleWrapper>
    </AppContainer>
  );
};

export default App;
