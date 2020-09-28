import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ articlesPerPage, totalArticles, paginate }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumber.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumber.map((num) => (
          <li key={num}>
            <a onClick={() => paginate(num)} href='!#'>
              {num}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;

Pagination.propTypes = {};
