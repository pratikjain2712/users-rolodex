import React from 'react';
import './CardList.style.css';
import { Card } from '../card/Card.component';

export const CardList = ({ data }) => {
  return (
    <div className="CardList">
      {data.map(user => (
        <Card key={user.id} details={user}></Card>
      ))}
    </div>
  );
};
