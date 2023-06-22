import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Greet from "./Components/Greet";
import Welcome from "./Components/Welcome";
import Hello from "./Components/Hello";
// import { Greet } from './Components/Greet' //For Named Exports

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Greet name="Bruce" heroName="Batman">
          <p>This is children props</p>
        </Greet>
        <Greet name="Clark" heroName="Superman">
          <button>Action</button>
        </Greet>
        <Greet name="Diana" heroName="Wonderwoman" > 
        </Greet>  */}
        <Welcome name="Bruce" heroName="Batman" />
        <Welcome name="Clark" heroName="Superman" />
        <Welcome name="Clark" heroName="Superman" />
        {/*  <Hello /> */}
      </div>
    );
  }
}

export default App;
