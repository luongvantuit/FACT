import {useTheme} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  View,
  TextInput,
  Platform,
  Dimensions,
  Pressable,
  Text,
  ScrollView,
} from 'react-native';
import AppTheme from '../../themes/app-theme';

export default function SignUpScreen({navigation}: any) {
  const theme: AppTheme = useTheme();
  return (
    <TouchableNativeFeedback
      onPress={Keyboard.dismiss}
      style={{
        backgroundColor: theme.app?.backgroundScreenColor,
      }}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={'padding'}>
        <ScrollView>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}>
            <Text
              style={{
                color: theme.app?.textColor,
                marginHorizontal: 32,
                fontWeight: '900',
                fontSize: 28,
                marginTop: 32,
                marginBottom: 8,
              }}>
              Start, Sign Up Now.
            </Text>
            <Text
              style={{
                color: theme.app?.textColor,
                marginHorizontal: 32,
                fontWeight: '900',
                fontSize: 24,
              }}>
              Step 1
            </Text>
            <Text
              style={{
                color: theme.app?.textColor,
                marginHorizontal: 32,
                fontWeight: '800',
                fontSize: 22,
                marginVertical: 16,
              }}>
              Enter Your Number Phone
            </Text>
            <TextInput
              placeholder={'Number Phone'}
              placeholderTextColor={theme.app?.placeholderTextColor}
              style={{
                marginHorizontal: 32,
                marginTop: 16,
                marginBottom: 12,
                paddingVertical: Platform.OS === 'android' ? 16 : 20,
                paddingHorizontal: 16,
                backgroundColor: theme.app?.backgroundTextInputColor,
                borderRadius: 8,
                fontWeight: 'bold',
                color: theme.app?.textInputColor,
              }}
              keyboardType="numeric"
            />
            <Pressable
              style={{
                marginHorizontal: 32,
                justifyContent: 'center',
                backgroundColor: theme.app?.backgroundButtonColor,
                paddingVertical: 16,
                borderRadius: 8,
              }}
              onPress={() => {
                navigation.navigate('opt-sign-up');
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
            <Pressable
              style={{
                marginHorizontal: 32 + 0.3,
                justifyContent: 'center',
                paddingVertical: 16,
                borderRadius: 8,
                marginVertical: 12,
                borderColor: theme.app?.borderColor,
                borderWidth: 0.3,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: theme.app?.textColor,
                  fontWeight: '900',
                }}>
                Go Back
              </Text>
            </Pressable>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </TouchableNativeFeedback>
  );
}
