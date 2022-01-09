import React from "react";
import { filtersConfig } from "../../services";

const NameSelect = ({ name, handleNameSelectChange }) => {
  return (
    <label className="filter__block">
      <span className="filter__text">filter name</span>
      <select
        className="filter__select"
        onChange={handleNameSelectChange}
        value={name}
      >
        {filtersConfig.map((el, i) => (
          <option key={i} value={el.filterName}>
            {el.filterName}
          </option>
        ))}
      </select>
    </label>
  );
};

export default NameSelect;
