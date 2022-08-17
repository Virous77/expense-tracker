import React from "react";
import ExpanseItem from "../ExpanseItem";

const ExpencesList = (props) => {
  let expencesContent = <p className="empty-msg">No Expences Found!!!</p>;

  if (props.items.length === 0) {
    return <div>{expencesContent}</div>;
  }

  return (
    <div>
      {props.items.map((item) => (
        <ExpanseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
        />
      ))}
    </div>
  );
};

export default ExpencesList;
