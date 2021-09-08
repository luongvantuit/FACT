import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AccountScreen from '../screens/AccountScreen';
import CardServiceScreen from '../screens/CardServiceScreen';
import AppHomeBottomTabsNavigation from './AppHomeBottomTabsNavigation';

const AppUserStack = createNativeStackNavigator();

export default function AppUserStackNavigation() {
  return (
    <AppUserStack.Navigator initialRouteName={'app-home-bottom-tabs'}>
      <AppUserStack.Screen
        name={'app-home-bottom-tabs'}
        component={AppHomeBottomTabsNavigation}
        options={{
          headerShown: false,
        }}
      />
      <AppUserStack.Screen
        name={'account'}
        component={AccountScreen}
        options={{
          headerShown: true,
        }}
      />
      <AppUserStack.Screen
        name={'card-service'}
        component={CardServiceScreen}
        options={{
          headerShown: true,
        }}
      />
    </AppUserStack.Navigator>
  );
}
