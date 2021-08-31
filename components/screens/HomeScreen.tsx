import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  AnalyticsScreen,
  DashboardScreen,
  PaymentScreen,
  ServicesScreen,
} from '.';
import {MaterialIcon} from '..';

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
            tabBarIcon: props => <MaterialIcon name="dashboard" />,
          }}
        />
        <Tabs.Screen
          name="payment"
          component={PaymentScreen}
          options={{
            title: 'Payment',
            tabBarIcon: props => <MaterialIcon name="payment" />,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '900',
            },
          }}
        />
        <Tabs.Screen
          name="services"
          component={ServicesScreen}
          options={{
            title: 'Services',
            tabBarIcon: props => <MaterialIcon name="payment" />,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '900',
            },
          }}
        />
        <Tabs.Screen
          name="analytics"
          component={AnalyticsScreen}
          options={{
            title: 'Analytics',
            tabBarIcon: props => <MaterialIcon name="payment" />,
            headerTitleAlign: 'center',
            headerTitleStyle: {
              fontWeight: '900',
            },
          }}
        />
      </Tabs.Navigator>
    );
  }
}
