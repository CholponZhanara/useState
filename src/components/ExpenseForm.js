import { useState } from 'react'
import "./ExpenseForm.css"

const ExpenseForm = () => {
  const [title, setTitle]=useState('');
  const [amount, setAmount]=useState('');
  const [date, setDate]=useState('');
  

  const titleChangeHandler = (event) =>{
        setTitle(event.target.value)

  }
  const amountChangeHandler = (event) =>{
        setAmount(event.target.value)

  }
  const dateChangeHandler = (event) =>{
        setDate(event.target.value)

  }
const submitHandler = (event)=>{
      event.preventDefault()
      console.log(title)
      console.log(amount)
      console.log(date)
  }
    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input name='title' type='text' onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input name='amount' type='number'  step="1" onChange={amountChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input name='date' type='date' onChange={dateChangeHandler} />
                </div>
            </div>
            <div className='new-expense__actions'>
            <button type="submit">Add Expense</button>
            </div>
            
        </form>
    )
}
export default ExpenseForm