import React from 'react';

const ClientCard = props => {

  const {name, village, loanAmount, loanInitDate, dueDate, maizeHarvest, maizeToSell} = props.client;

  return (
    <div className="client-card">
      <p>{name}</p>
      <p>{village}</p>
      <p>{loanAmount}</p>
      <p>{loanInitDate}</p>
      <p>{dueDate}</p>
      <p>{maizeHarvest}</p>
      <p>{maizeToSell}</p>
    </div>
  );
};

export default ClientCard;
