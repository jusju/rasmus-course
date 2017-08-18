import React, { Component } from "react";
import "./App.css";
import Counter from "./Counter";

class CounterWrapper extends Component {
  state = { numCounters: 3 };

  add = () => {
    this.setState({ numCounters: this.state.numCounters + 1 });
  };

  remove = () => {
    this.setState({ numCounters: this.state.numCounters - 1 });
  };

  renderCounter = (_, index) => <Counter key={index} />;

  renderCounters = () =>
    [...Array(this.state.numCounters)].map(this.renderCounter);

  render() {
    return (
      <div>
        <button onClick={this.add}>Add</button>
        <button onClick={this.remove}>Remove</button>
        {this.renderCounters()}
      </div>
    );
  }
}

export default CounterWrapper;
