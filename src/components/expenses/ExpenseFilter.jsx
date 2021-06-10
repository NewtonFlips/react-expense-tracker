import classes from "./ExpenseFilter.module.css";

const ExpenseFilter = (props) => {
  const optionsChangeHandler = (event) => {
    props.onFilter(event.target.value);
  };

  return (
    <div className={classes.expenseFilterContainer}>
      <h2>Filter Expenses by Year</h2>
      <select value={props.selected} onChange={optionsChangeHandler}>
        <option value="2022">2022</option>
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
