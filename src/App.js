import React, { useState } from "react"

import NewExpense from "./components/NewExpense/NewExpense"
import Expenses from "./components/Expenses/Expenses"

const App = () => {
  const dummy_expenses = [];

  const [expenses, setExpenses] = useState(dummy_expenses)
  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
