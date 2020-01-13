import React from 'react';
import styled from 'styled-components';
import Navbar from './NavBar';


const ClientContainer = styled.div`
  display: flex;
  margin: 2rem;
  background: #40c4a2;
  width: 95%;
`;

const ClientC = styled.div`
  width: 95%;
  padding: 1rem;
  margin: 1rem;
  background: #fff;
`;

const ClientName = styled.h2`
  border-bottom: 1px solid black;
`;

const ClientVillage = styled.h3`
`;

const ClientInfo = styled.p`
`;

const ClientCard = props => {

  // const {name, village, loanAmount, loanInitDate, dueDate, maizeHarvest, maizeToSell} = props.client;

  return (
    <div className="client-card">
      <ClientContainer>
        <Navbar className='Nav' />
        <ClientC>
          <ClientName>{props.firstname}</ClientName>
          <ClientName>{props.lastname}</ClientName>
          <ClientVillage>Village name: {props.villagename}</ClientVillage>
          <ClientInfo>Loan Amount: {props.originalloanamount}</ClientInfo>
          <ClientInfo>Loan Initiated: {props.loaninitiationdate}</ClientInfo>
          <ClientInfo>Due Date: {props.loanduedate}</ClientInfo>
          <ClientInfo>Amount Owed: {props.amountowed}</ClientInfo>
          <ClientInfo>Harvest Gaol: {props.harvestgoal}</ClientInfo>
          <ClientInfo>Harvest Amount: {props.harvestamount}</ClientInfo>
        </ClientC>
      </ClientContainer>
    </div>
  );
};

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

export default ClientCard;
