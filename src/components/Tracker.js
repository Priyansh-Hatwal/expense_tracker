import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
const Tracker = () => {
  const {transactions}=useContext(GlobalContext);
  
  const amount=transactions.map(tr=>tr.amount);
  const income=amount.filter(it=>it>0).reduce((acc,val)=>(acc+=val),0).toFixed(2);
  const expense=(amount.filter(it=>it<0).reduce((acc,val)=>(acc+=val),0)*-1).toFixed(2);


  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p  className="money-plus">₹{income}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money-minus">₹{expense}</p>
      </div>
    </div>
  )
}

export default Tracker
