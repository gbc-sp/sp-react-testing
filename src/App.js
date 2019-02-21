import React, { Component } from 'react';
import ToDoList from './ToDoList';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  state = {
    list: [
      {id: 1, name: "Walk the dog",    complete: false },
      {id: 2, name: "Shovel the snow", complete: true  },
      {id: 3, name: "Finish Skillpod", complete: false }
    ]
  }

  // We'll render the ToDoList and pass it our task list
  render() {
    return (
      <ToDoList todo={this.state.list} />
    );
  }
}

export default App;
