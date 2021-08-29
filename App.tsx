import React from "react";
import { useColorScheme } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Home, SignIn, SignUp } from "./component";
import { theme, themeDark } from "./theme";

const Stack = createNativeStackNavigator();

export default function App() {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer theme={colorScheme === "dark" ? themeDark : theme}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="SignIn" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
