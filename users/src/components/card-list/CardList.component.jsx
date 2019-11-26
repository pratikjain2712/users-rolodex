import React from 'react';
import './CardList.style.css';
import {Card} from '../card/Card.component';


export const CardList = props => {
  return (
    <div className='CardList'>
      {
        props.users.map(user => (
        <Card key={user.id} details={user}></Card>
        ))
        }        
    </div>
  );
}