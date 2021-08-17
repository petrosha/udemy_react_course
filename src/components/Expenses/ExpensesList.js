import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = ( { items }) => {
  if( items.length === 0){
    return (<h2 className="expenses-list__fallback">Found no expenses.</h2>);
  } 
  else return(
    <ul className="expenses-list">
      { 
        items.map( el => (
          <ExpenseItem 
            key={ el.id }
            title={ el.title } 
            date={ el.date } 
            amount={ el.amount } 
          />
        ))
      }
    </ul>   
  );
};

export default ExpensesList;
