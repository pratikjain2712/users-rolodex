import React, { Component } from 'react';
import './App.css';

import { Search } from './components/search/Search.component';
import { CardList } from './components/card-list/CardList.component';
class App extends Component {
  constructor() {
    super();
    this.state = {
      searchKey: '',
      data: []
    };
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  handleChange = e => {
    this.setState({ searchKey: e.target.value });
  };

  render() {
    const { data, searchKey } = this.state;
    const filteredUsers = data.filter(user => user.name.toLowerCase().includes(searchKey.toLowerCase()));

    return (
      <div className="App">
        <h1>Search Users By Name</h1>
        <Search placeholder={'Search User'} handleChange={this.handleChange}></Search>
        <CardList data={filteredUsers}></CardList>
      </div>
    );
  }
}

export default App;
