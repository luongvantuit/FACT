import React from 'react';
import {TextInput, Platform} from 'react-native';
import Colors from '../../assets/colors';
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
        color: Colors.text,
        backgroundColor: Colors.neutralLightest,
      }}
      placeholderTextColor={Colors.neutralLight}
    />
  );
}
