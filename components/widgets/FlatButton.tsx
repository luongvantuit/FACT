import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';

export default function FlatButton(props: {
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<ViewStyle> | undefined;
  children?: JSX.Element;
  activeOpacity?: number | undefined;
}): JSX.Element {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={props.activeOpacity || 0.8}>
      <View style={props.style}>{props.children}</View>
    </TouchableOpacity>
  );
}
