import React from "react";

const Pagination = (props) => {
  return (
    <nav aria-label="...">
      <ul className="pagination">{props.showPagination}</ul>
    </nav>
  );
};

export default Pagination;
