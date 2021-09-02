import {NavigationContainer, ThemeProvider} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {useColorScheme} from 'react-native';
import ThemeDark from '../../themes/theme-dark';
import ThemeLight from '../../themes/theme-light';
import AppRegisterStackNavigation from './AppRegisterStackNavigation';
import AppUserStackNavigation from './AppUserStackNavigation';
const AppStack = createNativeStackNavigator();

export default function AppStackNavigation() {
  const theme = useColorScheme();
  return (
    <NavigationContainer theme={theme === 'dark' ? ThemeDark : ThemeLight}>
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
