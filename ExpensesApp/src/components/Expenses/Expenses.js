import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

import "./Expenses.css";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [selectedFilter, setSelectedFilter] = useState("2021");

  const onSelectedFilterHandler = (val) => {
    setSelectedFilter(val);
  };

  const filteredExpenses = props.expenses.filter(
    el => el.date.getFullYear() === +selectedFilter
  );
  


  return (
    <Card className="expenses">
      <ExpensesFilter selected = { selectedFilter } onSelectedFilter={ onSelectedFilterHandler }/>
      <ExpensesChart expenses={ filteredExpenses }/>
      <ExpensesList items = { filteredExpenses } />
    </Card>);
};

export default Expenses;