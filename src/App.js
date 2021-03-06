import Expenses from "./components/Expenses/Expenses";
import "./App.css";
import React from "react";
import NewExpense from "./components/NewExpenses/NewExpense";
const App = ()=> {
const expenses = [
  {expenseDate: new Date(2021,3,10),expenseTitle:'Car Insurance', expensePrice:200},
  {expenseDate: new Date(2021,2,12),expenseTitle:'Toilet Papper', expensePrice:300},
  {expenseDate: new Date(2021,10,19),expenseTitle:'Mobile Recharge', expensePrice:250},
  {expenseDate: new Date(2021,9,31),expenseTitle:'Gas Booking', expensePrice:350}
]

// return React.createElement(
//   'div',
//   {},
//   React.createElement('h1',{}, 'Let\'s get started!'),
//   React.createElement(Expenses,{items:expenses})
//)
 return (
  <div className='expenses'>
    <NewExpense/>
    <Expenses items={expenses}/>
  </div> 
 )
}

export default App;
