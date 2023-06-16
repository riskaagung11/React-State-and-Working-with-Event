import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredamount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // const [userInput, setUserInput] = useState({
  //   setEnteredTitle: "",
  //   setEnteredAmount: "",
  //   setEnteredDate: "",
  // });

  // const titleChangeHandler = (event) => {
  // setEnteredTitle(event.target.value);

  // setUserInput({
  //   ...userInput,
  //   setEnteredTitle: event.target.value,
  // });

  // setUserInput((prevState) => {
  //   return { ...prevState, setEnteredTitle: event.target.value };
  // });
  // };
  // const amountChangeHandler = (event) => {
  // setEnteredAmount(event.target.value);

  // setUserInput({
  //   ...userInput,
  //   setEnteredAmount: event.target.value,
  // });

  // setUserInput((prevState) => {
  //   return { ...prevState, setEnteredAmount: event.target.value };
  // });
  // };
  // const dateChangeHandler = (event) => {
  // setEnteredDate(event.target.value);

  // setUserInput({
  //   ...userInput,
  //   setEnteredDate: event.target.value,
  // });

  // setUserInput((prevState) => {
  //   return { ...prevState, setEnteredDate: event.target.value };
  // });
  // };

  // alternative
  const inputChangeHandler = (identifier, value) => {
    if (identifier === "title") {
      setEnteredTitle(value);
    } else if (identifier === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input onChange={(event) => inputChangeHandler("title", event.target.value)} type="text" />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input onChange={(event) => inputChangeHandler("amount", event.target.value)} type="number" min="0.01" step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input onChange={(event) => inputChangeHandler("date", event.target.value)} type="date" min="2019-01-01" max="2022-12-31" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
