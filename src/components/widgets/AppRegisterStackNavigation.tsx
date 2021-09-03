import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {Platform, Pressable, View} from 'react-native';
import EntypoIcons from '../fonts-icon/entypo-icons';
import AppTheme from '../../themes/app-theme';
import {useTheme} from '@react-navigation/native';

const AppRegisterStack = createNativeStackNavigator();

export default function AppRegisterStackNavigation() {
  const theme: AppTheme = useTheme();
  return (
    <AppRegisterStack.Navigator initialRouteName={'sign-in'}>
      <AppRegisterStack.Screen
        name={'sign-in'}
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <AppRegisterStack.Screen
        name={'sign-up'}
        component={SignUpScreen}
        options={{
          headerShown: true,
          header: props => {
            return (
              <View
                style={{
                  paddingTop: Platform.OS === 'android' ? 0 : 54,
                  backgroundColor: theme.app?.backgroundHeaderColor,
                  position: 'relative',
                  top: 0,
                  left: 0,
                  right: 0,
                }}>
                <Pressable
                  onPress={() => {
                    props.navigation.goBack();
                  }}
                  style={{
                    margin: 16,
                  }}>
                  <EntypoIcons
                    name="chevron-small-left"
                    size={32}
                    color={theme.app?.iconHeaderColor}
                  />
                </Pressable>
              </View>
            );
          },
        }}
      />
    </AppRegisterStack.Navigator>
  );
}
