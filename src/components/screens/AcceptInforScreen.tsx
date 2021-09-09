import React from 'react';
import {Platform, ScrollView, StatusBar, View} from 'react-native';
import Colors from '../../assets/colors';

export default function AcceptInforScreen({navigation}: any) {
  return (
    <ScrollView>
      <StatusBar
        barStyle={'dark-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
      <View style={{}}></View>
    </ScrollView>
  );
}
