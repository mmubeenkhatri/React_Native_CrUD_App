import React, {Component} from 'react';
import {
  View,
  ScrollView,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class StudentList extends Component {
  state = {
    students: [
    {name:'mubeen',phone:'0322-3434343',email:'sdfd@dfd.com'},
    {name:'Ghafoor',phone:'0321-3150880',email:'sdfd@dfd.com'},
    {name:'Waqar',phone:'0322-3434343',email:'sdfd@dfd.com'},
    {name:'Hassan',phone:'0322-2010626',email:'sdfd@dfd.com'},
    ]
  };

  

  getName = (index)=>{
    return(
    <Text>{this.state.students[index].name}</Text>
      
      
    );
  }
  getPhone = (index)=>{
    return(
      this.state.students[index].phone
      
    );
  }
  getEmail = (index)=>{
    return(
      this.state.students[index].email
      
    );
  }  
  deleteStd = index => {
    this.state.students.splice(index, 1);
    this.setState({students: this.state.students});
  };
  updateStd = (id, stdData) => {
    //alert(stdData.name+" : "+stdData.phone+" : "+stdData.email);
    let usersCopy = [...this.state.students];
    usersCopy[id] = stdData;
    // usersCopy[id].phone = phone;
    // usersCopy[id].email = email;
    this.setState({students: usersCopy});
  };
  addNewStudent = (stdData) =>{
    let stdCopy = [...this.state.students];
    stdCopy.push(stdData);
    this.setState({students: stdCopy});
  }
  // callAlert= (txt1,txt2) =>{
  //   alert(txt1+" : "+txt2);
  //   let usersCopy = [...this.state.names];
  //   usersCopy[txt1] = txt2;
  //   //alert(this.state.id);
  //   this.setState({names: usersCopy});

  // };
  render() {
    return (
      <View>
      <View>
        <ScrollView style={ styles.ScrollView}>
        <>
          {this.state.students.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.container}
              onPress={() => {
                this.props.navigation.navigate('StudentData', {
                  id: index,
                  //name: item,
                  delete: this.deleteStd.bind(this),
                  getName:this.getName.bind(this),
                  getPhone:this.getPhone.bind(this),
                  getEmail:this.getEmail.bind(this),
                  UpdateStd:this.updateStd.bind(this)
                });
              }}
              >
              <Text style={styles.text}>{item.name}</Text>
              {/* <Button
                title="Detail"
                onPress={() => {
                  this.props.navigation.navigate('StudentData', {
                    id: index,
                    name: item,
                    delete: this.deleteStd.bind(this),
                    getName:this.getName.bind(this),
                    callFunction:this.callAlert.bind(this)
                  });
                }}
              /> */}
              {/* <Button
                title="Delete"
                onPress={() => {
                  this.deleteStd(index);
                }}

              /> */}
            </TouchableOpacity>
          ))}
        </>
        </ScrollView>
        <TouchableOpacity 
          onPress={()=>{
            this.props.navigation.navigate('AddStudent', {
              AaddNewStudent:this.addNewStudent.bind(this)
            });
          }}
        style={ styles.bottomView} >
        
           <Text style={styles.textStyle}>Add new student</Text>

        </TouchableOpacity> 
      </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    marginTop: 3,
    backgroundColor: '#d9f9b1',
    alignItems: 'center',
    height: 100,
    justifyContent: 'space-evenly',
  },
  text: {
    color: '#4f603c',
    fontWeight: 'bold',
  },
  ScrollView:{
    marginBottom:50,
  },
  bottomView:{
 
    width: '100%', 
    height: 50, 
    backgroundColor: '#8800ff', 
    justifyContent: 'center', 
    alignItems: 'center',
    position: 'absolute',
    bottom: 0
  },
});
