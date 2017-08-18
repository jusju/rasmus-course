import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  state = { value: 0 };

  increment = () => {
    this.setState({ value: this.state.value + 1 });
  };

  decrement = () => {
    this.setState({ value: this.state.value - 1 });
  };

  reset = () => {
    this.setState({ value: 0 });
  };

  // debugger;

  render() {
    return (
      <div className="App">
        {/* kommentti */}
        <div>
          {this.state.value}
        </div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default App;
