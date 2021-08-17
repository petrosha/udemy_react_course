import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2021");

  const onSelectedFilterHandler = (val) => {
    setSelectedFilter(val);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter selected = { selectedFilter } onSelectedFilter={ onSelectedFilterHandler }/>
      {props.expenses.filter(el => el.date.getFullYear() === +selectedFilter).map( el => 
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