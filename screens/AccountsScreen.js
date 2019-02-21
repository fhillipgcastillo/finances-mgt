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
import AccountTypes from "../components/AccountTypes";


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
        name: "Document por Pagar",
        code: "DxP",
        type: accountTypes.Credit
      }
    ],
    pages: { Main: "main", Management: "management", Edit: "edit", AccountType:"accountType" },
    page: accountTypes.Main
  };
  navigationOptions = {
    title: "Accounts"
  };
  handleManagePressed = (page) => {
    this.setState({page: page});
    this.navigationOptions = page
  }
  getAccountsByType =(code)=>{
    switch(code){
      case "CxP":
        return [
          {
            name:"Tarjeta de Credito",
            amount: 0.00,
            dateToPay: ""
          }
        ];
      case "DxP":
        return [
          {
            name:"Prestamo del Popular",
            amount: 2600,
            dateToPay: ""
          }
        ]
    }
  }
  render() {
    return (
      <View>
        {this.state.page === this.state.pages.Main 
        ? 
          <AccountsMain accounts={this.state.accounts} onManagementPressed={this.handleManagePressed} pages={this.state.pages} getAccountsByType={this.getAccountsByType} />
        : this.state.page === this.state.pages.AccountType
        ? 
          <AccountTypes goBack={()=>this.handleManagePressed(this.state.pages.Main)}/>
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
