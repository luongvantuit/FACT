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
  FontAwesomeIcon,
  MaterialCommunityIcons,
  MaterialIcon,
} from '..';

const Tabs = createBottomTabNavigator();

export default class HomeScreen extends Component {
  render() {
    return (
      <Tabs.Navigator initialRouteName="dashboard" screenOptions={{}}>
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
                <FontAwesomeIcon
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
            tabBarLabelStyle: {display: 'none'},
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
            tabBarLabelStyle: {display: 'none'},
          }}
        />
        {/* */}
        <Tabs.Screen
          name="user"
          component={AnalyticsScreen}
          options={{
            title: 'User',
            headerTitleAlign: 'center',
            headerTitle: props => (
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 20,
                }}>
                User
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
                <EntypoIcon
                  name="user"
                  size={props.focused === true ? 22 : 26}
                />
                <Text
                  style={{
                    marginHorizontal: 4,
                    fontWeight: '900',
                    display: props.focused === true ? 'flex' : 'none',
                    fontSize: 10,
                  }}>
                  User
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
