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
  title: string;
  onPress?: (event: GestureResponderEvent) => void;
  styleContainer?: StyleProp<ViewStyle> | undefined;
  styleText?: StyleProp<TextStyle> | undefined;
  activeOpacity?: number | undefined;
}): JSX.Element {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      activeOpacity={props.activeOpacity || 0.8}>
      <View style={props.styleContainer}>
        <Text style={props.styleText}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
