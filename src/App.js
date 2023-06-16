import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './Components/Greet'
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
// import { Greet } from './Components/Greet' //For Named Exports


class App extends Component {
  render() {
    return(
      <div className="App">
      {/* <Greet></Greet> */}
      {/* <Welcome></Welcome> */}
      <Hello />
      </div>
    );
  }
}

export default App;
