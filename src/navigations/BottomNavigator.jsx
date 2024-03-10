import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Listing from '../screens/mainStack/Listing';
import ListingDetails from '../screens/mainStack/ListingDetails';
import PlacesListing from '../screens/mainStack/PlacesListing';
import PlacesDetails from '../screens/mainStack/PlacesDetails';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import FontAwesome from 'react-native-vector-icons/dist/FontAwesome';


const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <>
              <Tab.Navigator 
              screenOptions={()=>(
                {
                  headerShown:false,
                  
                  tabBarStyle:{
                    backgroundColor:'black',
                    borderTopWidth:1,
                    borderTopColor:'red',
                    height:60
                  },

                  tabBarActiveTintColor:'red',
                  tabBarInactiveTintColor:'yellow'
                }
              )}



              
              >
      
      <Tab.Screen 
      name="Listing"
       component={Listing} 
      options={{
        tabBarLabel: 'user listing',
        tabBarIcon:({color, size})=>(
          <FontAwesome size={30} color="#900" name="list"  />)
        
      }} />
      <Tab.Screen name="ListingDetails" component={ListingDetails}
      options={{
        tabBarLabel: 'user details',
        tabBarIcon:({color, size})=>(
          <FontAwesome size={30} color="blue" name="list-ul"  />)
        
      }}
      />
      <Tab.Screen name="PlacesListing" component={PlacesListing}
      options={{
        tabBarLabel: 'places listing',
        tabBarIcon:({color, size})=>(
          <FontAwesome size={30} color="green" name="th-list"  />)
        
      }}
      />
      <Tab.Screen name="PlacesDetails" component={PlacesDetails}  
      options={{
        tabBarLabel: 'places details',
        tabBarIcon:({color, size})=>(
          <FontAwesome size={30} color="yellow" name="angellist"  />)
        
      }}
      />



    </Tab.Navigator>

    </>
    
  )
}

export default BottomNavigator