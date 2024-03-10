import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { USERS } from '../../../database/users';
import AuthStack from '../../navigations/AuthStack';
import { AuthContext } from '../../../App';

const EmailLogin = () => {
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const {setUserPresent} = useContext(AuthContext)



    const checkUser = () => {
        if (email == null && password == null) {
            Alert.alert('enter the credentials correctly')
        }
        else {
            let userpresent = USERS.find((x) => {
                return x.email == email && x.password == password
            })

            if (!userpresent) {
                Alert.alert("NO USER FOUND")
            }
            else {
                setUserPresent(true)
            }
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>

            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text>Enter Your Email</Text>
                <TextInput
                    style={{ width: '80%', height: 50, backgroundColor: 'gray' }}
                    placeholder='Enter your email'
                    value={email}
                    onChangeText={setEmail}
                />
            </View>

            <View style={{ width: '100%', alignItems: 'center' }}>
                <Text>Enter Your Password</Text>
                <TextInput
                    style={{ width: '80%', height: 50, backgroundColor: 'gray' }}
                    placeholder='Enter your email'
                    value={password}
                    onChangeText={setPassword}
                />
            </View>

            <TouchableOpacity onPress={() => {
                checkUser()
            }} >
                <Text>Enter to login</Text>
            </TouchableOpacity>


        </View>

    )
}

export default EmailLogin

const styles = StyleSheet.create({})