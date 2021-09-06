import React from 'react';
import {View, Text, TextInput, Platform} from 'react-native';
import shadowBox from './ShadowBox';

export default function TextInputRegister() {
  return (
    <TextInput
      placeholder={'Phone Number'}
      keyboardType={'numeric'}
      style={{
        marginHorizontal: 32,
        marginTop: 16,
        marginBottom: 12,
        paddingVertical: Platform.OS === 'android' ? 16 : 20,
        paddingHorizontal: 16,
        borderRadius: 8,
        fontWeight: '900',
        ...shadowBox,
      }}
    />
  );
}
