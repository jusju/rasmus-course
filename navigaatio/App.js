import React from "react";
import { StyleSheet, Text, Button, View } from "react-native";
import { TabNavigator, StackNavigator } from "react-navigation";

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

class FirstView extends React.Component {
  render = () => <View style={{ flex: 1, backgroundColor: "#ffa" }} />;
}

class SecondView extends React.Component {
  render = () => <View style={{ flex: 1, backgroundColor: "#faf" }} />;
}

class CounterView extends React.Component {
  state = { value: 0 };

  increment = () => {
    this.setState({ value: this.state.value + 1 });
    console.log(this.state.value);
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
  render() {
    return (
      <View>
        <Text>
          {this.state.value}
        </Text>
        <Button title="Increment" onPress={this.increment} />
        <Button title="Decrement" onPress={this.decrement} />
      </View>
    );
  }
}

const Tabs = TabNavigator({
  First: { screen: FirstView },
  Second: { screen: SecondView },
  Counter: { screen: CounterView }
});

const AppNavigator = StackNavigator({
  Main: { screen: Tabs }
});
