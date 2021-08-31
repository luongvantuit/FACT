import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Image} from 'react-native';
import {
  DashboardScreen,
  EntypoIcon,
  RechargeScreen,
  SignInScreen,
  SignUpScreen,
} from './components';
import {colors} from './values';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="sign-in">
        <Stack.Screen
          name="dashboard"
          component={DashboardScreen}
          options={{
            headerTitleAlign: 'center',
            title: 'Dashboard',
            headerBackVisible: false,
            headerLeft: props => (
              <EntypoIcon name="menu" color={colors.black1} size={26} />
            ),
            headerRight: props => (
              <Image
                source={require('./assets/leak.jpeg')}
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 16,
                }}
              />
            ),
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}
