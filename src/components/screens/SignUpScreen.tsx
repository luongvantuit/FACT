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
  TouchableWithoutFeedback,
} from 'react-native';
import Colors from '../../assets/colors';
import shadowBox from '../widgets/ShadowBox';
import TextInputRegister from '../widgets/TextInputRegister';

export default function SignUpScreen(props: any) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={{flex: 1}} behavior={'position'}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop:
              Dimensions.get('window').height /
                (Platform.OS === 'android' ? 3 : 2) -
              16,
          }}>
          <Text
            style={{
              marginHorizontal: 32,
              fontWeight: '900',
              fontSize: 28,
              marginTop: 32,
              marginBottom: 8,
              color: Colors.text,
            }}>
            Start, Sign Up Now.
          </Text>
          <Text
            style={{
              marginHorizontal: 32,
              fontWeight: '900',
              fontSize: 24,
              color: Colors.text,
            }}>
            Step 1
          </Text>
          <Text
            style={{
              marginHorizontal: 32,
              fontWeight: '800',
              fontSize: 22,
              marginVertical: 16,
              color: Colors.text,
            }}>
            Enter Your Phone Number
          </Text>
          <TextInputRegister />
          <Pressable
            style={{
              marginHorizontal: 32,
              justifyContent: 'center',
              paddingVertical: 16,
              marginVertical: 8,
              borderRadius: 8,
              ...shadowBox,
              shadowColor: Colors.matteBlack,
              backgroundColor: Colors.matteBlack,
            }}
            onPress={() => {
              props.navigation.navigate('otp-sign-up');
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '900',
                color: Colors.neutralLightest,
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
              shadowColor: Colors.matteBlack,
              backgroundColor: Colors.yellow,
            }}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '900',
                color: Colors.text,
              }}>
              Go Back
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
