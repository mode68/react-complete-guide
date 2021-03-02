import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <Person name='Jimmy' age='29' />
        <Person name='Mode' age='27'>My hobbies: basketball</Person>
        <Person name='Kristie' age='33' />
      </div>
    );
  }
}

export default App;
