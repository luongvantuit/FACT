import {Theme, useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Platform,
  Pressable,
} from 'react-native';
import Colors from '../../assets/colors';
import EntypoIcons from '../fonts-icon/entypo-icons';

export default function OnlineSavingsScreen({navigation}: any) {
  const theme: Theme = useTheme();
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      alwaysBounceVertical={false}
      bounces={false}
      overScrollMode={'never'}>
      {/**
       * start header
       */}
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.transparent}
        translucent={Platform.OS === 'android'}
      />
      <View
        style={{
          paddingTop: 54,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: theme.colors.background,
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
          Online Savings
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
      {/**
       * end header
       */}
    </ScrollView>
  );
}
