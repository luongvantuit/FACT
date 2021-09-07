import React from 'react';
import {
  View,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ImageBackground,
  TextInput,
  Platform,
  Pressable,
} from 'react-native';
import {UndrawMyPassword} from '../../assets';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import EntypoIcons from '../fonts-icon/entypo-icons';
import shadowBox from '../widgets/ShadowBox';

export default function EnterPasswordSignInScreen({navigation}: any) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={{
          flex: 1,
        }}
        behavior={'position'}>
        <ImageBackground
          source={UndrawMyPassword}
          style={{
            height: 340,
          }}
        />
        <Text
          style={{
            fontWeight: '900',
            marginTop: 8,
            marginHorizontal: 32,
            fontSize: 28,
            color: Colors.text,
            textAlign: 'left',
          }}>
          Enter Your Password
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginTop: 8,
            marginHorizontal: 32,
          }}>
          <Text
            style={{
              fontWeight: '900',
              fontSize: 18,
              color: Colors.text,
            }}>
            {user.numberPhone}
          </Text>
          <EntypoIcons name={'check'} color={Colors.green} size={24} />
        </View>
        <TextInput
          placeholder={'6-Digit'}
          keyboardType={'numeric'}
          maxLength={6}
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
            backgroundColor: Colors.text,
          }}
          onPress={() => {
            navigation.navigate('app-user');
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '900',
              color: Colors.neutralLightest,
            }}>
            Sign In
          </Text>
        </Pressable>
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
          onPress={() => {
            navigation.navigate('sign-in');
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '900',
              color: Colors.text,
            }}>
            Change Phone Number
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
