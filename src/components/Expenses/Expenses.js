import React from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";

import "./Expenses.css";

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.expenses.map( el => 
        <ExpenseItem 
          key={ el.id }
          title={ el.title } 
          date={ el.date } 
          amount={ el.amount } 
        />
      )}
    </Card>);
};

export default Expenses;