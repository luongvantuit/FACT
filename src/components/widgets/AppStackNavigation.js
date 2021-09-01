import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeBottomTab from './HomeBottomTab';
import AppRegisterStackNavigation from './AppRegisterStackNavigation'
const AppStack = createNativeStackNavigator();

export default function AppStackNavigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="home">
        <AppStack.Screen name="home" component={HomeBottomTab} options={
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
