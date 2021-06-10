import ExpenseDate from "./ExpenseDate";
import classes from "./ExpenseItem.module.css";

const ExpenseItem = (props) => {
  return (
    <li className={classes.expenseItem}>
      {/* <div className={classes.expenseDate}>{props.date}</div> */}
      <ExpenseDate date={props.date} />
      <div className={classes.expenseInfo}>
        <h1>{props.title}</h1>
        <div>${props.amount}</div>
      </div>
    </li>
  );
};

export default ExpenseItem;
