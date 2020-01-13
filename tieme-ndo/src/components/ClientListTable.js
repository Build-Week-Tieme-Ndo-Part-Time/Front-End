import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {deleteClient, editClient, fetchClient} from '../actions/index.js';
import UpdatedClient from './UpdatedClient.js';
import { Link } from 'react-router-dom';

const ClientListTable = props => {
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState();
  useEffect(() => {
    console.log('token is in', sessionStorage.getItem('token'))

      props.fetchClient()


  }, [sessionStorage.getItem('token')]
  );

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
        <table>
            <tbody>

        {props.clients.map((client, index) => (

                <tr key={index}>
                    <td>First Name: {client.first_name}</td>
                    <td>Last Name: {client.last_name}</td>
                    <td>Village Name: {client.village_name}</td>
                    <td>Original Loan Amount: ${client.original_loan_amount}</td>
                    <td>Loan Initial Date: {client.loanInitDate}</td>
                    <td>Due Date: {client.dueDate}</td>
                    <td>Amount Owed: ${client.amount_owed}</td>
                    <td>Harvest Goal: {client.harvest_goal}tons</td>
                    <td>Actual Harvest: {client.harvest_amount}tons</td>
                    <td>
                        <button
                            onClick={e => {
                            // console.log('click')
                            e.preventDefault();
                            props.deleteClient(client);
                            }}
                        >
                            delete
                        </button>
                    </td>
                    <td>
                        <Link to='/update-client'> <button>Edit client</button></Link>
                    </td>
            </tr>
        ))}

            </tbody>
        </table>


    </div>
  );
};

const mapStateToProps = state => {
  return {
    clients: state.clients
  };
};

export default connect(mapStateToProps, { deleteClient, editClient, fetchClient })(ClientListTable);
