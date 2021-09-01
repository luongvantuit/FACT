import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image} from 'react-native';
import {
  HomeScreen,
  RechargeScreen,
  SignInScreen,
  SignUpScreen,
  UserScreen,
} from './components';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="sign-in">
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{
            headerShown: false,
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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="recharge"
          component={RechargeScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="user"
          component={UserScreen}
          options={{
            headerShown: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
