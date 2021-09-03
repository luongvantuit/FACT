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
        <View
          style={{
            paddingTop: Dimensions.get('screen').height / 3,
          }}>
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
            onPress={() => {}}>
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
              marginHorizontal: 32,
              justifyContent: 'center',
              paddingVertical: 16,
              borderRadius: 8,
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
      </KeyboardAvoidingView>
    </TouchableNativeFeedback>
  );
}
