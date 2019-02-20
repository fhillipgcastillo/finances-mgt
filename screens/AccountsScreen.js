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
import  ManageAccount from "../components/ManageAccounts";


const accountTypes = {
  Credit: "Credit",
  Debit: "Decit"
};
export default class AccountsScreen extends React.Component {
  state = {
    accountTypes: accountTypes,
    accounts: [
      {
        name: "Cuentas por Pagar",
        code: "CxP",
        type: accountTypes.Debit
      },
      {
        name: "Cuentas por Cobrar",
        code: "CxC",
        type: accountTypes.Credit
      }
    ],
    pages: { Main: "main", Management: "management", Edit: "edit", Create:"create" },
    page: accountTypes.Main
  };
  static navigationOptions = {
    title: "Accounts"
  };
  handleManagePressed = (page) => {
    this.setState({page: page});
  }
  render() {
    return (
      <View>
        {this.state.page === this.state.pages.Main 
        ? 
          <AccountsMain accounts={this.state.accounts} onManagementPressed={this.handleManagePressed} pages={this.state.pages}/>
        : this.state.page === this.state.pages.Create
        ? 
          <ManageAccount goBack={()=>this.handleManagePressed(this.state.pages.Main)}/>
        :
          <View >
            <Text>Something</Text>
            <Button onPress={()=>this.handleManagePressed(this.state.pages.Main)} title="go back"/>
          </View>
        }
      </View>
    );
  }
}
