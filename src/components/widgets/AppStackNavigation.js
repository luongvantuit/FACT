import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {AppHome, AppRegister} from '../screens';
const AppStack = createNativeStackNavigator();

export default function AppStackNavigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="app-home">
        <AppStack.Screen name="app-home" component={AppHome} />
        <AppStack.Screen name="app-register" component={AppRegister} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
