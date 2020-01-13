import React from 'react';
import styled from 'styled-components';


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
        <ClientC>
          <ClientName>{props.name}</ClientName>
          <ClientVillage>Village: {props.village}</ClientVillage>
          <ClientInfo>Loan Amount: {props.loanAmount}</ClientInfo>
          <ClientInfo>Loan Initiated: {props.loanInitDate}</ClientInfo>
          <ClientInfo>Due Date: {props.dueDate}</ClientInfo>
          <ClientInfo>Maize Harvest: {props.maizeHarvest}</ClientInfo>
          <ClientInfo>Maize to Sell: {props.maizeToSell}</ClientInfo>
        </ClientC>
      </ClientContainer>
    </div>
  );
};

export default ClientCard;
