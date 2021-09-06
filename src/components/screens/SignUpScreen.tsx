import React from 'react';
import {
  Keyboard,
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  View,
  Pressable,
  Text,
  Dimensions,
  Platform,
} from 'react-native';
import {HeaderApp} from '../widgets/AppRegisterStackNavigation';
import shadowBox from '../widgets/ShadowBox';
import TextInputRegister from '../widgets/TextInputRegister';

export default function SignUpScreen(props: any) {
  return (
    <TouchableNativeFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={'position'}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop:
              Dimensions.get('window').height /
              (Platform.OS === 'android' ? 3 : 2),
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
              props.navigation.navigate('otp-sign-up');
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
              props.navigation.goBack();
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
      </KeyboardAvoidingView>
    </TouchableNativeFeedback>
  );
}
