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
import listOnlineSavings from '../../datas/list-online-savings';
import user from '../../datas/user';
import EntypoIcons from '../../fonts-icon/entypo-icons';
import Ionicons from '../../fonts-icon/ionicons';
import shadowBox from '../widgets/ShadowBox';

export default function OnlineSavingsScreen({navigation}: any) {
  const theme: Theme = useTheme();
  return (
    <View
      style={{
        flex: 1,
      }}>
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
      <ScrollView
        showsHorizontalScrollIndicator={true}
        alwaysBounceHorizontal={false}
        bounces={false}
        overScrollMode={'never'}
        style={{
          flex: 1,
          paddingBottom: 16,
        }}>
        {/**
         * start header
         */}
        <View
          style={{
            marginHorizontal: 16,
            marginVertical: 8,
            backgroundColor: Colors.yellowDark,
            borderRadius: 8,
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            ...shadowBox,
            shadowColor: Colors.matteBlack,
          }}>
          <Ionicons name={'add'} color={Colors.neutralLightest} size={28} />
        </View>
        {listOnlineSavings.map((e, index) => (
          <View
            style={{
              marginTop: index == 0 ? 4 : 8,
              marginBottom: index === listOnlineSavings.length ? 4 : 8,
              backgroundColor: Colors.white,
              marginHorizontal: 16,
              ...shadowBox,
              shadowColor: Colors.matteBlack,
              borderRadius: 8,
            }}
            key={index}>
            <View
              style={{
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                backgroundColor: Colors.yellowDark,
                padding: 16,
              }}>
              <Text
                style={{
                  color: Colors.neutralLightest,
                  fontWeight: '900',
                  fontSize: 18,
                }}>
                {e.note}
              </Text>
            </View>
            <View
              style={{
                padding: 16,
              }}>
              <Text
                style={{
                  color: Colors.text,
                  fontWeight: '900',
                  marginBottom: 8,
                  fontSize: 18,
                }}>{`${e.value}${user.currency}`}</Text>
              <Text
                style={{
                  color: Colors.neutralLight,
                  fontWeight: '700',
                }}>{`${e.createAt} to ${e.expiration}`}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
