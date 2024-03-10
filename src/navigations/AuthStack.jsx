import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmailLogin from '../screens/authStack/EmailLogin';

const Stack = createNativeStackNavigator();

const AuthStack = ({loginState}) => {


  return (
    <NavigationContainer >
    <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen  name="EmailLogin" component={EmailLogin} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default AuthStack