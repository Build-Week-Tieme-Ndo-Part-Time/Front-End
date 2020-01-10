import React from 'react';
import axios from 'axios';
import ClientCard from './ClientCard';
import { Link } from 'react-router-dom';
import { api } from '../utils/api';

export default class Client extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      clients: [
        {
          id: 0,
          name: 'Bob',
          village: 'MARAKA',
          loanAmount: 200,
          loanInitDate: Date.now(),
          dueDate: '1995-12-17T03:24:00',
          maizeHarvest: 50,
          maizeToSell: 25
        },
        {
          id: 1,
          name: 'Stephen',
          village: 'MARAKA',
          loanAmount: 200,
          loanInitDate: Date.now(),
          dueDate: '1995-12-17T03:24:00',
          maizeHarvest: 50,
          maizeToSell: 25
        },
        {
          id: 2,
          name: 'Rob',
          village: 'MARAKA',
          loanAmount: 200,
          loanInitDate: Date.now(),
          dueDate: '1995-12-17T03:24:00',
          maizeHarvest: 50,
          maizeToSell: 25
        }
      ]
    };
  }

  // componentDidMount() {
  //   this.fetchClient(this.props.match.params.id);
  // }

  // componentWillRecieveProps(newProps) {
  //   if (this.props.match.params.id !== newProps.match.params.id) {
  //     this.fetchClient(newProps.match.params.id);
  //   }
  // }

  // fetchClient = id => {
  //   axios
  //     .get(`https://build-tieme.herokuapp.com/clients`)
  //   .then(res => this.setState({ client: res.data }))
  //   .catch(err => console.log(err.response));
  // };

  // render() {
  //   if(!this.state.client) {
  //     return <div>Loding client information...</div>;
  //   }

  //   return (
  //     <div className='save-wrapper'>
  //       <ClientCard client={this.state.client} />
  //       <Link to={`/update-client/${this.state.client.id}`}>Update Client</Link>
  //       <button onClick={(e) => {
  //         e.preventDefault()
  //         api().delete(`/clients/${this.state.client.id}`)
  //           .then(res =>{
  //             console.log(res)
  //             this.props.history.push('/')
  //           })
  //           .catch(err => console.log(err))
  //       }}>Delete Client</button>
  //     </div>
  //   );
  // }

  render() {
    // console.log(this.state.clients)
    return (
      <div>
        {/* <h1> hi there</h1> */}
        {this.state.clients.map(client => (
          // console.log(client)
          <ClientCard
            key={client.id}
            name={client.name}
            village={client.village}
            loanAmount={client.loanAmount}
            loanInitDate={client.loanInitDate}
            dueDate={client.dueDate}
            maizeHarvest={client.maizeHarvest}
            maizeToSell={client.maizeToSell}
          />
        ))}
      </div>
    )
  }
}
