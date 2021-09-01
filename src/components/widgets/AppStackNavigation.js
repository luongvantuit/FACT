import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeBottomTab from './HomeBottomTab';
const AppStack = createNativeStackNavigator();

export default function AppStackNavigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="Home">
        <AppStack.Screen name="Home" component={HomeBottomTab} options={
          {
            headerShown: false
          }
        } />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
