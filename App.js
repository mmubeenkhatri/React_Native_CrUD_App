import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Login from './src/pages/Login';
import {View, Text, TextInput, Button} from 'react-native';
import StudentList from './src/pages/StudentList';
import StudentData from './src/pages/StudentData';
import AddStudent from './src/pages/AddStudent';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

state={
  data:{}
}
export default function App() {
  return (
    <NavigationContainer>
      {
        <Drawer.Navigator>
          <Drawer.Screen name='Home' component={MainPage}/>
          <Drawer.Screen name='Login' component={Login}/>
          <Drawer.Screen name='StudentList' component={StudentList}/>
        </Drawer.Navigator>
        // <Stack.Navigator>
        //   {/* <Stack.Screen name="Login" component={Login} />
        //   <Stack.Screen name="StudentList" component={StudentList} />    
        //   <Stack.Screen name="StudentData" component={StudentData} />
        //   <Stack.Screen name="AddStudent" component={AddStudent} />     */}
        // </Stack.Navigator>
      }
    </NavigationContainer>
    
  );
}

function MainPage() {
  return (
    <>
    <Text>Home page</Text>
    </>
  );
}
