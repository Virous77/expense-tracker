import React from "react";
import "./ExpanseItem.css";

const ExpanseDate = (props) => {
  const month = props.date
    .toLocaleString("en-US", { month: "short" })
    .toUpperCase();
  const year = props.date.getFullYear();
  const day = props.date.getDate("en-US", { date: "numeric" });

  return (
    <h4 className="expanse-dates">
      <div>{month}/</div>
      <div>{year}/</div>
      <div>{day}</div>
    </h4>
  );
};

export default ExpanseDate;
