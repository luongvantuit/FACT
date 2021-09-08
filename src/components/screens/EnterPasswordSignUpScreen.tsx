import React from 'react';
import {
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  TextInput,
  Platform,
  ImageBackground,
  Text,
  View,
  Pressable,
} from 'react-native';
import {UndrawRomaticGetaway} from '../../assets';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import EntypoIcons from '../fonts-icon/entypo-icons';
import shadowBox from '../widgets/ShadowBox';

export default function EnterPasswordSignUpScreen({navigation}: any) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={'position'}>
        <ImageBackground
          source={UndrawRomaticGetaway}
          style={{
            height: 340,
          }}
        />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 28,
            marginHorizontal: 32,
            marginBottom: 8,
          }}>
          Enter Your Password
        </Text>
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 24,
            marginHorizontal: 32,
          }}>
          Finally. 6-Digit
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 8,
            marginHorizontal: 32,
          }}>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 16,
              color: Colors.text,
              marginRight: 4,
            }}>
            {user.numberPhone}
          </Text>
          <EntypoIcons name={'check'} color={Colors.green} size={20} />
        </View>
        <TextInput
          placeholder={'Password'}
          keyboardType={'numeric'}
          style={{
            marginHorizontal: 32,
            marginTop: 16,
            marginBottom: 8,
            paddingVertical: Platform.OS === 'android' ? 16 : 20,
            paddingHorizontal: 16,
            borderRadius: 8,
            fontWeight: '900',
            ...shadowBox,
            color: Colors.text,
            backgroundColor: Colors.neutralLightest,
          }}
          placeholderTextColor={Colors.neutralLight}
          secureTextEntry={true}
          maxLength={6}
        />
        <TextInput
          placeholder={'Confirm Password'}
          keyboardType={'numeric'}
          style={{
            marginHorizontal: 32,
            marginTop: 8,
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
          secureTextEntry={true}
          maxLength={6}
        />
        <Pressable
          style={{
            marginHorizontal: 32,
            justifyContent: 'center',
            paddingVertical: 16,
            borderRadius: 8,
            marginVertical: 8,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
            backgroundColor: Colors.yellowDark,
          }}
          onPress={() => {}}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '900',
              color: Colors.text,
            }}>
            Create Account
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
