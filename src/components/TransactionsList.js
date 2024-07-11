import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
import Transaction from './Transaction';
const TransactionsList = () => {
  const {transactions}=useContext(GlobalContext);
   
  return (
    <div>
      <h3>History</h3>
      <ul className="list" >
      {
        transactions.map(tr=>(<Transaction key={tr.id} transaction={tr} />))
      }
      </ul>

    </div>
  )
}

export default TransactionsList
