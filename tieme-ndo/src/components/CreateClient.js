import React, { useState } from "react";
import { connect } from "react-redux";
import { addClient } from "../actions/index";

const CreateClient = props => {
  const [newClient, setNewClient] = useState({
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

  const changeHandler = e => {
    setNewClient({
      ...newClient,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.addClient(newClient);
    props.history.push('/');
  };
  return (
    <div>

      <h1>Create Client</h1>

      <form>
        <input name='first_name' placeholder='First Name' value={newClient.first_name} onChange={changeHandler} />
        <input name='last_name' placeholder='Last Name' value={newClient.last_name} onChange={changeHandler} />
        <input name='village_name' placeholder='Village' value={newClient.village_name} onChange={changeHandler} />
        <input name='original_loan_amount' placeholder='Loan Amount' value={newClient.original_loan_amount} onChange={changeHandler} />
        <input type='date' name='loanInitDate' placeholder='Initial Loan Date' value={newClient.loanInitDate} onChange={changeHandler} />
        <input type='date' name='dueDate' placeholder='Due Date' value={newClient.dueDate} onChange={changeHandler} />
        <input name='amount_owed' placeholder='Amount Owed' value={newClient.amount_owed} onChange={changeHandler} />
        <input name='harvest_goal' placeholder='Number of Bags of Maize Goaled to Harvest' value={newClient.harvest_goal} onChange={changeHandler} />
        <input name='harvest_amount' placeholder='Number of Bags of Maize Harvested' value={newClient.harvest_amount} onChange={changeHandler} />
        <button onClick={handleSubmit}>Create Client</button>
      </form>
    </div>
  );
};
const mapStateToProps = state => {
  return {
    addClient: state.addClient
  };
};
export default connect(mapStateToProps, { addClient })(CreateClient);
