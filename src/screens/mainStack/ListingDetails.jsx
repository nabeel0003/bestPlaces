import { View, Text , SafeAreaView, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';

const ListingDetails = () => {
  const route = useRoute();
  const { details } = route.params;

  console.log("detailsssss",details)
  return (
    <SafeAreaView>
    <ScrollView>
      {details == undefined ? <Text>no details</Text> :  <TouchableOpacity 
                style={{ height: 200, backgroundColor: 'gray', marginVertical: '5%', alignItems: 'center', justifyContent: 'center', marginHorizontal:'10%' }}>
                 <Text style={{ color: 'black' }}>{details.id}</Text>
                <Text style={{ color: 'black' }}>{details.userName}</Text>
                <Text style={{ color: 'black' }}>{details.email}</Text> 
            </TouchableOpacity>}
       
    </ScrollView>
</SafeAreaView>
  )
}

export default ListingDetails