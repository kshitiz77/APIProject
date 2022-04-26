import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import navigationStrings from './navigationStrings'
import { Home } from '../Screens'

const Stack = createStackNavigator()

const HomeStack = () => {
    return (
        <>
            <Stack.Navigator>
                <Stack.Screen
                    name={navigationStrings.HOME}
                    component={Home}
                    options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    )
}

export default HomeStack