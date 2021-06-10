import { useState } from "react";
import classes from "./NewExpense.module.css";

const NewExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const gatheredData = {
    id: Math.random(),
    title: enteredTitle.trim(),
    amount: Number(enteredAmount),
    date: new Date(enteredDate),
  };

  //   props.onFormSubmit(gatheredData);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (
      gatheredData.title.trim() !== "" &&
      gatheredData.amount !== "" &&
      gatheredData.date.getFullYear() > 2019 &&
      gatheredData.date.getFullYear() < 2023
    ) {
      props.onValidDataCollected(gatheredData);

      setEnteredTitle("");
      setEnteredAmount("");
      setEnteredDate("");
    }
  };

  const formCancelHandler = () => {
    props.onSubmission(false);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={classes.fieldsContainer}>
        <div className={classes.expenseField}>
          <label htmlFor="title">Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
            id="title"
            placeholder="Expense Description"
          />
        </div>
        <div className={classes.expenseField}>
          <label htmlFor="amount">Amount</label>
          <input
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="number"
            id="amount"
            placeholder="$$"
          />
        </div>
        <div className={classes.expenseField}>
          <label htmlFor="date">Date</label>
          <input
            onChange={dateChangeHandler}
            value={enteredDate}
            type="date"
            id="date"
          />
        </div>
      </div>
      <div className={classes.actionsContainer}>
        <button onClick={formCancelHandler} type="button">
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default NewExpense;
