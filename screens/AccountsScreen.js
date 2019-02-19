import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  Button
} from "react-native";

export default class AccountsScreen extends React.Component {
  state = {
    accountTypes: {
      Credit: "Credit",
      Debit: "Decit"
    },
    accounts: [
      {
        name: "Cuentas por Pagar",
        code: "CxP",
        type: "Debit"
      },
      {
        name: "Cuentas por Cobrar",
        code: "CxC",
        type: "Credit"
      }
    ]
  };
  static navigationOptions = {
    title: "Accounts"
  };
  render() {
    return (
      <View>
        <View className="account-options-actions">
          <Button onPress={()=>{}} title="New Acount" style={{maxWidth:100}}/>
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
              </View>
            )}
          />
        </ScrollView>
      </View>
    );
  }
}
