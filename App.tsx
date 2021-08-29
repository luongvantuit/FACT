import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  Code,
  Home,
  SetPassword,
  SignIn,
  SignUp,
  VerifyPassword,
} from "./screens";
const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="sign-in">
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "Home",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="sign-up"
          component={SignUp}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="sign-in"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="code"
          component={Code}
          options={{
            title: "Verify Code",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="set-password"
          component={SetPassword}
          options={{
            title: "Set Password",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen
          name="verify-password"
          component={VerifyPassword}
          options={{
            title: "Verify Password",
            headerTitleAlign: "center",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
