import React, { useState } from "react";
import ExpanseFilter from "./NewExpanse/ExpanseFilter";
import "./ExpanseItem.css";
import ExpencesList from "./NewExpanse/ExpencesList";
import ExpensesChart from "./ExpensesChart";

const ExpanseRender = (props) => {
  const [filterYear, setFilterYear] = useState("2022");

  const filterHandler = (slectYear) => {
    setFilterYear(slectYear);
  };

  ////Filtering Items with date logic
  const filterItems = props.expences.filter((item) => {
    return item.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <div className="main-conta">
        <ExpanseFilter slected={filterYear} onChangeFilter={filterHandler} />
        <ExpensesChart expenses={filterItems} />
        <ExpencesList items={filterItems} />
      </div>
    </div>
  );
};

export default ExpanseRender;
