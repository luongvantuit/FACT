import React, {useEffect} from 'react';
import {View, Text, Platform} from 'react-native';
import {check, RESULTS} from 'react-native-permissions';

export default function eKYCFaceScreen({navigation}: any) {
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
    <View>
      <Text></Text>
    </View>
  );
}
