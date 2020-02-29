import React, { Component } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

export default class StudentData extends Component {
  constructor() {
    super();
    this.state = {
      isUpdated: true,
      updatedText: {name:'',phone:'',email:''},
    };
  }
  
  handleDelete = e => {
    this.props.deleteUser(this.props.route.params.id);
  };
  toggleEdite = () => {
    this.setState({isUpdated: !this.state.isUpdated});
  };
  handleUpdate = e => {
    alert('mmm');
    this.props.route.params.updateUser(this.props.route.params.id , this.state.updatedText);
  };
  // const { itemId } = routes.params;
  //const { otherParam } = routes.params;
  render(){
    //alert("in studentData");
    return (
    <View>
      
      {this.state.isUpdated ? (
        //this.props.state.studens[this.props.route.params.id];
        <View>
          <Text> Name : {this.props.route.params.getName(this.props.route.params.id)}</Text>
          <Text> Phone :{this.props.route.params.getPhone(this.props.route.params.id)}</Text>
          <Text> Email :{this.props.route.params.getEmail(this.props.route.params.id)}</Text>
        </View>  
          //<Text>{this.props.route.params.id +" : "+this.props.route.params.name}</Text>
        ) : (
          <View>
          <TextInput
            //value={this.props.route.params.getName(this.props.route.params.id)}
            placeholder="Enter Name"
            onChangeText={text => {
              this.state.updatedText.name= text;
            }}></TextInput>

            <TextInput
            //value={this.props.route.params.getPhone(this.props.route.params.id)}
            placeholder="Enter Phone"
            onChangeText={text => {
              this.state.updatedText.phone= text;
            }}></TextInput>
            
            <TextInput
            //value={this.props.route.params.getEmail(this.props.route.params.id)}
            placeholder="Enter Email"
            onChangeText={text => {
              this.state.updatedText.email= text;

            }}></TextInput>
            </View>
        )}
      
      {this.state.isUpdated ? (
          <Button  title="EDIT" onPress={this.toggleEdite} />
        ) : (
          <Button
            title="UPDATE"
            onPress={() => {
              this.toggleEdite();
              this.props.route.params.UpdateStd(this.props.route.params.id,this.state.updatedText);
              // this.handleUpdate();
            }}
          />
        )}
      {/* <Text>otherParam: {JSON.stringify(otherParam)}</Text> */}
      <Button title='Delete' onPress={()=>{
        this.props.route.params.delete(this.props.route.params.id),
        this.props.navigation.goBack()     
      }   
        }/>
    </View>
  );
}
}
