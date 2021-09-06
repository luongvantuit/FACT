import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {
  View,
  Text,
  Dimensions,
  Platform,
  ScrollView,
  Pressable,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {check, RESULTS} from 'react-native-permissions';
import Colors from '../../assets/colors';
import EntypoIcons from '../fonts-icon/entypo-icons';
import shadowBox from '../widgets/ShadowBox';
import {Svg, Rect} from 'react-native-svg';

export default function eKYCIndentificationScreen(props: any) {
  useEffect(() => {
    check(
      Platform.OS === 'android'
        ? 'android.permission.CAMERA'
        : 'ios.permission.CAMERA',
    ).then(result => {
      if (result === RESULTS.DENIED) props.navigation.goBack();
    });
  }, []);
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          paddingTop: Platform.OS === 'android' ? 0 : 54,
          display: 'flex',
          alignItems: 'flex-start',
          zIndex: 10,
        }}>
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <View
            style={{
              marginVertical: 16,
              marginLeft: 25,
            }}>
            <EntypoIcons
              name="chevron-small-left"
              size={32}
            />
          </View>
          <Text
            style={{
              fontWeight: '900',
            }}>
            Go Back
          </Text>
        </Pressable>
      </View>
      <RNCamera
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        captureAudio={false}
        autoFocus={'on'}
        type={RNCamera.Constants.Type.front}
        whiteBalance={'shadow'}
      />
      <Pressable
        style={{
          marginHorizontal: 32,
          justifyContent: 'center',
          paddingVertical: 16,
          borderRadius: 8,
          marginVertical: 16,
          ...shadowBox,
          position: 'absolute',
          bottom: 16,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
        onPress={() => {
          props.navigation.navigate('ekyc-face');
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '900',
          }}>
          Next Step
        </Text>
      </Pressable>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          zIndex: 3,
        }}>
        <Svg
          width={`${Dimensions.get('window').width}`}
          height={`${Dimensions.get('window').height}`}>
          <Rect />
        </Svg>
      </View>
    </View>
  );
}
