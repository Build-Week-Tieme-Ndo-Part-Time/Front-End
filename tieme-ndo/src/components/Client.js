import React from 'react';
import axios from 'axios';
import ClientCard from './ClientCard';
import {Link} from 'react-router-dom';
import {api} from '../utils/api';

export default class Client extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      client: null
    };
  }

  componentDidMount() {
    this.fetchClient(this.props.match.params.id);
  }

  componentWillRecieveProps(newProps) {
    if (this.props.match.params.id !== newProps.match.params.id) {
      this.fetchClient(newProps.match.params.id);
    }
  }

  fetchClient = id => {
    axios
    .get(`http://localhost:5000/api/clients/${id}`)
    .then(res => this.setState({ client: res.data }))
    .catch(err => console.log(err.response));
  };

  render() {
    if(!this.state.client) {
      return <div>Loding client information...</div>;
    }

    return (
      <div className='save-wrapper'>
        <ClientCard client={this.state.client} />
        <Link to={`/update-client/${this.state.client.id}`}>Update Client</Link>
        <button onClick={(e) => {
          e.preventDefault()
          api().delete(`/clients/${this.state.client.id}`)
            .then(res =>{
              console.log(res)
              this.props.history.push('/')
            })
            .catch(err => console.log(err))
        }}>Delete Client</button>
      </div>
    );
  }
}
