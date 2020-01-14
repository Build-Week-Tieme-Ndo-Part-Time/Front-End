import React from 'react';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';



const Container = styled.div`
  width: 30%
  height: 30%
`;

const ClientContainer = styled.div`
  display: flex;
  width: 100%;
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
    <Container className="client-card">
      <ClientContainer className="client-container">
        <ClientName>First Name: {props.Firstname}</ClientName>
        <ClientName>Last Name: {props.Lastname}</ClientName>
        <ClientVillage>Village Name: {props.Villagename}</ClientVillage>
        <ClientInfo>Loan Amount: {props.OriginalLoanAmount}</ClientInfo>
        <ClientInfo>Loan Initiated: {props.loaninitiationdate}</ClientInfo>
        <ClientInfo>Due Date: {props.loanduedate}</ClientInfo>
        <ClientInfo>Amount Owed: {props.amountowed}</ClientInfo>
        <ClientInfo>Harvest Goal: {props.harvestgoal}</ClientInfo>
        <ClientInfo>Harvest Amount: {props.harvestamount}</ClientInfo>
      </ClientContainer>
      <Link to='/addclient'>Add Client</Link>
      <button>Delete</button>
    </Container>
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
