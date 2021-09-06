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
import shadowBox from '../widgets/ShadowBox';
import TextInputRegister from '../widgets/TextInputRegister';

export default function SignUpScreen({navigation}: any) {
  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
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
                marginHorizontal: 32,
                fontWeight: '900',
                fontSize: 24,
              }}>
              Step 1
            </Text>
            <Text
              style={{
                marginHorizontal: 32,
                fontWeight: '800',
                fontSize: 22,
                marginVertical: 16,
              }}>
              Enter Your Phone Number
            </Text>
            <TextInputRegister />
            <Pressable
              style={{
                marginHorizontal: 32,
                justifyContent: 'center',
                paddingVertical: 16,
                borderRadius: 8,
                ...shadowBox,
              }}
              onPress={() => {
                navigation.navigate('otp-sign-up');
              }}>
              <Text
                style={{
                  textAlign: 'center',
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
                marginVertical: 12,
                ...shadowBox,
              }}
              onPress={() => {
                navigation.goBack();
              }}>
              <Text
                style={{
                  textAlign: 'center',
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
