import React, {Component} from 'react';
import {
  View, Text, Button
} from 'react-native'

class AccountTypes extends Component {
  state = {  
    parent: {}
  }
  componentDidMount(){
    // this.setState({'parent': this.props.parent});
  }
  handleGoBack = ()=>{
    this.props.goBack();
  }
  render() { 
    return (  
      <View>
        <Text>Manage Account</Text>
        <Button onPress={this.handleGoBack} title="Go back" />
      </View>
    );
  }
}
 
export default AccountTypes;