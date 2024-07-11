import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
const Balance = () => {
  const {transactions}=useContext(GlobalContext);
  const amounts=transactions.map(tr=>tr.amount);
  const total=amounts.reduce((acc,items)=>(acc+=items),0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">₹{total}</h1>
    </div>
  )
}

export default Balance
