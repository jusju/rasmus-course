import React, { Component } from "react";
import "./App.css";

export const styles = {
  container: {
    backgroundColor: "lightcoral",
    height: 50
  }
};

class Counter extends Component {
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

  componentDidMount() {
    this.timer = setInterval(this.increment, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  // debugger;

  render() {
    return (
      <div className="App">
        {/* kommentti */}
        <div style={styles.container}>
          {this.state.value}
        </div>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}

export default Counter;
