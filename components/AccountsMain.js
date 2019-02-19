import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button
} from "react-native";

class AccountsMain extends Component {
  state = {
    accounts: []
  };
  componentDidMount() {
    this.setState({ accounts: this.props.accounts || [] });
  }
  render() {
    return (
      <View>
        <View className="account-options-actions">
          <Button
            onPress={() => {}}
            title="New Acount"
            style={{ maxWidth: 100 }}
          />
        </View>
        <ScrollView>
          <FlatList
            style={{ display: "flex" }}
            data={this.state.accounts}
            renderItem={({ item, index }) => (
              <View
                className="file"
                key={index}
                style={{
                  flex: 1,
                  flexDirection: "row",
                  justifyContent: "space-evenly",
                  padding: 5,
                  backgroundColor: "white",
                  borderBottomColor: "gray"
                }}
              >
                <View className="column">
                  <Text>{item.code}</Text>
                </View>
                <View className="column">
                  <Text>{item.name}</Text>
                </View>
                <View className="column">
                  <Text>{item.type}</Text>
                </View>
                <View className="actions">
                  <Button onPress={() => {}} title="Manage" />
                  <Button onPress={() => {}} title="Edit" />
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}

export default AccountsMain;
