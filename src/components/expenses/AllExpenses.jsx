import classes from "./AllExpenses.module.css";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from "react";
import ChartContainer from "../chart/ChartContainer";

const AllExpenses = (props) => {
  const [currentYear, setCurrentYear] = useState("2021");

  const onFilterHandler = (v) => {
    setCurrentYear(v);
  };

  const filteredExpenses = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === currentYear
  );

  // console.log(filteredExpenses);

  return (
    <>
      <ChartContainer data={filteredExpenses} />
      <ExpenseFilter onFilter={onFilterHandler} selected={currentYear} />
      <ul className={classes.allExpenses}>
        {filteredExpenses.length === 0 && (
          <p className={classes.noExpenses}>
            There are no expenses for the selected year.
          </p>
        )}
        {filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </ul>
    </>
  );
};

export default AllExpenses;
