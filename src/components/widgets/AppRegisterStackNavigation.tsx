import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {
  Keyboard,
  Platform,
  Pressable,
  View,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import EntypoIcons from '../fonts-icon/entypo-icons';
import AppTheme from '../../themes/app-theme';
import {useTheme} from '@react-navigation/native';
import OTPSignInScreen from '../screens/OTPSignInScreen'; '../screens/OTPSignInScreen';
import SelectTypePersonalDocumentsScreen from '../screens/SelectTypePersonalDocumentsScreen';
import OTPSignUpScreen from '../screens/OTPSignUpScreen';

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
        name={'otp-sign-in'}
        component={OTPSignInScreen}
        options={{
          header: props => (
            <View
              style={{
                paddingTop: Platform.OS === 'android' ? 0 : 54,
                backgroundColor: theme.app?.backgroundHeaderColor,
                display: 'flex',
                alignItems: 'flex-start',
              }}>
              <Pressable
                onPress={() => {
                  props.navigation.goBack();
                }}
                style={{
                  marginVertical: 16,
                  marginHorizontal: 25,
                }}>
                <EntypoIcons
                  name="chevron-small-left"
                  size={32}
                  color={theme.app?.iconHeaderColor}
                />
              </Pressable>
            </View>
          ),
        }}
      />
      <AppRegisterStack.Screen
        name={'sign-up'}
        component={SignUpScreen}
        options={{
          headerShown: true,
          header: props => {
            return (
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                  style={{
                    paddingTop: Platform.OS === 'android' ? 0 : 54,
                    backgroundColor: theme.app?.backgroundHeaderColor,
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}>
                  <Pressable
                    onPress={() => {
                      props.navigation.goBack();
                    }}
                    style={{
                      marginVertical: 16,
                      marginHorizontal: 25,
                    }}>
                    <EntypoIcons
                      name="chevron-small-left"
                      size={32}
                      color={theme.app?.iconHeaderColor}
                    />
                  </Pressable>
                </View>
              </TouchableWithoutFeedback>
            );
          },
        }}
      />
      <AppRegisterStack.Screen
        name={'select-type-personal-documents'}
        component={SelectTypePersonalDocumentsScreen}
        options={{
          headerShown: true,
          header: props => {
            return (
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                  style={{
                    paddingTop: Platform.OS === 'android' ? 0 : 54,
                    backgroundColor: theme.app?.backgroundHeaderColor,
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}>
                  <Pressable
                    onPress={() => {
                      props.navigation.goBack();
                    }}
                    style={{
                      marginVertical: 16,
                      marginHorizontal: 25,
                    }}>
                    <EntypoIcons
                      name="chevron-small-left"
                      size={32}
                      color={theme.app?.iconHeaderColor}
                    />
                  </Pressable>
                </View>
              </TouchableWithoutFeedback>
            );
          },
        }}
      />
      <AppRegisterStack.Screen
        name={'otp-sign-up'}
        component={OTPSignUpScreen}
        options={{
          headerShown: true,
          header: props => {
            return (
              <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View
                  style={{
                    paddingTop: Platform.OS === 'android' ? 0 : 54,
                    backgroundColor: theme.app?.backgroundHeaderColor,
                    display: 'flex',
                    alignItems: 'flex-start',
                  }}>
                  <Pressable
                    onPress={() => {
                      props.navigation.goBack();
                    }}
                    style={{
                      marginVertical: 16,
                      marginHorizontal: 25,
                    }}>
                    <EntypoIcons
                      name="chevron-small-left"
                      size={32}
                      color={theme.app?.iconHeaderColor}
                    />
                  </Pressable>
                </View>
              </TouchableWithoutFeedback>
            );
          },
        }}
      />
    </AppRegisterStack.Navigator>
  );
}
