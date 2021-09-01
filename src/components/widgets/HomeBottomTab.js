import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
const HomeBottomTab = createBottomTabNavigator();

export default function HomeBottomTab() {
  return (
    <HomeBottomTab.Navigator>
      <HomeBottomTab.Screen></HomeBottomTab.Screen>
    </HomeBottomTab.Navigator>
  );
}
