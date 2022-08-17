import React, { useState } from "react";
import "./App.css";
import ExpanseRender from "./Components/ExpanseRender";
import NewExpanse from "./Components/NewExpanse/NewExpanse";

const initialExpances = [
  { id: "e1", title: "Care Insurance", amount: 278.8, date: new Date() },
  { id: "e2", title: "New TV", amount: 400, date: new Date() },
  { id: "e3", title: "Mobile", amount: 178.8, date: new Date() },
  { id: "e4", title: "Laptop", amount: 778.8, date: new Date() },
  { id: "e5", title: "Bikee", amount: 1778.8, date: new Date() },
  { id: "e6", title: "Earphone", amount: 78.8, date: new Date() },
  { id: "e7", title: "Headphone", amount: 102.8, date: new Date() },
];

function App() {
  const [expences, setExpances] = useState(initialExpances);

  const addExapnseHandler = (expence) => {
    setExpances((prevExpances) => {
      return [expence, ...prevExpances];
    });
  };

  return (
    <div className="App">
      <NewExpanse onAddExpanse={addExapnseHandler} />
      <ExpanseRender expences={expences} />
    </div>
  );
}

export default App;
