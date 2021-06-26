import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState('');
  // const [enteredAmount,setEnteredAmount] = useState('');
  // const [enteredDate,setEnteredDate] = useState('');
  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  const titleHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredTitle: event.target.value,
    });
  };
  const amountHandler = (event) => {
    setUserInput({ ...userInput, enteredAmount: event.target.value });
  };
  const dateHandler = (event) => {
    setUserInput({ ...userInput, enteredDate: event.target.value });
  };
  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense_control">
          <label>Title</label>
          <input type="text" onChange={titleHandler} />
        </div>
        <div className="new-expense_control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountHandler}
          />
        </div>

        <div className="new-expense_control">
          <label>Date</label>
          <input
            type="date"
            min="2021-01-01"
            max="2022-01-30"
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
