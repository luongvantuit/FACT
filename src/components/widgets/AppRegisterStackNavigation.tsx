import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';

const AppRegisterStack = createNativeStackNavigator();

export default function AppRegisterStackNavigation() {
    return (
        <AppRegisterStack.Navigator initialRouteName={'sign-in'}>
            <AppRegisterStack.Screen name={'sign-in'} component={SignInScreen} />
            <AppRegisterStack.Screen name={'sign-up'} component={SignUpScreen} />
        </AppRegisterStack.Navigator>
    )
}
