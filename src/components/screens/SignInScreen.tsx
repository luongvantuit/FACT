import React, {Component} from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Text,
  Pressable,
  Platform,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import AppTheme from '../../themes/app-theme';
import shadowBox from '../widgets/ShadowBox';
import TextInputRegister from '../widgets/TextInputRegister';

export default function SignInScreen({navigation}: any) {
  const theme: AppTheme = useTheme() as AppTheme;
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={'position'}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop:
              Dimensions.get('screen').height /
              (Platform.OS === 'android' ? 3 : 2),
          }}>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 24,
              color: theme.app?.textColor,
              marginHorizontal: 32,
              marginVertical: 8,
            }}>
            Hey
          </Text>
          <Text
            style={{
              color: theme.app?.textColor,
              fontWeight: '900',
              fontSize: 28,
              marginHorizontal: 32,
              marginBottom: 8,
            }}>
            Sign In, Now.
          </Text>
          <TextInputRegister />
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginHorizontal: 32,
            }}>
            <Text
              style={{
                color: theme.app?.textPrimaryColor,
                fontWeight: '600',
                fontSize: 14,
              }}>
              Forgot Password?
            </Text>
            <Pressable style={{marginHorizontal: 8}} onPress={() => {}}>
              <Text
                style={{
                  color: theme.app?.textColor,
                  fontWeight: '800',
                  fontSize: 16,
                }}>
                Reset
              </Text>
            </Pressable>
          </View>
          <Pressable
            style={{
              marginHorizontal: 32,
              justifyContent: 'center',
              backgroundColor: theme.app?.backgroundButtonColor,
              paddingVertical: 16,
              borderRadius: 8,
              marginVertical: 16,
              shadowColor: theme.app?.shadowColor,
              ...shadowBox,
            }}
            onPress={() => {
              navigation.navigate('otp-sign-in');
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: theme.app?.textButtonColor,
                fontWeight: '900',
              }}>
              Next Step
            </Text>
          </Pressable>
          <Text
            style={{
              textAlign: 'center',
              color: theme.app?.textColor,
              fontWeight: '800',
              fontSize: 12,
            }}>
            Your Haven't Account
          </Text>
          <Pressable
            style={{
              marginHorizontal: 32,
              justifyContent: 'center',
              backgroundColor: theme.app?.backgroundButtonPrimaryColor,
              paddingVertical: 16,
              borderRadius: 8,
              marginVertical: 16,
              shadowColor: theme.app?.shadowColor,
              ...shadowBox,
            }}
            onPress={() => {
              navigation.navigate('sign-up');
            }}>
            <Text
              style={{
                textAlign: 'center',
                color: theme.app?.textColor,
                fontWeight: '900',
              }}>
              Create New Account
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
