import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import ProfileScreen from '../screens/ProfileScreen';
import AppHomeBottomTabsNavigation from './AppHomeBottomTabsNavigation';

const AppUserStack = createNativeStackNavigator();

export default function AppUserStackNavigation() {
    return (
        <AppUserStack.Navigator initialRouteName={'app-home-bottom-tabs'}>
            <AppUserStack.Screen name={'app-home-bottom-tabs'} component={AppHomeBottomTabsNavigation} options={{
                headerShown: false,
            }} />
            <AppUserStack.Screen name={'profile'} component={ProfileScreen} options={{
                headerShown: false,
            }} />
        </AppUserStack.Navigator>
    )
}
