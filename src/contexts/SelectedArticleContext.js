import React, { createContext, useState, useEffect } from "react";

export const SelectedArticlesContext = createContext();

export const SelectedArticlesProvider = (props) => {
  useEffect(() => {}, []);
  const [selectedArticles, setSelectedArticles] = useState([]);
  // This array will hold UUID of the user selected articles

  return (
    <SelectedArticlesContext.Provider
      value={[selectedArticles, setSelectedArticles]}
    >
      {props.children}
    </SelectedArticlesContext.Provider>
  );
};
