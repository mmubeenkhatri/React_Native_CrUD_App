import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';

export default class Student_Data extends Component {
    id = route.params;
    name = route.params;
        
    
    constructor() {
        super();
        this.state = {
          isUpdated: true,
          updatedText: '',
        };
      }
      handleUpdate = e => {
    
        this.props.updateUser(this.props.id, this.state.updatedText);
      };
    render(){
  return (
    <View>
      <Text>{JSON.stringify(id)} : {JSON.stringify(name)}</Text>
      <Button
        title='update'
        onPress={()=>{}}
      />
     </View>
  );
}
}