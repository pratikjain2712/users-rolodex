import React from 'react';
import './Card.style.css';

export const Card = ({ details }) => {
  return (
    <div className="Card">
      <img src={`https://robohash.org/${details.name}?set=set5&size=180x180`} alt="details" />
      <h2>{details.name}</h2>
      <p>{details.email}</p>
    </div>
  );
};
