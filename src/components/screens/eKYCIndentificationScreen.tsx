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
import AppTheme from '../../themes/app-theme';
import EntypoIcons from '../fonts-icon/entypo-icons';

export default function eKYCIndentificationScreen(props: any) {
  const theme: AppTheme = useTheme() as AppTheme;
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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Pressable
            onPress={() => {
              props.navigation.goBack();
            }}
            style={{
              marginVertical: 16,
              marginLeft: 25,
            }}>
            <EntypoIcons
              name="chevron-small-left"
              size={32}
              color={Colors.matteBlack}
            />
          </Pressable>
          <Text
            style={{
              color: Colors.matteBlack,
              fontWeight: '900',
            }}>
            Go Back
          </Text>
        </View>
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
    </View>
  );
}
