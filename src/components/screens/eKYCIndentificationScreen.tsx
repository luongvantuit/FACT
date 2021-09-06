import {useTheme} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {View, Text, Dimensions, Platform} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {check, RESULTS} from 'react-native-permissions';
import AppTheme from '../../themes/app-theme';

export default function eKYCIndentificationScreen({navigation}: any) {
  const theme: AppTheme = useTheme() as AppTheme;
  useEffect(() => {
    check(
      Platform.OS === 'android'
        ? 'android.permission.CAMERA'
        : 'ios.permission.CAMERA',
    ).then(result => {
      if (result === RESULTS.DENIED) navigation.goBack();
    });
  }, []);
  return (
    <View style={{}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          margin: 100,
        }}>
        <RNCamera
          style={{
            width: (Dimensions.get('window').width * 3) / 4,
            height: (Dimensions.get('window').width * 2) / 4,
          }}
          captureAudio={false}
          autoFocus={'on'}
          type={RNCamera.Constants.Type.front}
        />
      </View>
    </View>
  );
}
