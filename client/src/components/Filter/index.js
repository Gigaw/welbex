import React, { useState } from "react";
import NameSelect from "./NameSelect";
import TypeSelect from "./TypeSelect";
import "./styles.css";

function Filter({ filterData, onFilterChange, onFilterSubmit }) {
  const [name, setName] = useState(filterData.filterName);
  const [type, setType] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (value) {
      onFilterSubmit(name, type, value);
    }
  };
  const handleNameSelectChange = (event) => {
    setValue("");
    setType("");
    onFilterChange(event.target.value);
    setName(event.target.value);
  };

  const submitActivity = !!type && !!value;

  return (
    <form className="filter" onSubmit={handleSubmit}>
      <NameSelect name={name} handleNameSelectChange={handleNameSelectChange} />
      {filterData && (
        <>
          <TypeSelect type={type} setType={setType} filterData={filterData} />
          <label className="filter__block">
            <span className="filter__text">filter value</span>
            <input
              type={filterData.valueType}
              value={value}
              onChange={(event) => setValue(event.target.value)}
              className="filter__value"
            />
          </label>
          <button type="submit" disabled={!submitActivity}>
            filter
          </button>
        </>
      )}
    </form>
  );
}

export default Filter;
