import React from 'react';
import {
  View,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Image,
  TouchableWithoutFeedback,
  ImageBackground,
  Text,
  TextInput,
  Pressable,
} from 'react-native';
import {UndrawTexting} from '../../assets';
import Colors from '../../assets/colors';
import shadowBox from './ShadowBox';

export default function OTP(props: any) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={'position'}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <ImageBackground
            source={UndrawTexting}
            style={{
              height: 340,
            }}
          />
          <Text
            style={{
              fontWeight: '900',
              fontSize: 28,
              color: Colors.text,
              textAlign: 'center',
            }}>
            OTP Code
          </Text>
          <TextInput
            placeholder={'4-Digit'}
            keyboardType={'numeric'}
            style={{
              marginHorizontal: 32,
              marginTop: 16,
              marginBottom: 12,
              paddingVertical: Platform.OS === 'android' ? 16 : 20,
              paddingHorizontal: 16,
              borderRadius: 8,
              fontWeight: '900',
              ...shadowBox,
              color: Colors.text,
              backgroundColor: Colors.neutralLightest,
            }}
            placeholderTextColor={Colors.neutralLight}
            onChangeText={text => {
              if (text.trim().length === 4)
                props.navigation.navigate('select-type-personal-documents');
            }}
            maxLength={4}
          />
          <Pressable
            style={{
              marginHorizontal: 32,
              justifyContent: 'center',
              paddingVertical: 16,
              marginVertical: 8,
              borderRadius: 8,
              ...shadowBox,
              shadowColor: Colors.matteBlack,
              backgroundColor: Colors.text,
            }}
            onPress={() => {
              props.navigation.goBack();
            }}>
            <Text
              style={{
                textAlign: 'center',
                fontWeight: '900',
                color: Colors.neutralLightest,
              }}>
              Back
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
