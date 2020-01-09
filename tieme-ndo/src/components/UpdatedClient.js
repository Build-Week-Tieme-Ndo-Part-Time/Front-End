import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {api} from '../utils/api';

export function UpdatedClient(props) {
  // update useState
  const [update, setUpdate] = useState({
    id: '',
    name: '',
    village: '',
    loanAmount: '',
    loanInitDate: '',
    dueDate: '',
    maizeHarvest: '',
    maizeToSell: ''
  });

  // Axios get request with useEffect. The id is what we are looking for in the dependancy array.
  useEffect(() => {
    api().get(`clients/${props.match.params.id}`)
      .then(res => {
        setUpdate(res.data)
      })
      .catch(error => console.log(error))
  }, [props.match.params.id])

  // return
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      api().put(`/clients/${update.id}`, update)
      props.history.push('/')
    }}
    >
      <input name='name' placeholder='Name' value={update.name} onchange={(e) => {
        setUpdate({...update, [e.target.name]: e.target.value})
      }} />
      <input name='village' placeholder='Village' value={update.village} onchange={(e) => {
        setUpdate({...update, [e.target.name]: e.target.value})
      }} />
      <input name='loanAmount' placeholder='Loan Amount' value={update.loanAmount} onchange={(e) => {
        setUpdate({...update, [e.target.name]: e.target.value})
      }} />
      <input type='date' name='loanInitDate' placeholder='Initial Loan Date' value={update.loanInitDate} onchange={(e) => {
        setUpdate({...update, [e.target.name]: e.target.value})
      }} />
      <input type='date' name='dueDate' placeholder='Due Date' value={update.dueDate} onchange={(e) => {
        setUpdate({...update, [e.target.name]: e.target.value})
      }} />
      <input name='maizeHarvest' placeholder='Number of Bags of Maize Harvested' value={update.maizeHarvest} onchange={(e) => {
        setUpdate({...update, [e.target.name]: e.target.value})
      }} />
      <input name='maizeToSell' placeholder='Number of Bags to Try and Sell' value={update.maizeToSell} onchange={(e) => {
        setUpdate({...update, [e.target.name]: e.target.value})
      }} />
      <button type='submit'>Update Client</button>
    </form>
  )
}
