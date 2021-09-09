import {Theme, useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StatusBar,
  Platform,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import AntDesignIcons from '../fonts-icon/ant-design-icons';
import EntypoIcons from '../fonts-icon/entypo-icons';
import shadowBox from '../widgets/ShadowBox';

export default function AccountScreen({navigation}: any) {
  const theme: Theme = useTheme();
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
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
          Account
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
      <View
        style={{
          marginHorizontal: 16,
          marginTop: 16,
          ...shadowBox,
          shadowColor: Colors.matteBlack,
        }}>
        <LinearGradient
          colors={[Colors.blueDark, Colors.blue]}
          style={{
            borderRadius: 8,
            paddingBottom: 16,
            paddingHorizontal: 16,
          }}>
          <View
            style={{
              height: 80,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: Colors.neutralLightest,
                fontWeight: '900',
                fontSize: 18,
              }}>
              Current account
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.white,
              borderRadius: 8,
              padding: 8,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexGrow: 3,
              }}>
              <Text
                style={{
                  fontWeight: '900',
                  color: Colors.text,
                  fontSize: 16,
                }}>
                {user.numberPhone}
              </Text>
              <LinearGradient
                colors={[Colors.blueDark, Colors.blue]}
                style={{
                  width: 60,
                  borderRadius: 4,
                  padding: 4,
                }}>
                <Text
                  style={{
                    color: Colors.neutralLightest,
                    fontWeight: '700',
                    fontSize: 12,
                    textAlign: 'center',
                  }}>
                  Default
                </Text>
              </LinearGradient>
              <Text
                style={{
                  marginTop: 32,
                  fontWeight: '600',
                  color: Colors.neutralDarker,
                }}>
                Available balance
              </Text>
              <Text
                style={{
                  color: Colors.text,
                  fontWeight: '900',
                  fontSize: 16,
                }}>
                {`${user.balance}${user.currency === 'USD' ? '$' : 'VNĐ'}`}
              </Text>
            </View>
            <View
              style={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <Pressable
                style={{
                  backgroundColor: Colors.neutralLighter,
                  borderRadius: 4,
                  paddingHorizontal: 16,
                  paddingVertical: 2,
                }}>
                <AntDesignIcons
                  name={'arrowright'}
                  color={Colors.text}
                  size={16}
                />
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
}
