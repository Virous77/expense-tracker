import React, { useState } from "react";
import "./NewExpanse.css";

const ExpanseForm = (props) => {
  const [enterTitle, setEnterTitle] = useState("");
  const [enterAmount, setEnterAmount] = useState("");
  const [enterDate, setEnterDate] = useState("");

  const tiltleChangeHandler = (event) => {
    setEnterTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnterAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnterDate(event.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const expanseData = {
      title: enterTitle,
      amount: enterAmount,
      date: new Date(enterDate),
    };

    props.onSaveExpanseData(expanseData);
    setEnterTitle("");
    setEnterAmount("");
    setEnterDate("");
  };

  return (
    <div className="main-main">
      <form onSubmit={submitHandler}>
        <div className="new-expanse-control">
          <div className="new-expanse-controls">
            <label>Title</label>
            <input
              type="text"
              value={enterTitle}
              onChange={tiltleChangeHandler}
              required
            />
          </div>

          <div className="new-expanse-controls">
            <label>Amount</label>
            <input
              type="number"
              value={enterAmount}
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
            />
          </div>

          <div className="new-expanse-controls">
            <label>Date</label>
            <input
              type="date"
              value={enterDate}
              min="2019-01-01"
              max="2024-12-31"
              onChange={dateChangeHandler}
            />
          </div>
        </div>

        <div className="new-expanse-action">
          <button
            className="expanse-add-button"
            type="button"
            onClick={props.onCancel}
          >
            Cancel
          </button>
          <button className="expanse-add-button" type="submit">
            Add Expense Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default ExpanseForm;
