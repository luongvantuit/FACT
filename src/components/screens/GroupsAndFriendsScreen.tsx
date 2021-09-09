import React from 'react';
import {View, Text, StatusBar, Platform} from 'react-native';
import Colors from '../../assets/colors';

export default function GroupsAndFriendsScreen() {
  return (
    <View>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.transparent}
        translucent={Platform.OS === 'android'}
      />
      <Text></Text>
    </View>
  );
}
