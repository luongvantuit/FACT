import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Colors from '../../assets/colors';
import AppRegisterStackNavigation from './AppRegisterStackNavigation';
import AppUserStackNavigation from './AppUserStackNavigation';
const AppStack = createNativeStackNavigator();

export default function AppStackNavigation() {
  return (
    <NavigationContainer
      theme={{
        colors: {
          background: Colors.yellowDark,
          border: Colors.matteBlack,
          card: Colors.yellowDark,
          notification: Colors.yellowDark,
          primary: Colors.yellowDark,
          text: Colors.matteBlack,
        },
        dark: false,
      }}>
      <AppStack.Navigator initialRouteName="app-register">
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
