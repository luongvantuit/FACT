import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AppRegisterStackNavigation from './AppRegisterStackNavigation'
import AppUserStackNavigation from './AppUserStackNavigation';
const AppStack = createNativeStackNavigator();

export default function AppStackNavigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="user">
        <AppStack.Screen name="user" component={AppUserStackNavigation} options={
          {
            headerShown: false
          }
        } />
        <AppStack.Screen name="register" component={AppRegisterStackNavigation} options={
          {
            headerShown: false
          }
        } />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
