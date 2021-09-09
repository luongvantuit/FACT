import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StatusBar, View} from 'react-native';
import Colors from '../../assets/colors';
import EntypoIcons from '../fonts-icon/entypo-icons';
import MaterialCommunityIcons from '../fonts-icon/material-community-icons';
import AnalyticsScreen from '../screens/AnalyticsScreen';
import DashboardScreen from '../screens/DashboardScreen';
import GroupsAndFriendsScreen from '../screens/GroupsAndFriendsScreen';
import WalletScreen from '../screens/WalletScreen';
import shadowBox from './ShadowBox';

const AppHomeBottomTabs = createBottomTabNavigator();

export default function AppHomeBottomTabsNavigation() {
  return (
    <AppHomeBottomTabs.Navigator initialRouteName={'dashboard'}>
      {/**
       * header dashboard
       */}
      <AppHomeBottomTabs.Screen
        name="dashboard"
        component={DashboardScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIcon: props => {
            return (
              <TabContainer>
                <MaterialCommunityIcons
                  name={'view-dashboard'}
                  size={props.focused === true ? 32 : 24}
                  color={
                    props.focused === true
                      ? Colors.yellowDark
                      : Colors.neutralDark
                  }
                />
              </TabContainer>
            );
          },
          tabBarStyle: {
            borderTopWidth: 0,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
            backgroundColor: Colors.white,
          },
        }}
      />
      {/**
       * header tab analytics
       */}
      <AppHomeBottomTabs.Screen
        name="analytics"
        component={AnalyticsScreen}
        options={{
          headerShown: false,
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIcon: props => {
            return (
              <TabContainer>
                <MaterialCommunityIcons
                  name={'google-analytics'}
                  size={props.focused === true ? 32 : 24}
                  color={
                    props.focused === true
                      ? Colors.yellowDark
                      : Colors.neutralDark
                  }
                />
              </TabContainer>
            );
          },
          tabBarStyle: {
            borderTopWidth: 0,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
            backgroundColor: Colors.white,
          },
        }}
      />
      {}
      <AppHomeBottomTabs.Screen
        name="groups-and-friends"
        component={GroupsAndFriendsScreen}
        options={{
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIcon: (props: any) => (
            <TabContainer>
              <MaterialCommunityIcons
                name={'chat'}
                size={props.focused === true ? 32 : 24}
                color={
                  props.focused === true
                    ? Colors.yellowDark
                    : Colors.neutralDark
                }
              />
            </TabContainer>
          ),
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
            backgroundColor: Colors.white,
          },
        }}
      />
      {/**
       * header tab wallet
       */}
      <AppHomeBottomTabs.Screen
        name="wallet"
        component={WalletScreen}
        options={{
          tabBarLabelStyle: {
            display: 'none',
          },
          tabBarIcon: (props: any) => {
            return (
              <TabContainer>
                <EntypoIcons
                  name={'wallet'}
                  size={props.focused === true ? 32 : 24}
                  color={
                    props.focused === true
                      ? Colors.yellowDark
                      : Colors.neutralDark
                  }
                />
              </TabContainer>
            );
          },
          headerShown: false,
          tabBarStyle: {
            borderTopWidth: 0,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
            backgroundColor: Colors.white,
          },
        }}
      />
    </AppHomeBottomTabs.Navigator>
  );
}

function TabContainer(props: {children?: JSX.Element}): JSX.Element {
  return (
    <View
      style={{
        display: 'flex',
        alignItems: 'center',
      }}>
      {props.children}
    </View>
  );
}
