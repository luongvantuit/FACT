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
} from 'react-native';
import EntypoIcons from '../fonts-icon/entypo-icons';
import {useTheme} from '@react-navigation/native';
import OTPSignInScreen from '../screens/OTPSignInScreen';
import SelectTypePersonalDocumentsScreen from '../screens/SelectTypePersonalDocumentsScreen';
import OTPSignUpScreen from '../screens/OTPSignUpScreen';
import eKYCIndentificationScreen from '../screens/eKYCIndentificationScreen';
import eKYCFaceScreen from '../screens/eKYCFaceScreen';
import {NativeStackHeaderProps} from '@react-navigation/native-stack/lib/typescript/src/types';
import Colors from '../../assets/colors';

const AppRegisterStack = createNativeStackNavigator();

export default function AppRegisterStackNavigation() {
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
          header: props => <HeaderApp {...props} />,
        }}
      />
      <AppRegisterStack.Screen
        name={'sign-up'}
        component={SignUpScreen}
        options={{
          headerShown: true,
          header: props => <HeaderApp {...props} />,
        }}
      />
      <AppRegisterStack.Screen
        name={'select-type-personal-documents'}
        component={SelectTypePersonalDocumentsScreen}
        options={{
          headerShown: true,
          header: props => <HeaderApp {...props} />,
        }}
      />
      <AppRegisterStack.Screen
        name={'otp-sign-up'}
        component={OTPSignUpScreen}
        options={{
          headerShown: true,
          header: props => <HeaderApp {...props} />,
        }}
      />
      <AppRegisterStack.Screen
        name={'ekyc-indentification'}
        component={eKYCIndentificationScreen}
        options={{
          headerShown: false,
        }}
      />
      <AppRegisterStack.Screen
        name={'ekyc-face'}
        component={eKYCFaceScreen}
        options={{
          headerShown: false,
        }}
      />
    </AppRegisterStack.Navigator>
  );
}

export function HeaderApp(props: NativeStackHeaderProps) {
  const theme = useTheme();
  return (
    <View
      style={{
        paddingTop: Platform.OS === 'android' ? 0 : 54,
        display: 'flex',
        alignItems: 'flex-start',
        backgroundColor: theme.colors.background,
      }}>
      <Pressable
        onPress={() => {
          props.navigation.goBack();
        }}
        style={{
          marginVertical: 16,
          marginHorizontal: 25,
        }}>
        <EntypoIcons name="chevron-small-left" size={32} color={Colors.text} />
      </Pressable>
    </View>
  );
}
