import React, {Component} from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default class AddStudent extends Component {
  constructor() {
    super();
    this.state = {
      isUpdated: true,
      newStudent: {name:'',phone:'',email:''},
    };
  }
  render() {
    return (
      <View>
        <TextInput
          placeholder="Enter Name"
          onChangeText={text => {
            this.state.newStudent.name = text;
          }}></TextInput>

        <TextInput
          placeholder="Enter Phone"
          onChangeText={text => {
            this.state.newStudent.phone = text;
          }}></TextInput>

        <TextInput
          placeholder="Enter Email"
          onChangeText={text => {
            this.state.newStudent.email = text;
          }}></TextInput>

          <Button
            title='Add'
            onPress={()=>{
              this.props.route.params.AaddNewStudent(this.state.newStudent);
              this.props.navigation.goBack();
            }}
          />
      </View>
    );
  }
}
