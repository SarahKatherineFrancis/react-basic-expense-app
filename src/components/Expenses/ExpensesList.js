import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ({ expenses }) => {
  let expenseContent = (
    <h2 className="expenses-list__fallback">No expenses found</h2>
  );

  if (expenses.length > 0) {
    expenseContent = expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return <ul className="expenses-list">{expenseContent}</ul>;
};

export default ExpensesList;
