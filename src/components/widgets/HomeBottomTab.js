import React from 'react';
import { View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import WalletScreen from '../screens/WalletScreen';
import MaterialCommunityIcons from '../fonts-icon/material-community-icons'
import styled from 'styled-components';
const BottomTab = createBottomTabNavigator();

export default function HomeBottomTab() {
  return (
    <BottomTab.Navigator initialRouteName="Dashboard">
      <BottomTab.Screen component={DashboardScreen} name="Dashboard" options={{

      }} />
      <BottomTab.Screen component={AnalyticsScreen} name="Analytic" options={{
        tabBarShowLabel: false,
        tabBarIcon: props => (
          <Container>
            <MaterialCommunityIcons name='google-analytics' color={'#000'} />
            <Text style={{
              color: '#000'
            }}>Analytics</Text>
          </Container>
        )
      }} />
      <BottomTab.Screen component={WalletScreen} name="Wallet" />
    </BottomTab.Navigator>
  );
}

const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
`;


