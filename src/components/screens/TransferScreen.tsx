import React from 'react';
import {View, Text, StatusBar, Platform} from 'react-native';
import Colors from '../../assets/colors';

export default function TransferScreen() {
  return (
    <View>
      <StatusBar
        barStyle={'dark-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
      <Text></Text>
    </View>
  );
}
