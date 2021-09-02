import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import HomeBottomTab from './HomeBottomTab'
import ProfileScreen from '../screens/ProfileScreen'
import { View } from 'react-native'

const AppUserStack = createNativeStackNavigator();

export default function AppUserStackNavigation() {
    return (
        <AppUserStack.Navigator initialRouteName='home'>
            <AppUserStack.Screen name='home' component={HomeBottomTab} options={{
                headerShown: false
            }} />
            <AppUserStack.Screen name='profile' component={ProfileScreen} options={{
                header: props => {
                    return <View></View>
                }
            }} />
        </AppUserStack.Navigator>
    )
}
