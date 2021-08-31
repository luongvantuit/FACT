import React from 'react';
import {View, Text, Platform, StatusBar, Dimensions, Image} from 'react-native';
import {colors} from '../../values';
import {styleWidgetToolbarDashboad as styles} from '../../styles';
import {EntypoIcon} from '../fonts-icon';

export default function ToolbarDashboard() {
  return (
    <View style={styles.boxToolbar}>
      <View>
        <View
          style={{
            margin: 16,
          }}>
          <EntypoIcon name="menu" color={colors.black1} size={28} />
        </View>
      </View>
      <View>
        <Image
          source={require('../../assets/leak.jpeg')}
          style={{
            margin: 16,
            height: 40,
            width: 40,
            borderRadius: 20,
          }}
        />
      </View>
    </View>
  );
}
