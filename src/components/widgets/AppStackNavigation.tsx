import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import AppRegisterStackNavigation from './AppRegisterStackNavigation';
import AppUserStackNavigation from './AppUserStackNavigation';
const AppStack = createNativeStackNavigator();

export default function AppStackNavigation() {
  return (
    <NavigationContainer>
      <AppStack.Navigator initialRouteName="app-user">
        <AppStack.Screen
          name="app-user"
          component={AppUserStackNavigation}
          options={{
            headerShown: false,
          }}
        />
        <AppStack.Screen
          name="app-register"
          component={AppRegisterStackNavigation}
          options={{
            headerShown: false,
          }}
        />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}
