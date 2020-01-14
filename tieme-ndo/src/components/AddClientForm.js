import React, { useState } from "react";
import { connect } from "react-redux";
import { addClientData } from "../actions";

const AddClientForm = props => {
  const [newClient, setNewClient] = useState({
    id: 0,
    firstname: '',
    lastname: '',
    villagename: '',
    originalloanamount: 0,
    loaninitiationdate: "",
    loanduedate: '',
    amountowed: 0,
    harvestgoal: 0,
    harvestamount: 0
  })

  const handleChanges = e => {
    setNewClient({ ...newClient, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    props.addClientData(newClient);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder='First Name'
          name='First Name'
          type='text'
          value={newClient.FirstName}
          onChange={handleChanges}
        />
        <input
          placeholder='Last Name'
          name='Last Name'
          type='text'
          value={newClient.LastName}
          onChange={handleChanges}
        />
        <input
          placeholder='Village Name'
          name='Village Name'
          type='text'
          value={newClient.VillageName}
          onChange={handleChanges}
        />
        <input
          placeholder='Original Loan'
          name='Original Loan'
          type='text'
          value={newClient.OriginalLoan}
          onChange={handleChanges}
        />
        <input
          placeholder='Loan Initial Date'
          name='Loan Initial Date'
          type='text'
          value={newClient.LoanInitialDate}
          onChange={handleChanges}
        />
        <input
          placeholder='Loan Due Date'
          name='Loan Due Date'
          type='text'
          value={newClient.LoanDueDate}
          onChange={handleChanges}
        />
        <input
          placeholder='Amount Owed'
          name='Amount Owed'
          type='text'
          value={newClient.AmountOwed}
          onChange={handleChanges}
        />
        <input
          placeholder='Harvest Goal'
          name='Harvest Goal'
          type='text'
          value={newClient.HarvestGoal}
          onChange={handleChanges}
        />
        <input
          placeholder='Harvest Amount'
          name='Harvest Amount'
          type='text'
          value={newClient.HarvestAmount}
          onChange={handleChanges}
        />
        <button type='submit'>Add Client</button>
      </form>
    </div>
  )
};

const mapStateToProps = state => {
  return {
    clients: state.clients
  };
};

export default connect(
  mapStateToProps,
  { addClientData }
)(AddClientForm);