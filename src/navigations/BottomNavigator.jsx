import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Listing from '../screens/mainStack/Listing';
import ListingDetails from '../screens/mainStack/ListingDetails';
const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator  screenOptions={{headerShown: false}}>
      <Tab.Screen name="Listing" component={Listing} />
      <Tab.Screen name="ListingDetails" component={ListingDetails} />

    </Tab.Navigator>
  )
}

export default BottomNavigator