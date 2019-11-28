import React, { Component } from 'react';
import './App.css';

import { Search } from './components/search/Search.component';

import { CardList } from './components/card-list/CardList.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchText: ''
    };
  }

  componentDidMount() {
    let url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ users: data }));
  }
  handleChange = e => {
    this.setState({ searchText: e.target.value });
  };

  render() {
    const { users, searchText } = this.state;
    const filteredUsers = users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()));
    console.log(this.state, filteredUsers);
    return (
      <div className="App">
        <h1>Search Users By Name</h1>
        <Search placeholder={'Search User'} handleChange={this.handleChange}></Search>
        <CardList users={filteredUsers}></CardList>
      </div>
    );
  }
}
export default App;
