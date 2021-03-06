import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
import React ,{useState} from 'react';
const ExpenseItem = (props)=> {
    const [title, setTitle] = useState(props.title)

   // let title = props.title
    const clickHandler =()=>{
        setTitle('Updated')
        //title = 'Updated!!'
        console.log(title)
    };
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>${props.price}</div>
            </div>
            <button onClick={clickHandler}>Click Button</button>
        </Card>
    )
}

export default ExpenseItem;
