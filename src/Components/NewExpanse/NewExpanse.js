import React, { useState } from "react";
import "./NewExpanse.css";
import ExpanseForm from "./ExpanseForm";

const NewExpanse = (props) => {
  const [isEditButton, setIsEditButton] = useState(false);

  const saveExpanseDataHandler = (enterExpanseData) => {
    const expanseData = {
      ...enterExpanseData,
      id: Math.floor(Math.random().toString()),
    };

    props.onAddExpanse(expanseData);
    setIsEditButton(false);
  };

  const startEditingHandler = () => {
    setIsEditButton(true);
  };

  const stopEditingHandler = () => {
    setIsEditButton(false);
  };

  return (
    <section className="new-expanse">
      {isEditButton && (
        <ExpanseForm
          onSaveExpanseData={saveExpanseDataHandler}
          onCancel={stopEditingHandler}
        />
      )}

      {!isEditButton && (
        <button className="expanse-add-button" onClick={startEditingHandler}>
          Add New Expense
        </button>
      )}
    </section>
  );
};

export default NewExpanse;
