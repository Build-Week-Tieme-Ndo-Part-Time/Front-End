// import React, { useEffect } from 'react';
// import styled from 'styled-components';
// import { connect } from "react-redux";
// import { getSingleClient } from "../actions/index";



// const Container = styled.div`
//   width: 30%
//   height: 30%
// `;

// const ClientContainer = styled.div`
//   display: flex;
//   width: 100%;
// `;

// const ClientC = styled.div`
//   width: 95%;
//   padding: 1rem;
//   margin: 1rem;
//   background: #fff;
// `;

// const ClientName = styled.h2`
//   border-bottom: 1px solid black;
// `;

// const ClientVillage = styled.h3`
// `;

// const ClientsInfo = styled.p`
// `;

// const ClientInfo = ({ props, singleClients }) => {

//   // useEffect(() => {
//   //   getSingleClient(params.id);
//   // }, [params.id, getSingleClient]);

//   // if (getSingleClient === null) {
//   //   return <p> Loading... </p>
//   // }



//   return (
//     <Container className="client-card">
//       <ClientContainer className="client-container">
//         <p>Client Info</p>
//         <ClientName>First Name: {props.Firstname}</ClientName>
//         <ClientName>Last Name: {props.Lastname}</ClientName>
//         <ClientVillage>Village Name: {props.Villagename}</ClientVillage>
//         <ClientInfo>Loan Amount: {props.OriginalLoanAmount}</ClientInfo>
//         <ClientInfo>Loan Initiated: {props.loaninitiationdate}</ClientInfo>
//         <ClientInfo>Due Date: {props.loanduedate}</ClientInfo>
//         <ClientInfo>Amount Owed: {props.amountowed}</ClientInfo>
//         <ClientInfo>Harvest Goal: {props.harvestgoal}</ClientInfo>
//         <ClientInfo>Harvest Amount: {props.harvestamount}</ClientInfo>
//       </ClientContainer>
//     </Container>
//   );
// };

// const mapStateToProps = state => {
//   return {
//     recipes: state.clients,
//     singleClients: state.singleClients
//   };
// };

// export default connect(
//   mapStateToProps,
//   { getSingleClient }
// )(ClientInfo);
