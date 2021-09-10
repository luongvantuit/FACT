import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AccountScreen from '../screens/AccountScreen';
import CardServiceScreen from '../screens/CardServiceScreen';
import TransferScreen from '../screens/TransferScreen';
import AppHomeBottomTabsNavigation from './AppHomeBottomTabsNavigation';
import {Theme, useTheme} from '@react-navigation/native';
import ConfirmTransactionScreen from '../screens/ConfirmTransactionScreen';
import ChooseContactScreen from '../screens/BeneficicaryScreen';
const AppUserStack = createNativeStackNavigator();

export default function AppUserStackNavigation({navigation}: any) {
  const theme: Theme = useTheme();
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
          headerShown: false,
        }}
      />
      <AppUserStack.Screen
        name={'card-service'}
        component={CardServiceScreen}
        options={{
          headerShown: false,
        }}
      />
      <AppUserStack.Screen
        name={'transfer'}
        component={TransferScreen}
        options={{
          headerShown: false,
        }}
      />
      <AppUserStack.Screen
        name={'confirm-transaction'}
        component={ConfirmTransactionScreen}
        options={{
          headerShown: false,
        }}
      />
      <AppUserStack.Screen
        name={'choose-contact'}
        component={ChooseContactScreen}
        options={{
          headerShown: false,
        }}
      />
    </AppUserStack.Navigator>
  );
}
