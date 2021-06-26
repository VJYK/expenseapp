import ExpenseItem from "../Expenses/ExpenseItem";
import Card from "../UI/Card";
const Expenses = (props)=> {
  return (
    <Card className='expenses'>
      <ExpenseItem
        title={props.items[0].expenseTitle}
        date={props.items[0].expenseDate}
        price={props.items[0].expensePrice}
      />
      <ExpenseItem
        title={props.items[1].expenseTitle}
        date={props.items[1].expenseDate}
        price={props.items[1].expensePrice}
      />
      <ExpenseItem
        title={props.items[2].expenseTitle}
        date={props.items[2].expenseDate}
        price={props.items[2].expensePrice}
      />
      <ExpenseItem
        title={props.items[3].expenseTitle}
        date={props.items[3].expenseDate}
        price={props.items[3].expensePrice}
      />
    </Card>
  );
}

export default Expenses;
