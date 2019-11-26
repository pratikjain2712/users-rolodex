import React, { Component } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [
        {
          id: 1,
          name: 'Pratik'
        },
        {
          id: 2,
          name: 'Pratik Jain'
        },
        {
          id: 3,
          name: 'PK'
        }
      ]
    };
  }
  render() {
    return (
      <div>
        {this.state.users.map(user =>(
          <h1 key={user.id}>{user.name}</h1>
        ))}
      </div>
    );
  }
}
export default App;
