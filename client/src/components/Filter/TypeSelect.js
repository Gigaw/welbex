import React from "react";

const TypeSelect = ({ type, setType, filterData }) => {
  return (
    <label className="filter__block">
      <span className="filter__text">filter type</span>
      <select
        className="filter__select"
        onChange={(event) => setType(event.target.value)}
        value={type}
      >
        <option value=""></option>
        {filterData.filterTypes.map((el, i) => (
          <option value={el} key={i}>
            {el}
          </option>
        ))}
      </select>
    </label>
  );
};

export default TypeSelect;
