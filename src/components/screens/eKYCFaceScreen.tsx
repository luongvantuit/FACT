import React, {useEffect} from 'react';
import {View, Text, Platform, Pressable, Dimensions} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {check, RESULTS} from 'react-native-permissions';
import Svg, {Circle, Defs, LinearGradient, Stop} from 'react-native-svg';
import Colors from '../../assets/colors';
import EntypoIcons from '../fonts-icon/entypo-icons';

export default function eKYCFaceScreen(props: any) {
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
              color={Colors.neutralLightest}
            />
          </View>
          <Text
            style={{
              color: Colors.neutralLightest,
              fontWeight: '900',
            }}>
            Back
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
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 7,
        }}>
        <Svg>
          <Circle
            cx={Dimensions.get('window').width / 2}
            cy={Dimensions.get('window').height / 2 - 48}
            r={380}
            stroke={'black'}
            strokeWidth={1000}
          />
          <Circle
            cx={Dimensions.get('window').width / 2}
            cy={Dimensions.get('window').height / 2 - 48}
            r={136}
            stroke={Colors.greenDark}
            strokeWidth={24}
            strokeDasharray={'3'}
          />
        </Svg>
      </View>
    </View>
  );
}
