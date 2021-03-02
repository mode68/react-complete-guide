import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Vytas', age: 32 },
      { name: 'Paulius', age: 69 },
      { name: 'Justas', age: 18 },
      { name: 'Saras', age: 54 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = () => {
    // console.log('was clicked');
    this.setState({
      persons: [
        { name: 'Vytautas', age: 420 },
        { name: 'Paulius', age: 69 },
        { name: 'Justas', age: 18 },
        { name: 'Sarjunaz', age: 1337 }
      ]
    }
    );
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: basketball</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age} />
      </div>
    );
  }
}

export default App;
