import React from "react";
import "./ExpanseItem.css";
import ExpanseDate from "./ExpanseDate";

const ExpanseItem = (props) => {
  return (
    <header className="header">
      <ExpanseDate date={props.date} />
      <div className="expanse-details">
        <h2>{props.title}</h2>
        <p className="expanse-price">${props.amount}</p>
      </div>
    </header>
  );
};

export default ExpanseItem;
