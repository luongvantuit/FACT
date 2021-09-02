import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View, Text } from 'react-native'
import AnalyticsScreen from '../screens/AnalyticsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import WalletScreen from '../screens/WalletScreen';

const AppHomeBottomTabs = createBottomTabNavigator();

export default function AppHomeBottomTabsNavigation() {
    return (
        <AppHomeBottomTabs.Navigator initialRouteName={'dashboard'}>
            <AppHomeBottomTabs.Screen name='dashboard' component={DashboardScreen} />
            <AppHomeBottomTabs.Screen name='analytics' component={AnalyticsScreen} />
            <AppHomeBottomTabs.Screen name='wallet' component={WalletScreen} />
        </AppHomeBottomTabs.Navigator>
    )
}
