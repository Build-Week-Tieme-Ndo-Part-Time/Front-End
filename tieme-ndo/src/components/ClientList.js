import React from 'react';
import {connect} from 'react-redux';
import {deleteClient, editClient} from '../actions/index.js';
import {Link} from 'react-router-dom';
import ClientCard from './ClientCard';
import UpdatedClient from './UpdatedClient.js';

const ClientList = props => {
  console.log(props);
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState();

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      {props.clients.map((client, index) => (
        <div>
          <ClientCard />
          <button
            onClick={e => {
              // console.log('click')
              e.preventDefault();
              props.deleteClient(client);
            }}
          >
            delete
          </button>
          <button
            onClick={e => {
              e.preventDefault();
              handleOpen();
              setItem(client);

              console.log(client);
            }}
          >
            Edit
          </button>
        </div>
      ))}
      <UpdatedClient {...props} category={item} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    clients: state.clients
  };
};

export default connect(mapStateToProps, {deleteClient, editClient})(ClientList);
