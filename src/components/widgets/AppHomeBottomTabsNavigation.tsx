import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabHeaderProps} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import React from 'react';
import {View, Text, Platform, Image, Pressable} from 'react-native';
import {leakImage} from '../../assets';
import EntypoIcons from '../fonts-icon/entypo-icons';
import MaterialCommunityIcons from '../fonts-icon/material-community-icons';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import WalletScreen from '../screens/WalletScreen';

const AppHomeBottomTabs = createBottomTabNavigator();

export default function AppHomeBottomTabsNavigation({navigation}: any) {
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
                paddingHorizontal: 16,
                backgroundColor: 'white',
                borderBottomColor: '#D7D7D7',
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
                  }}>
                  Hi, TU
                </Text>
                <Text
                  style={{
                    fontWeight: '900',
                    fontSize: 18,
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
                color={'#000'}
                size={props.focused === true ? 24 : 32}
              />
              <Text
                style={{
                  fontSize: 10,
                  display: props.focused === true ? 'flex' : 'none',
                  fontWeight: '900',
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
                color={'#000'}
                size={props.focused === true ? 24 : 32}
              />
              <Text
                style={{
                  fontSize: 10,
                  display: props.focused === true ? 'flex' : 'none',
                  fontWeight: '900',
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
                color={'#000'}
                size={props.focused === true ? 24 : 32}
              />
              <Text
                style={{
                  display: props.focused === true ? 'flex' : 'none',
                  fontWeight: '900',
                  fontSize: 10,
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
                      fontSize: 18,
                    }}>
                    LUONG VAN TU
                  </Text>
                  <Text
                    style={{
                      fontWeight: '600',
                      fontSize: 14,
                    }}>
                    Personal
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
