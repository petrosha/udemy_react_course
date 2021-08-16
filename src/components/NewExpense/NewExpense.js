import React from "react";
import "./NewExpense.css";
import NewExpenseForm from "./NewExpenseForm"; 

const NewExpense = (props) => {
  const newExpenseHandler = ( val ) => {
    props.addNewExpense({
      ...val,
      id: Math.round(Math.random() * 1000000)
    });
  };

  return(
    <div className="new-expense">
      <NewExpenseForm onSubmitHandler = { newExpenseHandler }/>
    </div>
  );
};

export default NewExpense;