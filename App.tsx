import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {DashboardScreen, SignInScreen, SignUpScreen} from './components';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="sign-in">
        <Stack.Screen
          name="dashboard"
          component={DashboardScreen}
          options={{
            headerShown: false,
            // headerTitleAlign: 'center',
            // title: 'Dashboard',
          }}
        />
        <Stack.Screen
          name="sign-in"
          component={SignInScreen}
          options={{
            headerShown: false,
            title: 'Sign In',
          }}
        />
        <Stack.Screen
          name="sign-up"
          component={SignUpScreen}
          options={{
            title: 'Sign Up',
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
