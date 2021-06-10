import AllExpenses from "./components/expenses/AllExpenses";
import Layout from "./components/UI/Layout";
import ExpenseForm from "./components/newExpense/ExpenseForm";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const dataManipulationHandler = (data) => {
    setExpenses((previousState) => {
      setExpenses([data, ...previousState]);
    });
  };

  return (
    <Layout>
      <h1 className="main-heading">React Expense Tracker</h1>
      <ExpenseForm onDataManipulation={dataManipulationHandler} />
      <AllExpenses expenses={expenses} />
    </Layout>
  );
};

export default App;
