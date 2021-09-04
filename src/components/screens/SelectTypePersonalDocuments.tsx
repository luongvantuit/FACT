import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, Dimensions, Platform, Pressable} from 'react-native';
import AppTheme from '../../themes/app-theme';

export default function SelectTypePersonalDocuments({navigation}: any) {
  const theme: AppTheme = useTheme();
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height:
          Dimensions.get('window').height -
          (Platform.OS === 'android' ? 64 : 118),
      }}>
      <View style={{marginHorizontal: 32}}>
        <Text></Text>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          elevation: 8,
          shadowColor: theme.app?.shadowColor,
          shadowOffset: {
            width: 1,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          backgroundColor: '#fff',
        }}>
        <Pressable
          style={{
            margin: 32,
            justifyContent: 'center',
            backgroundColor: '#363636',
            paddingVertical: 16,
            borderRadius: 8,
          }}
          onPress={() => {}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: '900',
            }}>
            Next Step
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
