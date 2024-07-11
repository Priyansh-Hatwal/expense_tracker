import React, { useContext, useState } from 'react'
import {GlobalContext} from '../context/GlobalState'
const AddTransaction = () => {

    const [text,setText]=useState('');
    const [amount,setAmount]=useState('');
    const{addTransaction}=useContext(GlobalContext);

  function submitHandler(e){
    e.preventDefault();
    const newTransaction={
      id:Math.floor(Math.random()*100000000),
      text:text,
      amount:parseInt(amount)
    }
    addTransaction(newTransaction);
  }


  return (
    <div>
      <h3>Add Transaction</h3>
      <form onSubmit={submitHandler}>
        <div className='form-control'>
        <label htmlFor="text" >Text</label>
        <input type ="text" value={text} placeholder='Enter Text...' id='text' onChange={(e)=>{setText(e.target.value)}}></input>
        </div>
        <div className='form-control'>
        <label htmlFor="amount" >Amount<br/>(negative - expense, positive -income)</label>
        <input type ="number" value={amount}  id="amount" placeholder='Enter Amount...' onChange={(e)=>{setAmount(e.target.value)}}></input>
        </div>
        <button className='btn'>Add Transaction</button>
      </form>
    </div>
  )
}

export default AddTransaction
