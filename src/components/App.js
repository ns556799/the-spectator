import React, { useContext } from "react";
import styled from "styled-components";
import { Articles } from "./ArticleComponent";
import { Pagination } from "./includes";
import { BookmarkBar } from "./BookmarkBarComponent";
import { Header, Footer } from "./includes";
import { ArticlesContext } from "../contexts/ArticlesContext";
import { ArticleWrapper } from "./ArticleComponent/ArticleComponentStyle";

const AppContainer = styled.div``;

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
      </ArticleWrapper>
      <Pagination
        articlesPerPage={articlesPerPage}
        currentPage={currentPage}
        totalArticles={articles.length}
        paginate={paginate}
      />
      <Footer />
    </AppContainer>
  );
};

export default App;
