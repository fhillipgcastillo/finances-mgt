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
import AccountsList from '../components/accounts/AccountsList';

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
        <AccountsList accounts={this.state.accounts} />
      </View>
    );
  }
}
