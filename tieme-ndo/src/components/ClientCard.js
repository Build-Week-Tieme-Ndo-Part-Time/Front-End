import React from 'react';

const ClientCard = props => {

  // const {name, village, loanAmount, loanInitDate, dueDate, maizeHarvest, maizeToSell} = props.client;

  return (
    <div className="client-card">
      <p>{props.name}</p>
      <p>{props.village}</p>
      <p>{props.loanAmount}</p>
      <p>{props.loanInitDate}</p>
      <p>{props.dueDate}</p>
      <p>{props.maizeHarvest}</p>
      <p>{props.maizeToSell}</p>
    </div>
  );
};

export default ClientCard;
