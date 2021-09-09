import React from 'react';
import {View, Text, Pressable} from 'react-native';

export default function AcceptInforScreen({navigation}: any) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Pressable
        onPress={() => {
          navigation.navigate('ekyc-face');
        }}>
        <Text>Test</Text>
      </Pressable>
    </View>
  );
}
