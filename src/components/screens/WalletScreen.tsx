import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StatusBar,
  Platform,
} from 'react-native';
import Colors from '../../assets/colors';

export default function WalletScreen({navigation}: any) {
  return (
    <ScrollView>
      <StatusBar
        barStyle={'dark-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
    </ScrollView>
  );
}
