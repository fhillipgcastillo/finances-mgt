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
import AccountsMain from "../components/AccountsMain";


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
        <AccountsMain accounts={this.state.accounts} />
      </View>
    );
  }
}
