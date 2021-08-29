import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { DashboardScreen, SignInScreen, SignUpScreen } from './components';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Sing In'>
        <Stack.Screen name='Dashboard' component={DashboardScreen} options={{
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name='Sign In' component={SignInScreen} options={{
          headerTitleAlign: 'center',
        }} />
        <Stack.Screen name='Sign Up' component={SignUpScreen} options={{
          headerTitleAlign: 'center',
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
