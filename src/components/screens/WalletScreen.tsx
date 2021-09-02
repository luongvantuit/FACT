import React from 'react';
import { View, Text, ScrollView, Image, Pressable } from 'react-native';
import EntypoIcons from '../fonts-icon/entypo-icons';

export default function WalletScreen({ navigation }: any) {
  return (
    <ScrollView>
      <View
        style={{
          borderBottomColor: '#D7D7D7',
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
            backgroundColor: '#D7D7D7',
            borderRadius: 8,
            padding: 8,
            margin: 16,
          }}>
          <EntypoIcons
            name="chevron-small-right"
            color={'#000'}
            size={32}
          />
        </Pressable>
      </View>
    </ScrollView>
  );
}
