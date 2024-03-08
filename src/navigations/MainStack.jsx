import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Listing from '../screens/mainStack/Listing';
import ListingDetails from '../screens/mainStack/ListingDetails';
import BottomNavigator from './BottomNavigator';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default MainStack