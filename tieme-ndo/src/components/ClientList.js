import React, {Component} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import ClientCard from './ClientCard';

export default class ClientList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      clients: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/api/clients')
      .then(res => this.setState({ clients: res.data }))
      .catch(err => console.log(err.response));
  }

  componentDidUpdate() {
    axios
      .get('http://localhost:5000/api/clients')
      .then(res => this.setState({ clients: res.data }))
      .catch(err => console.log(err.response));
  }

  render() {
    return (
      <div className='client-list'>
        {this.state.clients.map(client => (
          <ClientDetails key={client.id} client={client} />
        ))}
      </div>
    );
  }
}

function ClientDetails({ client }) {
  return (
    <Link to={`/clientlist/${client.id}`}>
      <ClientCard client={client} />
    </Link>
  );
}
