import React from "react";
import { NavigationContainer } from "@react-navigation/native/";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, SignIn, SignUp } from "./component";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
