import React from 'react';
import {View, Text, ScrollView, Image, Pressable} from 'react-native';
import {EntypoIcon} from '..';
import {colors} from '../../values';

export default function WalletScreen({navigation}: any) {
  return (
    <ScrollView>
      <View
        style={{
          borderBottomColor: colors.black5,
          borderBottomWidth: 0.3,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/leak.jpeg')}
            style={{
              width: 46,
              height: 46,
              borderRadius: 23,
              margin: 16,
            }}
          />
          <View>
            <Text
              style={{
                fontWeight: '900',
              }}>
              LUONG VAN TU
            </Text>
          </View>
        </View>
        <Pressable
          onPress={() => {
            navigation.naviagte('user');
          }}
          style={{
            backgroundColor: colors.black7,
            borderRadius: 8,
            padding: 8,
            margin: 16,
          }}>
          <EntypoIcon
            name="chevron-small-right"
            color={colors.black1}
            size={32}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
}
