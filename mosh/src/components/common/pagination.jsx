import React from "react";

const Pagination = (props) => {
  let { pageNumbers, currentPage, onChangePage } = props;
  if (pageNumbers == 1) return; // just one page so don't show the pagination at all

  let output = [];
  for (let page = 1; page <= pageNumbers; page++) {
    output.push(
      <li
        key={page}
        onClick={() => onChangePage(page)}
        className={"page-item " + (currentPage == page ? "active" : "")}
        style={{
          cursor: "pointer",
        }}
      >
        <a className="page-link">{page}</a>
      </li>
    );
  }

  return (
    <nav aria-label="...">
      <ul className="pagination">{output}</ul>
    </nav>
  );
};

export default Pagination;
