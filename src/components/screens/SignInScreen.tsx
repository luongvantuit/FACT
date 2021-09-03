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

export default function SignInScreen({navigation}: any) {
  const theme: AppTheme = useTheme() as AppTheme;
  return (
    <TouchableWithoutFeedback
      onPress={Keyboard.dismiss}
      style={{
        backgroundColor: theme.app?.backgroundScreenColor,
      }}>
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
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginHorizontal: 32,
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '500',
                color: theme.app?.textPrimaryColor,
              }}>
              If You Haven't Account?
            </Text>
            <Pressable
              style={{
                marginHorizontal: 8,
              }}
              onPress={() => {
                navigation.navigate('sign-up');
              }}>
              <Text
                style={{
                  fontWeight: '800',
                  color: theme.app?.textColor,
                }}>
                Create New Account
              </Text>
            </Pressable>
          </View>
          <TextInput
            placeholder={'Number Phone'}
            keyboardType={'numeric'}
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
            placeholderTextColor={theme.app?.placeholderTextColor}
          />
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
              }}>
              Forgot Password?
            </Text>
            <Pressable style={{marginHorizontal: 8}} onPress={() => {}}>
              <Text
                style={{
                  color: theme.app?.textColor,
                  fontWeight: '800',
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
            }}
            onPress={() => {
              navigation.navigate('opt-sign-in');
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
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
