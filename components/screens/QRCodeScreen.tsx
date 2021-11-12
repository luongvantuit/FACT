import React from 'react';
import {Dimensions, Platform, StatusBar, View} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export default function QRCodeScreen() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle={'light-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
      <QRCodeScanner
        onRead={e => {
          console.log(e.data);
        }}
        reactivateTimeout={5000}
        reactivate={true}
        cameraStyle={{
          height: Dimensions.get('screen').height,
          width: Dimensions.get('screen').width,
        }}
        fadeIn={false}
      />
    </View>
  );
}
