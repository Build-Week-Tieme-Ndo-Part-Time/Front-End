import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
import { editClient } from "../actions/index";

const UpdatedClient = props => {
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
    setUpdate(props.client);
  }, [props.client, props.update]);

  const submitHandler = e => {
    e.preventDefault();
    console.log(props.client.id);
    props.editClient(update);
  };

  const changeHandler = event => {
    setUpdate({...update, [event.target.name]: event.target.value});
  };

  // return
  return (
    <form onSubmit={submitHandler}>
      <input type='text' name='name' placeholder='Name' value={update.name} onchange={changeHandler} />
      <input type='text' name='village' placeholder='Village' value={update.village} onchange={changeHandler} />
      <input type='text' name='loanAmount' placeholder='Loan Amount' value={update.loanAmount} onchange={changeHandler} />
      <input type='date' name='loanInitDate' placeholder='Initial Loan Date' value={update.loanInitDate} onchange={changeHandler} />
      <input type='date' name='dueDate' placeholder='Due Date' value={update.dueDate} onchange={changeHandler} />
      <input type='text' name='maizeHarvest' placeholder='Number of Bags of Maize Harvested' value={update.maizeHarvest} onchange={changeHandler} />
      <input type='text' name='maizeToSell' placeholder='Number of Bags to Try and Sell' value={update.maizeToSell} onchange={changeHandler} />
      <button type='submit'>Update Client</button>
    </form>
  );
};

const mapStateToProps = state => {
  return {
    editClient: state.editClient
  };
};
export default connect(mapStateToProps, { editClient })(UpdatedClient);
