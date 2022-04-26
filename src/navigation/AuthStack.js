import { View, Text } from 'react-native'
import React from 'react'
import { Login, Signup } from '../Screens'
import navigationStrings from './navigationStrings'

const AuthStack = (Stack) => {
    return (
        <>
            <Stack.Screen 
            name={navigationStrings.LOGIN} 
            component={Login} 
            options={{headerShown: false}}
            />
            <Stack.Screen 
            name={navigationStrings.SIGNUP} 
            component={Signup} 
            options={{headerShown: false}}
            />
        </>
    )
}

export default AuthStack