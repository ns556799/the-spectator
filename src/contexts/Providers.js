import React from "react";
import { ArticlesProvider } from "./ArticlesContext";
import { SelectedArticlesProvider } from "./SelectedArticleContext";

const Providers = (props) => {
  return (
    <ArticlesProvider>
      <SelectedArticlesProvider>{props.children}</SelectedArticlesProvider>
    </ArticlesProvider>
  );
};

export default Providers;
