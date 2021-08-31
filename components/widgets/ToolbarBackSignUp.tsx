import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../values';
Icon.loadFont();

export default function ToolbarBackSignUp(props: {onPress: () => void}) {
  return (
    <View
      style={{
        width: 54,
      }}>
      <TouchableOpacity onPress={props.onPress}>
        <View
          style={{
            marginHorizontal: 16,
            marginVertical: Platform.OS === 'ios' ? 8 : 16,
          }}>
          <Icon name="arrow-back-ios" size={28} color={colors.black1} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
