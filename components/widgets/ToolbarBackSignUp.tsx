import React from 'react';
import {View, Text, TouchableOpacity, Platform} from 'react-native';
import {colors} from '../../values';
import {EntypoIcon} from '../fonts-icon';
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
          <EntypoIcon
            name="chevron-small-left"
            size={32}
            color={colors.black1}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}
