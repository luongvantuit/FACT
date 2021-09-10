import React from 'react';
import {View, Text, StatusBar, Pressable, Platform} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../assets/colors';
import EntypoIcons from '../fonts-icon/entypo-icons';

export default function ChooseContactScreen({navigation}: any) {
  return (
    <LinearGradient
      colors={[
        Colors.neutralLightest,
        Colors.neutralLightest,
        Colors.neutralLightest,
      ]}
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
      <View
        style={{
          paddingTop: 32,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            marginVertical: 16,
            marginHorizontal: 25,
          }}>
          <EntypoIcons
            name="chevron-small-left"
            size={32}
            color={Colors.text}
          />
        </Pressable>
        <Text
          style={{
            flex: 1,
            color: Colors.text,
            textAlign: 'center',
            fontWeight: '900',
            fontSize: 18,
          }}>
          Beneficicary
        </Text>
        <Pressable
          style={{
            marginVertical: 16,
            marginHorizontal: 25,
          }}>
          <EntypoIcons
            name="chevron-small-left"
            size={32}
            color={Colors.transparent}
          />
        </Pressable>
      </View>
    </LinearGradient>
  );
}
