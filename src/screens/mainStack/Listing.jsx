import { View, Text, ScrollView, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { USERS } from '../../../database/users'
import { useNavigation } from '@react-navigation/native';
const Listing = ({ Navigation }) => {
    const navigation = useNavigation();

    return (
        <SafeAreaView>
            <ScrollView>
                {USERS.map((users) => {
                    return <TouchableOpacity key={users.id} onPress={() => { navigation.navigate("ListingDetails" , {details : users} ) }}
                        style={{ height: 200, backgroundColor: 'gray', marginVertical: '5%', alignItems: 'center', justifyContent: 'center',marginHorizontal:'10%' }}>
                        <Text style={{ color: 'black' }}>{users.userName}</Text>
                        <Text style={{ color: 'black' }}>{users.email}</Text>
                    </TouchableOpacity>
                })}
            </ScrollView>
        </SafeAreaView>
    )
}

export default Listing