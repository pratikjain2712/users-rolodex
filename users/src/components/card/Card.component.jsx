import React from 'react';
import './Card.style.css';

export const Card = props => {
  let user = props.details;
  return (
    <div className="Card">
      <img src={`https://robohash.org/${user.name}?set=set5&size=180x180`} alt="User" />
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
};
