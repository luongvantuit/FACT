import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BottomTabHeaderProps } from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import React from 'react'
import { View, Text, Platform, Image, Pressable } from 'react-native'
import { leakImage } from '../../assets';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import WalletScreen from '../screens/WalletScreen';

const AppHomeBottomTabs = createBottomTabNavigator();

export default function AppHomeBottomTabsNavigation() {
    return (
        <AppHomeBottomTabs.Navigator initialRouteName={'dashboard'}>
            <AppHomeBottomTabs.Screen name='dashboard' component={DashboardScreen} options={{
                headerShown: true,
                header: (props: BottomTabHeaderProps) => (<View style={{
                    paddingTop: Platform.OS === 'android' ? 16 : 68,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    flexDirection: 'row',
                    paddingBottom: 16,
                    paddingHorizontal: 16,
                    backgroundColor: 'white',
                    borderBottomColor: '#D7D7D7',
                    borderBottomWidth: 0.3,
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <Text style={{
                            fontWeight: '600'
                        }}>Hi, TU</Text>
                        <Text style={{
                            fontWeight: '900'
                        }}>Welcome back!</Text>
                    </View>
                    <Pressable onPress={() => {
                        props.navigation.navigate('profile');
                    }}>
                        <Image source={leakImage} style={{
                            width: 40,
                            height: 40,
                            borderRadius: 8,
                        }} />
                    </Pressable>
                </View>),
                tabBarLabelStyle: {
                    display: 'none'
                }
            }} />
            <AppHomeBottomTabs.Screen name='analytics' component={AnalyticsScreen} options={{
                headerShown: true,
                header: (props: BottomTabHeaderProps) => (<View>

                </View>),
                tabBarLabelStyle: {
                    display: 'none'
                }
            }} />
            <AppHomeBottomTabs.Screen name='wallet' component={WalletScreen} options={{
                headerShown: true,
                header: (props: BottomTabHeaderProps) => (<View></View>),
                tabBarLabelStyle: {
                    display: 'none'
                }
            }} />
        </AppHomeBottomTabs.Navigator>
    )
}
