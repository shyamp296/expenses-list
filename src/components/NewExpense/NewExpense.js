import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isEditing, setisEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const editHandler = () => {
    setisEditing(true);
  };

  return (
    <div className="new-expense">
      {!isEditing ? (
        <button onClick={editHandler}> Add new Expenses</button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      )}
    </div>
  );
};

export default NewExpense;
