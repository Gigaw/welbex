import React, { useEffect, useState } from "react";

import "./App.css";
import Pagination from "./components/Pagination";
import Table from "./components/Table";
import Filter from "./components/Filter";
import { getRows, filtersConfig } from "./services";

function App() {
  const [rows, setRows] = useState([]);
  const [curPage, setCurPage] = useState(0);
  const [totalPages, setTotalPages] = useState([]);
  const [filterData, setFilterData] = useState(filtersConfig[0]);
  const [curFilter, setCurFilter] = useState(null);

  const getData = async (page) => {
    const newData = await getRows(page, curFilter);
    if (newData) {
      setRows(newData.data);
      setCurPage(+newData.page);
      const pages = [];
      for (let i = 1; i <= newData.pagesTotal; i++) {
        pages.push(i);
      }
      setTotalPages(pages);
    }
  };

  const handlePaginationClick = (page) => {
    getData(page);
  };

  const handleFilterNameChange = (filterName) => {
    const filterIndex = filtersConfig.findIndex(
      (el) => el.filterName === filterName
    );
    if (filterIndex !== -1) {
      setFilterData(filtersConfig[filterIndex]);
    }
  };

  const handleFilterSubmit = (filter, filterType, filterValue) => {
    setCurFilter({
      filter,
      filterType,
      filterValue,
    });
  };

  useEffect(() => {
    getData(1);
  }, [curFilter]);

  return (
    <div className="App">
      <Filter
        filterData={filterData}
        onFilterChange={handleFilterNameChange}
        onFilterSubmit={handleFilterSubmit}
      />
      <Table data={rows} />
      <Pagination
        totalPages={totalPages}
        curPage={curPage}
        onItemClick={handlePaginationClick}
      />
    </div>
  );
}

export default App;
