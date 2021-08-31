import React from 'react';
import {View, Text, Platform, StatusBar, Dimensions, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {colors} from '../../values';
Icon.loadFont();

export default function ToolbarDashboard() {
  return (
    <View
      style={{
        paddingTop: Platform.OS === 'android' ? 0 : 54,
        display: 'flex',
        width: Dimensions.get('window').width,
        justifyContent: 'space-between',
        flexDirection: 'row',
        elevation: 6,
        shadowColor: colors.black1,
        shadowOffset: {
          width: 1,
          height: 4,
        },
        backgroundColor: colors.white,
        shadowOpacity: 0.3,
        shadowRadius: 2.22,
        zIndex: 10,
      }}>
      <View>
        <View
          style={{
            margin: 16,
          }}>
          <Icon name="menu" color={colors.black1} size={28} />
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
