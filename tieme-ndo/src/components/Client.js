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
          firstname: 'Bob',
          lastname: 'Freeman',
          villagename: 'MARAKA',
          originalloanamount: 200,
          loaninitiationdate: "01/01/2020",
          loanduedate: '02/20/2020',
          amountowed: '$50',
          harvestgoal: 25,
          harvestamount: 10
        },
        {
          id: 0,
          firstname: 'Bob',
          lastname: 'Freeman',
          villagename: 'MARAKA',
          originalloanamount: 200,
          loaninitiationdate: "01/10/2020",
          loanduedate: '05/20/2020',
          amountowed: '$50',
          harvestgoal: 25,
          harvestamount: 10
        },
        {
          id: 0,
          firstname: 'Bob',
          lastname: 'Freeman',
          villagename: 'MARAKA',
          originalloanamount: 200,
          loaninitiationdate: "01/04/2020",
          loanduedate: '04/05/2020',
          amountowed: '$50',
          harvestgoal: 25,
          harvestamount: 10
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
            firstname={client.firstname}
            lastname={client.lasttname}
            villagename={client.villagename}
            originalloanamount={client.originalloanamount}
            loaninitiationdate={client.loaninitiationdate}
            loanduedate={client.loanduedate}
            amountowed={client.amountowed}
            harvestgoal={client.harvestgoal}
            harvestamount={client.harvestamount}
          />
        ))}
      </div>
    )
  }
}

// id: 0,
//   firstname: 'Bob',
//     lastname: 'Freeman',
//       villagename: 'MARAKA',
//         originalloanamount: 200,
//           loaninitiationdate: Date.now(),
//             loanduedate: '1995-12-17T03:24:00',
//               amountowed: 50,
//                 harvestgoal: 25,
//                   harvestamount: 10
//         }