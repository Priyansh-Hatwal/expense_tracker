import React,{useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'
const Transaction = (props) => {
    const tr=props.transaction;
    const sign=tr.amount<0?'-':'+';
    const {deleteTransaction}=useContext(GlobalContext);
  return (
    <li className={tr.amount<0?'minus':'plus'}>{tr.text}<span>{sign}₹{Math.abs(tr.amount)}</span><button  onClick={()=>deleteTransaction(tr.id)} className="delete-btn">x</button></li>
  )
}

export default Transaction
