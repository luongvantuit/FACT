import React from 'react';
import {View, Text, Pressable} from 'react-native';

export default function FlatButton({children, style, onPress}) {
  return (
    <Pressable style={style} onPress={onPress}>
      {children}
    </Pressable>
  );
}
