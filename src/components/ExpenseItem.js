import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  const year = date.getFullYear();
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });

  return (
    <div className="expense-item">
      <div>
        <div>{year}</div>
        <div>{month}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
