import classes from "./ExpenseDate.module.css";

const ExpenseDate = (props) => {
  const month = props.date.toLocaleString("en-US", {
    month: "long",
  });

  const day = props.date.toLocaleString("en-US", {
    day: "2-digit",
  });

  const year = props.date.getFullYear();

  return (
    <div className={classes.expenseDate}>
      <p>{month}</p>
      <h3>{day}</h3>
      <p>{year}</p>
    </div>
  );
};

export default ExpenseDate;
