import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import WalletScreen from '../screens/WalletScreen';
import MaterialCommunityIcons from '../fonts-icon/material-community-icons'
import Ionicons from '../fonts-icon/ionicons'
import styled from 'styled-components';
const BottomTab = createBottomTabNavigator();

export default function HomeBottomTab() {
  return (
    <BottomTab.Navigator initialRouteName="dashboard">
      <BottomTab.Screen component={DashboardScreen} name="dashboard" options={{
        tabBarIcon: props => (
          <Container>
            <MaterialCommunityIcons name='view-dashboard' color={'#000'} />
            <Text style={{
              color: '#000'
            }}>Dashboard</Text>
          </Container>
        ),
        tabBarLabelStyle: {
          display: 'none'
        },
      }} />
      <BottomTab.Screen component={AnalyticsScreen} name="analytic" options={{
        tabBarIcon: props => (
          <Container>
            <MaterialCommunityIcons name='google-analytics' color={'#000'} />
            <Text style={{
              color: '#000'
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
            <Ionicons name='wallet' color={'#000'} />
            <Text style={{
              color: '#000'
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


