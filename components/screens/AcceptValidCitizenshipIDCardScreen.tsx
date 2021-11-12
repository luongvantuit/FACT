import React, {useState} from 'react';
import {
  View,
  Text,
  Platform,
  Pressable,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {check, request, RESULTS} from 'react-native-permissions';
import {UndrawOptions} from '../../assets';
import Colors from '../../assets/colors';
import AntDesignIcons from '../../fonts-icon/ant-design-icons';
import shadowBox from '../widgets/ShadowBox';

export default function AcceptValidCitizenshipIDCardScreen({navigation}: any) {
  const [accept, setAccept] = useState<boolean>(false);
  return (
    <View
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
      }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
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
          Now. Please check your citizenship ID
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Pressable
          style={{
            marginHorizontal: 32,
            marginTop: 8,
            paddingVertical: 8,
            paddingHorizontal: 4,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}
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
          <Text
            style={{
              fontWeight: '900',
              color: Colors.text,
              marginLeft: 8,
            }}>
            Must have a valid citizenship ID card
          </Text>
        </Pressable>
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
            Skip, If use account as digital wallet
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
            Next step
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
