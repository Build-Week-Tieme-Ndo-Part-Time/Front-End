import React, { useEffect } from 'react';
import ClientCard from './ClientCard';
import { connect } from "react-redux";
import { getClientData } from "../actions";
import Navbar from './NavBar';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

const CardListContainer = styled.div`
  height: 100%;
  width: 85%;
`;
const CardList = styled.div`
  width: 100%
`;


const Client = (props) => {

  const history = useHistory();

  const { getClientData, clients } = props;

  useEffect(() => {
    getClientData();
  }, [getClientData]);

  const routeToClient = (e, client) => {
    e.preventDefault();
    history.push(`/clientlist/${client.id}`);
  };
  if (clients.length === 0) {
    return <p>Loading...</p>;
  }


  return (
    // <Navbar className='Nav' />
    <CardListContainer className='card-list-container'>
      <CardList className='card-list'>
        {clients.map(client => (
          <div>
            <img
              // key={client.id}
              onClick={e => routeToClient(e, client)}
              src='https://static.producer.com/wp-content/uploads/2018/12/27113122/51-RTR-Rwanda-farming-2col.jpg'
            />
            <img
              // key={client.id}
              src='https://natureconservancy-h.assetsadobe.com/is/image/content/dam/tnc/nature/en/photos/Sarah_Benoit_Delbecq_Indiana_1.jpg?crop=0,336,5760,3168&wid=4000&hei=2200&scl=1.44'
            />
            <img
              // key={client.id}
              src='https://www.yesmagazine.org/wp-content/uploads/imports/1fe74cb08af74b39b5cada38382e9233.jpg'
            />
            <img
              // key={client.id}
              src='https://www.farmmanagement.pro/wp-content/uploads/2019/01/Sustainable-Agriculture-1030x696-620x330.jpg'
            />
          </div>
          // <ClientCard
          //   // clients={this.props.clients}
          //   key={client.id}
          //   firstname={client.firstname}
          //   lastname={client.lasttname}
          //   villagename={client.villagename}
          //   originalloanamount={client.originalloanamount}
          //   loaninitiationdate={client.loaninitiationdate}
          //   loanduedate={client.loanduedate}
          //   amountowed={client.amountowed}
          //   harvestgoal={client.harvestgoal}
          //   harvestamount={client.harvestamount}
          // />
        ))}
      </CardList>
      
    </CardListContainer>
  )
}

const mapStateToProps = state => {
  return {
    clients: state.clients,
    isLoading: state.isLoading
  }
}


export default connect(
  mapStateToProps,
  { getClientData }
)(Client)