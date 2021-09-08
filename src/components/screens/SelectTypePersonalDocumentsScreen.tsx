import React, {useState} from 'react';
import {View, Text, Platform, Pressable, ImageBackground} from 'react-native';
import {check, request, RESULTS} from 'react-native-permissions';
import {UndrawOptions} from '../../assets';
import Colors from '../../assets/colors';
import AntDesignIcons from '../fonts-icon/ant-design-icons';
import shadowBox from '../widgets/ShadowBox';

export default function SelectTypePersonalDocumentsScreen({navigation}: any) {
  const [accept, setAccept] = useState<boolean>(false);
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}>
      <ImageBackground
        source={UndrawOptions}
        style={{
          height: 340,
        }}
      />
      <View style={{marginHorizontal: 32}}>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 28,
            marginBottom: 8,
            color: Colors.text,
          }}>
          Now. Please Check Your Citizenship ID
        </Text>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 24,
            marginBottom: 16,
            color: Colors.text,
          }}>
          Step 2
        </Text>
      </View>
      <View
        style={{
          ...shadowBox,
          shadowColor: Colors.matteBlack,
          backgroundColor: Colors.white,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          flexGrow: 1,
        }}>
        <View
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              marginHorizontal: 32,
              marginTop: 16,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Pressable
              onPress={() => {
                setAccept(!accept);
              }}>
              {accept === true ? (
                <AntDesignIcons
                  name={'checksquare'}
                  color={Colors.green}
                  size={18}
                />
              ) : (
                <View
                  style={{
                    borderRadius: 2,
                    borderColor: Colors.text,
                    width: 18,
                    height: 18,
                    borderWidth: 2,
                  }}
                />
              )}
            </Pressable>
            <Text
              style={{
                fontWeight: '900',
                color: Colors.text,
                marginLeft: 8,
              }}>
              Must Have A Valid Citizenship ID Card
            </Text>
          </View>
        </View>
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            marginHorizontal: 32,
            marginVertical: 8,
          }}
          onPress={() => {
            navigation.navigate('enter-password-sign-up');
          }}>
          <Text
            style={{
              fontWeight: '800',
              color: Colors.text,
              marginRight: 4,
              textDecorationColor: Colors.text,
              textDecorationLine: 'underline',
              textDecorationStyle: 'solid',
            }}>
            Skip, If Use Account As Digital Wallet
          </Text>
          <AntDesignIcons name={'arrowright'} color={Colors.text} size={26} />
        </Pressable>
        <Pressable
          style={{
            marginHorizontal: 32,
            marginBottom: Platform.OS === 'android' ? 16 : 32,
            marginTop: 8,
            justifyContent: 'center',
            paddingVertical: 16,
            borderRadius: 8,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
            backgroundColor: Colors.text,
          }}
          onPress={() => {
            if (accept) {
              check(
                Platform.OS === 'android'
                  ? 'android.permission.CAMERA'
                  : 'ios.permission.CAMERA',
              ).then(result => {
                if (result === RESULTS.GRANTED)
                  navigation.navigate('ekyc-indentification');
                else {
                  request(
                    Platform.OS === 'android'
                      ? 'android.permission.CAMERA'
                      : 'ios.permission.CAMERA',
                  ).then(result => {
                    if (result === RESULTS.GRANTED)
                      navigation.navigate('ekyc-indentification');
                  });
                }
              });
            }
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
      </View>
    </View>
  );
}
