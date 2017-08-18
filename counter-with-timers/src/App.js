import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CounterWrapper from "./CounterWrapper";

class App extends Component {
  // debugger;
  state = { value: 0 };

  render() {
    return <CounterWrapper />;
  }
}

export default App;
