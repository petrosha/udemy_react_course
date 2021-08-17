import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const [formShown, setFormShown] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    props.onSubmitHandler({
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    });
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  
  const formCancelHandler = () => {
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    setFormShown(false);
  };

  if(!formShown) return(
    <button onClick={ () => setFormShown(true) }>
      Add New Expense
    </button>
  );

  return (
    <form onSubmit={ submitHandler }>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>  
          <input 
            name="Title" 
            type="text" 
            value={ enteredTitle } 
            onChange={ (e) => setEnteredTitle(e.target.value) }
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>  
          <input 
            name="Amount" 
            type="number" 
            value={ enteredAmount }
            onChange={ (e) => setEnteredAmount(e.target.value) }
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>  
          <input 
            name="Date" 
            type="date" 
            value={ enteredDate } 
            onChange={ (e) => setEnteredDate(e.target.value) }
            min="2019-01-01" 
            max="2022-12-31"
          />
        </div>  
        
        <div className="new-expense__actions">
          <button onClick={ formCancelHandler }>Cancel</button>
          <button type="submit">Add Expense</button>
        </div> 
      </div> 
    </form>  
  );
};

export default NewExpenseForm;