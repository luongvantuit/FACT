import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AppStackNavigation from './src/components/widgets/AppStackNavigation';
import React from 'react';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppStackNavigation />
  );
}
