import React, {useEffect} from 'react';
import {
  View,
  Text,
  Platform,
  Pressable,
  Dimensions,
  StatusBar,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {check, RESULTS} from 'react-native-permissions';
import Svg, {Circle} from 'react-native-svg';
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
      <StatusBar
        barStyle={'light-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          paddingTop: 54,
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
        type={'front'}
        keepAudioSession={false}
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
            r={340}
            stroke={'black'}
            strokeWidth={1000}
          />
          <Circle
            cx={Dimensions.get('window').width / 2}
            cy={Dimensions.get('window').height / 2 - 48}
            r={174}
            stroke={Colors.greenDark}
            strokeWidth={16}
            fill={Colors.transparent}
            strokeDasharray={'3.5'}
          />
        </Svg>
      </View>
    </View>
  );
}
