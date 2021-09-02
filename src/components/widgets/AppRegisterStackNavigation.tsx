import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import {Platform, Pressable, View} from 'react-native';
import EntypoIcons from '../fonts-icon/entypo-icons';

const AppRegisterStack = createNativeStackNavigator();

export default function AppRegisterStackNavigation() {
  return (
    <AppRegisterStack.Navigator initialRouteName={'sign-in'}>
      <AppRegisterStack.Screen
        name={'sign-in'}
        component={SignInScreen}
        options={{
          headerShown: false,
        }}
      />
      <AppRegisterStack.Screen
        name={'sign-up'}
        component={SignUpScreen}
        options={{
          headerShown: true,
          header: props => {
            return (
              <View
                style={{
                  paddingTop: Platform.OS === 'android' ? 0 : 54,
                  backgroundColor: '#f2f2f2',
                }}>
                <Pressable
                  onPress={() => {
                    props.navigation.goBack();
                  }}
                  style={{
                    margin: 16,
                  }}>
                  <EntypoIcons
                    name="chevron-small-left"
                    size={32}
                    color={'black'}
                  />
                </Pressable>
              </View>
            );
          },
        }}
      />
    </AppRegisterStack.Navigator>
  );
}
