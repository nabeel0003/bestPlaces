import { StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const PlacesDetails = () => { 
    const route = useRoute();
    const { details } = route.params;
  return (
    <SafeAreaView>
    <ScrollView>
      {details == undefined ? (<Text>no detai;</Text> ):  (<TouchableOpacity 
                style={{ marginHorizontal:'10%', height: 200, backgroundColor: 'gray', marginVertical: '5%', alignItems: 'center', justifyContent: 'center' }}>
                   <Text style={{ color: 'black' }}>{details.title}</Text>
                <Text style={{ color: 'black', marginVertical:20 }}>{details.description}</Text>
                <Image style={{width:50, height:50, borderRadius:30}} source={{ uri: details.image }} />
            </TouchableOpacity>)}
       
    </ScrollView>
</SafeAreaView>
  )
}

export default PlacesDetails

const styles = StyleSheet.create({})