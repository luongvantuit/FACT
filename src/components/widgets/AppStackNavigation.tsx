import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
const Stack = createNativeStackNavigator();

export default function AppStackNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="sign-in">


            </Stack.Navigator>
        </NavigationContainer>
    )
}
