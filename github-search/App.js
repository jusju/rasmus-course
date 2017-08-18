import React from "react";
import {
  Image,
  FlatList,
  Button,
  TextInput,
  StyleSheet,
  Text,
  View
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default class App extends React.Component {
  render() {
    console.log("Moro");
    return <GitHubApi />;
  }
}

class GitHubApi extends React.Component {
  state = { data: {}, text: "" };

  onChange = text => this.setState({ text });
  onSubmit = () =>
    fetch("https://api.github.com/search/repositories?q=" + this.state.text)
      .then(response => response.json())
      .then(data => this.setState({ data }));

  render() {
    return (
      <View>
        <TextInput
          style={{ marginTop: 100, height: 40 }}
          onChangeText={this.onChange}
          value={this.state.text}
        />
        <Button onPress={this.onSubmit} title="Submit" />
        <RepositoryList data={this.state.data} />
      </View>
    );
  }
}

class RepositoryList extends React.Component {
  keyExtractor = item => item.id;
  renderItem = ({ item }) =>
    <View style={{ padding: 16 }}>
      <Image
        style={{ width: 50, height: 50 }}
        source={{ uri: item.owner.avatar_url }}
      />
      <Text>
        {item.full_name}
      </Text>
      <Text>
        {item.id}
      </Text>
    </View>;

  render = () =>
    <FlatList
      data={this.props.data.items}
      keyExtractor={this.keyExtractor}
      renderItem={this.renderItem}
    />;
}
