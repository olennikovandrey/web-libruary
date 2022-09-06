import React from "react";
import PropTypes from "prop-types";

export default function Pagination(props) {
  const { booksPerPage, totalBooks, paginate, currentPage } = props;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil( totalBooks / booksPerPage); i ++) {
    pageNumbers.push(i);
  }

  return (
    <div className="pagination">
      {
        pageNumbers.map(number => (
          <div
            className="pagination__item"
            key={ number }
            onClick={ () => paginate(number) }
            data-state={ number === currentPage ? "active" : "" }
          >
            { number }
          </div>
        ))
      }
    </div>
  );
}

Pagination.propTypes = {
  booksPerPage: PropTypes.number,
  totalBooks: PropTypes.number,
  currentPage: PropTypes.number,
  paginate: PropTypes.func
};
