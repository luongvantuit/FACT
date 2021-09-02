import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import WalletScreen from '../screens/WalletScreen';
import MaterialCommunityIcons from '../fonts-icon/material-community-icons'
import Ionicons from '../fonts-icon/ionicons'
import styled from 'styled-components';
import HeaderDashboard from '../screens/HeaderDashboard';
const BottomTab = createBottomTabNavigator();

export default function HomeBottomTab() {
  return (
    <BottomTab.Navigator initialRouteName="dashboard">
      <BottomTab.Screen component={DashboardScreen} name="dashboard" options={{
        tabBarIcon: props => (
          <Container>
            <MaterialCommunityIcons name='view-dashboard' color={'#000'} size={props.focused === true ? 24 : 32} />
            <Text style={{
              color: '#000',
              display: props.focused === true ? 'flex' : 'none',
              fontWeight: '900',
              fontSize: 10
            }}>Dashboard</Text>
          </Container>
        ),
        tabBarLabelStyle: {
          display: 'none'
        },
        header: props => (<HeaderDashboard props={props} />)
      }} />
      <BottomTab.Screen component={AnalyticsScreen} name="analytics" options={{
        tabBarIcon: props => (
          <Container>
            <MaterialCommunityIcons name='google-analytics' color={'#000'} size={props.focused === true ? 24 : 32} />
            <Text style={{
              color: '#000',
              display: props.focused === true ? 'flex' : 'none',
              fontWeight: '900',
              fontSize: 10
            }}>Analytics</Text>
          </Container>
        ),
        tabBarLabelStyle: {
          display: 'none'
        }
      }} />
      <BottomTab.Screen component={WalletScreen} name="wallet" options={{
        tabBarIcon: props => (
          <Container>
            <Ionicons name='wallet' color={'#000'} size={props.focused === true ? 24 : 32} />
            <Text style={{
              color: '#000',
              display: props.focused === true ? 'flex' : 'none',
              fontWeight: '900',
              fontSize: 10,
            }}>Wallet</Text>
          </Container>
        ),
        tabBarLabelStyle: {
          display: 'none'
        }
      }} />
    </BottomTab.Navigator>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


