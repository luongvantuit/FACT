import React from 'react';
import {View, Text, Platform, StatusBar, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../values';
Icon.loadFont();

export default function ToolbarDashboard() {
  return (
    <View
      style={{
        marginTop: Platform.OS === 'android' ? 0 : 54,
        display: 'flex',
        width: Dimensions.get('window').width,
        justifyContent: 'space-between',
      }}>
      <View>
        <View>
          <Icon name="menu" color={colors.black} size={28} />
        </View>
      </View>
      <View></View>
    </View>
  );
}
