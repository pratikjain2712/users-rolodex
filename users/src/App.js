import React, { Component } from 'react';
import './App.css';

import { CardList } from './components/card-list/CardList.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }
  render() {
    return (
      <div className="App">
        <CardList users={this.state.users}></CardList>
      </div>
    );
  }
}
export default App;
