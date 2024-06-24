import React, { Component } from 'react';
import './App.css';
import CardList from './Components/Card-lis-comp/CardList.Comp'
import SearchInput from './Components/Input-comp/SerachInput.Comp';

class App extends Component {
  constructor() {
    super();

    this.state = {
      teachers: [],
      searchValue: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState(() => {
        return { teachers: users };
      }));
  }

  onSearchChange = (event) => {
    const searchValue = event.target.value.toLowerCase();
    
    this.setState(() => {
      return { searchValue };
    });
  }

  render() {
    const { teachers, searchValue } = this.state;
    const { onSearchChange } = this;

    const filteredTeachers = teachers.filter((teacher) => {
      return teacher.name.toLowerCase().includes(searchValue);
    });

    return (
      <div className="App">
        <h1 className='appTitle'>Teachers</h1>
        <SearchInput 
          onSearchChange={onSearchChange} 
          placeholder='Search Teachers'
          className='SearchBox'
        />
        <CardList teachers={filteredTeachers} />
      </div>
    );
  }

  
}

export default App;
