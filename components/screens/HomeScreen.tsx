import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import {
  AnalyticsScreen,
  DashboardScreen,
  PaymentScreen,
  ServicesScreen,
} from '.';
import {
  EntypoIcon,
  FontAwesome5BrandsIcon,
  MaterialCommunityIcons,
  MaterialIcon,
} from '..';
import {colors} from '../../values';

const Tabs = createBottomTabNavigator();

export default class HomeScreen extends Component {
  render() {
    return (
      <Tabs.Navigator initialRouteName="dashboard">
        <Tabs.Screen
          name="dashboard"
          component={DashboardScreen}
          options={{
            headerTitleAlign: 'center',
            title: 'Dashboard',
            headerRight: props => (
              <Image
                source={require('../../assets/leak.jpeg')}
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 18,
                  marginHorizontal: 8,
                }}
              />
            ),
            headerTitleStyle: {
              fontWeight: '900',
            },
            tabBarIcon: props => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcon
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
            tabBarLabelStyle: {display: 'none'},
          }}
        />
        <Tabs.Screen
          name="payment"
          component={PaymentScreen}
          options={{
            title: 'Payment',
            tabBarIcon: props => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <MaterialIcon
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
            tabBarLabelStyle: {display: 'none'},
          }}
        />
        <Tabs.Screen
          name="services"
          component={ServicesScreen}
          options={{
            title: 'Services',
            tabBarIcon: props => (
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <EntypoIcon
                  name="message"
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
            tabBarLabelStyle: {display: 'none'},
          }}
        />
        <Tabs.Screen
          name="analytics"
          component={AnalyticsScreen}
          options={{
            title: 'Analytics',
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
            tabBarLabelStyle: {display: 'none'},
          }}
        />
      </Tabs.Navigator>
    );
  }
}
