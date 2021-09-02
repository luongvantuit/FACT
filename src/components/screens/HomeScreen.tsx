import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { Component } from 'react';
import { Button, Image, Pressable, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import EntypoIcons from '../fonts-icon/entypo-icons';
import FontAwesomeIcons from '../fonts-icon/font-awesome-icons';
import MaterialCommunityIcons from '../fonts-icon/material-community-icons';
import MaterialIcons from '../fonts-icon/material-icons';
import AnalyticsScreen from './AnalyticsScreen';
import DashboardScreen from './DashboardScreen';
import PaymentScreen from './PaymentScreen';
import ServicesScreen from './ServicesScreen';
import WalletScreen from './WalletScreen';

const Tabs = createBottomTabNavigator();

export default class HomeScreen extends Component<{ navigation: any }> {
  render() {
    return (
      <Tabs.Navigator initialRouteName="dashboard" screenOptions={{ }}>
        <Tabs.Screen
          name="dashboard"
          component={DashboardScreen}
          options={{
            headerTitleAlign: 'center',
            title: 'Dashboard',
            headerRight: props => (
              <Pressable
                onPress={() => {
                  this.props.navigation.navigate('user');
                }}>
                <Image
                  source={require('../../assets/leak.jpeg')}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    marginHorizontal: 8,
                  }}
                />
              </Pressable>
            ),
            headerTitleStyle: {
              fontWeight: '900',
            },
            headerTitle: props => (
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 20,
                }}>
                Dashboard
              </Text>
            ),
            tabBarIcon: props => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcons
                  name="dashboard"
                  size={props.focused === true ? 22 : 26}
                />
                <Text
                  style={{
                    marginHorizontal: 4,
                    fontWeight: '900',
                    display: props.focused === true ? 'flex' : 'none',
                    fontSize: 10,
                  }}>
                  Dashboard
                </Text>
              </View>
            ),
            tabBarLabelStyle: { display: 'none' },
          }}
        />
        <Tabs.Screen
          name="payment"
          component={PaymentScreen}
          options={{
            title: 'Payment',
            headerTitleAlign: 'center',
            headerTitle: props => (
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 20,
                }}>
                Payment
              </Text>
            ),
            tabBarIcon: props => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcons
                  name="payment"
                  size={props.focused === true ? 22 : 26}
                />
                <Text
                  style={{
                    marginHorizontal: 4,
                    fontWeight: '900',
                    display: props.focused === true ? 'flex' : 'none',
                    fontSize: 10,
                  }}>
                  Payment
                </Text>
              </View>
            ),
            tabBarLabelStyle: { display: 'none' },
          }}
        />
        <Tabs.Screen
          name="services"
          component={ServicesScreen}
          options={{
            title: 'Services',
            headerTitleAlign: 'center',
            headerTitle: props => (
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 20,
                }}>
                Services
              </Text>
            ),
            tabBarIcon: props => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <FontAwesomeIcons
                  name="modx"
                  size={props.focused === true ? 22 : 26}
                />
                <Text
                  style={{
                    marginHorizontal: 4,
                    fontWeight: '900',
                    display: props.focused === true ? 'flex' : 'none',
                    fontSize: 10,
                  }}>
                  Services
                </Text>
              </View>
            ),
            tabBarLabelStyle: { display: 'none' },
          }}
        />
        <Tabs.Screen
          name="analytics"
          component={AnalyticsScreen}
          options={{
            title: 'Analytics',
            headerTitleAlign: 'center',
            headerTitle: props => (
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 20,
                }}>
                Analytics
              </Text>
            ),
            tabBarIcon: props => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialCommunityIcons
                  name="google-analytics"
                  size={props.focused === true ? 22 : 26}
                />
                <Text
                  style={{
                    marginHorizontal: 4,
                    fontWeight: '900',
                    display: props.focused === true ? 'flex' : 'none',
                    fontSize: 10,
                  }}>
                  Analytics
                </Text>
              </View>
            ),
            tabBarLabelStyle: { display: 'none' },
          }}
        />
        {/* */}
        <Tabs.Screen
          name="wallet"
          component={WalletScreen}
          options={{
            title: 'Wallet',
            headerTitleAlign: 'center',
            headerTitle: props => (
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 20,
                }}>
                Wallet
              </Text>
            ),
            tabBarIcon: props => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <EntypoIcons
                  name="wallet"
                  size={props.focused === true ? 22 : 26}
                />
                <Text
                  style={{
                    marginHorizontal: 4,
                    fontWeight: '900',
                    display: props.focused === true ? 'flex' : 'none',
                    fontSize: 10,
                  }}>
                  Wallet
                </Text>
              </View>
            ),
            tabBarLabelStyle: { display: 'none' },
          }}
        />
      </Tabs.Navigator>
    );
  }
}
