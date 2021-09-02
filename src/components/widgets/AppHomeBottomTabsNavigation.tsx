import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, Platform, Image, Pressable} from 'react-native';
import {leakImage} from '../../assets';
import user from '../../datas/user';
import AppTheme from '../../themes/app-theme';
import EntypoIcons from '../fonts-icon/entypo-icons';
import MaterialCommunityIcons from '../fonts-icon/material-community-icons';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import WalletScreen from '../screens/WalletScreen';

const AppHomeBottomTabs = createBottomTabNavigator();

export default function AppHomeBottomTabsNavigation({navigation}: any) {
  const theme: AppTheme = useTheme() as AppTheme;
  return (
    <AppHomeBottomTabs.Navigator initialRouteName={'dashboard'}>
      <AppHomeBottomTabs.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{
          headerShown: true,
          header: (props: BottomTabHeaderProps) => (
            <View
              style={{
                paddingTop: Platform.OS === 'android' ? 16 : 68,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexDirection: 'row',
                paddingBottom: 16,
                paddingHorizontal: 8,
                backgroundColor: theme.app?.backgroundHeaderColor,
                borderBottomColor: theme.app?.borderColor,
                borderBottomWidth: 0.3,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    fontWeight: '700',
                    fontSize: 14,
                    color: theme.app?.textColor,
                  }}>
                  Hi, TU
                </Text>
                <Text
                  style={{
                    fontWeight: '900',
                    fontSize: 18,
                    color: theme.app?.textColor,
                  }}>
                  Welcome back!
                </Text>
              </View>
              <Pressable
                onPress={() => {
                  props.navigation.navigate('profile');
                }}>
                <Image
                  source={leakImage}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                  }}
                />
              </Pressable>
            </View>
          ),
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIcon: props => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name={'view-dashboard'}
                color={
                  props.focused === true
                    ? theme.app?.iconBottomTabsFocusedColor
                    : theme.app?.iconBottomTabsColor
                }
                size={props.focused === true ? 24 : 32}
              />
              <Text
                style={{
                  fontSize: 10,
                  display: props.focused === true ? 'flex' : 'none',
                  fontWeight: '900',
                  color:
                    props.focused === true
                      ? theme.app?.labelBottomTabsFocusedColor
                      : theme.app?.labelBottomTabsColor,
                }}>
                Dashboard
              </Text>
            </View>
          ),
        }}
      />
      <AppHomeBottomTabs.Screen
        name="analytics"
        component={AnalyticsScreen}
        options={{
          headerShown: true,
          header: (props: BottomTabHeaderProps) => <View></View>,
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIcon: props => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <MaterialCommunityIcons
                name={'google-analytics'}
                color={
                  props.focused === true
                    ? theme.app?.iconBottomTabsFocusedColor
                    : theme.app?.iconBottomTabsColor
                }
                size={props.focused === true ? 24 : 32}
              />
              <Text
                style={{
                  fontSize: 10,
                  display: props.focused === true ? 'flex' : 'none',
                  fontWeight: '900',
                  color:
                    props.focused === true
                      ? theme.app?.labelBottomTabsFocusedColor
                      : theme.app?.labelBottomTabsColor,
                }}>
                Analytics
              </Text>
            </View>
          ),
        }}
      />
      <AppHomeBottomTabs.Screen
        name="wallet"
        component={WalletScreen}
        options={{
          headerShown: true,
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIcon: (props: any) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}>
              <EntypoIcons
                name={'wallet'}
                color={
                  props.focused === true
                    ? theme.app?.iconBottomTabsFocusedColor
                    : theme.app?.iconBottomTabsColor
                }
                size={props.focused === true ? 24 : 32}
              />
              <Text
                style={{
                  display: props.focused === true ? 'flex' : 'none',
                  fontWeight: '900',
                  fontSize: 10,
                  color:
                    props.focused === true
                      ? theme.app?.labelBottomTabsFocusedColor
                      : theme.app?.labelBottomTabsColor,
                }}>
                Wallet
              </Text>
            </View>
          ),
          header: (props: BottomTabHeaderProps) => (
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: Platform.OS === 'android' ? 0 : 54,
                backgroundColor: theme.app?.backgroundHeaderColor,
                borderBottomColor: theme.app?.borderColor,
                borderBottomWidth: 0.3,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Image
                  source={leakImage}
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 8,
                    margin: 16,
                  }}
                />
                <View>
                  <Text
                    style={{
                      fontWeight: '900',
                      fontSize: 18,
                      color: theme.app?.textColor,
                    }}>
                    {user.name}
                  </Text>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 14,
                      color: theme.app?.textColor,
                    }}>
                    {user.type}
                  </Text>
                </View>
              </View>
              <Pressable
                onPress={() => {
                  navigation.navigate('profile');
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
          ),
        }}
      />
    </AppHomeBottomTabs.Navigator>
  );
}
