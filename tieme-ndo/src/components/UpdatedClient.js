import React, {useState,useEffect} from 'react';
import { connect } from "react-redux";
import { editClient } from "../actions/index";

const UpdatedClient = props => {
  // update useState
  const [update, setUpdate] = useState({
    id: '',
    first_name: '',
    last_name: '',
    village_name: '',
    original_loan_amount: '',
    loanInitDate: '',
    dueDate: '',
    amount_owed: '',
    harvest_goal: '',
    harvest_amount: ''
  });

  // Axios get request with useEffect. The id is what we are looking for in the dependancy array.
  useEffect(() => {
    console.log(props.update, "console log 20", props.clients)
    setUpdate(props.client);
  }, [props.client, props.update]);

  const submitHandler = e => {
    e.preventDefault();
    console.log(props.client.id, "console log 26");
    props.editClient(update);
  };

  const changeHandler = event => {
    setUpdate({...update, [event.target.name]: event.target.value});
    console.log(props.update, "console.log 32");
  };

  console.log(update, "33");
  // return
  return (
    <form onChange={submitHandler}>
      <input name='id' placeholder='Id' value={update.id} onChange={changeHandler}/>
      <input name='first_name' placeholder='First Name' value={update.first_name} onChange={changeHandler}/>
      <input name='last_name' placeholder='Last Name' value={update.last_name} onChange={changeHandler} />
      <input name='village_name' placeholder='Village' value={update.village_name} onChange={changeHandler} />
      <input name='original_loan_amount' placeholder='Loan Amount' value={update.original_loan_amount} onChange={changeHandler} />
      <input type='date' name='loanInitDate' placeholder='Initial Loan Date' value={update.loanInitDate} onChange={changeHandler} />
      <input type='date' name='dueDate' placeholder='Due Date' value={update.dueDate} onChange={changeHandler} />
      <input name='amount_owed' placeholder='Amount Owed' value={update.amount_owed} onChange={changeHandler} />
      <input name='harvest_goal' placeholder='Number of Bags of Maize Goaled to Harvest' value={update.harvest_goal} onChange={changeHandler} />
      <input name='harvest_amount' placeholder='Number of Bags of Maize Harvested' value={update.harvest_amount} onChange={changeHandler} />
      <button type='submit'>Update Client</button>
    </form>
  );
  console.log(update.first_name);
};


const mapStateToProps = state => {
  return {
    editClient: state.editClient
  };
};
export default connect(mapStateToProps, { editClient })(UpdatedClient);
