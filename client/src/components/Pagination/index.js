import React from "react";
import "./styles.css";

const Item = ({ onClick, data, isCurrent }) => {
  const linkClass = isCurrent
    ? "pagination__link pagination__link--current"
    : "pagination__link";
  return (
    <li className="pagination__item">
      <a className={linkClass} onClick={onClick}>
        {data}
      </a>
    </li>
  );
};

function Pagination({totalPages, curPage, onItemClick}) {
  return (
    <div className="pagination">
      <ul className="pagination__list">
        {totalPages.map((el, i) => (
          <Item
            onClick={() => onItemClick(el)}
            key={i}
            data={el}
            isCurrent={el === curPage}
          />
        ))}
      </ul>
    </div>
  );
}

export default Pagination;
