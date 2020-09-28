import React from "react";
import PropTypes from "prop-types";
import {
  PaginationNav,
  PaginationNavList,
  PaginationNavListItem,
  PaginationNavListItemLink,
} from "./IncludesComponentStyles";
const Pagination = ({
  articlesPerPage,
  currentPage,
  totalArticles,
  paginate,
}) => {
  const pageNumber = [];
  // Calculate how many pages of results + round up
  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumber.push(i);
  }

  function handlePaginationClick(e, num) {
    e.preventDefault();
    paginate(num);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <PaginationNav>
      <PaginationNavList>
        {pageNumber.map((num) => (
          <PaginationNavListItem
            key={num}
            active={num === currentPage ? true : false}
          >
            <PaginationNavListItemLink
              onClick={(e) => handlePaginationClick(e, num)}
              href='!#'
            >
              {num}
            </PaginationNavListItemLink>
          </PaginationNavListItem>
        ))}
      </PaginationNavList>
    </PaginationNav>
  );
};

export default Pagination;

Pagination.propTypes = {
  articlesPerPage: PropTypes.number,
  currentPage: PropTypes.number,
  totalArticles: PropTypes.number,
  paginate: PropTypes.func,
};
