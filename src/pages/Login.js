import React, {Component} from 'react';
import {View, ScrollView, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

export default class Login extends Component{
  constructor(props){
    super(props);
    this.state={
        email:'',
        pass:'',
    };

  }
   

    checkAcc = () => {
        //alert(this.props.email+" : "+this.props.pass);
        if(this.state.email === 'mubeen@gmail.com' && this.state.pass === 'mubeen'){
            this.props.navigation.navigate('StudentList');
        }
        else{
            alert('incorrect Email or Password');
        }
    };
    
    render(){
    return (
      <View behavior="padding" style={styles.container}>
        <View style={styles.inner_container}>
          <TextInput 
            style={styles.inputBox} 
            placeholder="Email"
            //onChangeText = { text => this.setState({text: text})}
            onChangeText = { text => this.setState({email:text})} 
          />
          <TextInput 
            style={styles.inputBox} 
            placeholder="Password" 
            secureTextEntry
            
            onChangeText = { text => this.setState({pass:text})}
          />
          <TouchableOpacity 
            style={styles.buttonContainer}
            onPress={()=>{this.checkAcc();}} 
          >
             <Text  style={styles.buttonText}>LOGIN</Text>
            </TouchableOpacity> 
        </View>
        <View style={styles.barContainer}>
        <Text style={styles.bar}>Powered By M.Mubeen</Text>
        </View>
      </View>
    );
  }

}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8800ff',
    
  },
  inner_container: {
    marginTop:100
  },
  inputBox:{
      margin:10,
      backgroundColor:'#fff',
      borderWidth:1,
      height: 40,
      fontSize:16,
      borderColor:'#000'

  },
  buttonContainer:{
    backgroundColor: '#1a0130',
    paddingVertical: 10,
    margin:10
    },
  buttonText:{
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
    },
    bar:{
        fontSize:20,
        fontWeight:"bold",
        color: '#8800ff'
    },
    barContainer:{
        marginTop:170,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        height:50
    }

});
