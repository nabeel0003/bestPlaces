import { Image, StyleSheet, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import { PLACES } from '../../../database/places'
import { useNavigation } from '@react-navigation/native';
const PlacesListing = () => {
    const navigation = useNavigation();

  return (
    <SafeAreaView> 
    <ScrollView>
        {PLACES.map((places) => {
            return <TouchableOpacity key={places.id} onPress={() => { navigation.navigate("PlacesDetails" , {details : places} ) }}
                style={{ marginHorizontal:'10%', height: 200, backgroundColor: 'gray', marginVertical: '5%', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ color: 'black' }}>{places.title}</Text>
                <Text style={{ color: 'black', marginVertical:20 }}>{places.description}</Text>
                <Image style={{width:50, height:50, borderRadius:30}} source={{ uri: places.image }} />
            </TouchableOpacity>
        })}
    </ScrollView>
</SafeAreaView>
  )
}

export default PlacesListing

const styles = StyleSheet.create({})