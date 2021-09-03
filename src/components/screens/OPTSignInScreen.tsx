import React, {useState} from 'react';
import {View, Text, ScrollView, Pressable} from 'react-native';

export default function OPTSignInScreen({navigation}: any) {
  const [position, setPosition] = useState<number>(0);

  return (
    <ScrollView>
      <Text></Text>
      <View
        style={{
          marginHorizontal: 24,
          display: 'flex',
          flexDirection: 'row',
        }}>
        {}
      </View>
    </ScrollView>
  );
}

export function KeyPadCustom({}) {}
