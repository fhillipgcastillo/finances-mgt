import React, { PureComponent } from 'react';
import {View, Text, ScrollView, FlatList} from 'react-native'
import PropTypes from 'prop-types';

class AccountsList extends PureComponent {
  state = { 
    accounts: [],
    pages: {}
  }
  componentDidMount(){
    this.setState({accounts:this.props.accounts || []});
    this.setState({pages:this.props.pages || {}});
  }
  render() { 
    return ( 
      <View className="accounts-list">
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
                  <Button onPress={()=>{}} title="Manage"/>
                  <Button onPress={()=>{}} title="Edit"/>
                </View>
              </View>
            )}
          />
        </ScrollView>
      </View>
     );
  }
}
 
export default AccountsList;
