import { useState } from "react";
import classes from "./ExpenseForm.module.css";
import NewExpense from "./NewExpense";

const ExpenseForm = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const validDataCollectedHandler = (data) => {
    props.onDataManipulation(data);
  };

  const onEditingHandler = () => {
    setIsEditing(true);
  };

  const formCloseHandler = (instruction) => {
    setIsEditing(instruction);
  };

  return (
    <div className={classes.form}>
      {!isEditing && (
        <button onClick={onEditingHandler} className={classes.newExpense}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <NewExpense
          onValidDataCollected={validDataCollectedHandler}
          onSubmission={formCloseHandler}
        />
      )}
    </div>
  );
};

export default ExpenseForm;
