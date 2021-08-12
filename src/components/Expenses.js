import React from "react";
import ExpenseItem from "./ExpenseItem";

const Expenses = (props) => {
  return (
    <div>
      {props.expenses.map( el => 
        <ExpenseItem 
          key={ el.id }
          title={ el.title } 
          date={ el.date } 
          amount={ el.amount } 
        />
      )}
    </div>);
};

export default Expenses;