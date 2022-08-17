import React from "react";
import "./ExpanseFilter.css";

const ExpanseFilter = (props) => {
  const filterChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <main className="expanse-filter">
      <div className="expanse-filter-control">
        <label className="filter-name">Filter by Year</label>
        <select value={props.slected} onChange={filterChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2023</option>
          <option value="2020">2024</option>
          <option value="2019">2025</option>
        </select>
      </div>
    </main>
  );
};

export default ExpanseFilter;
