import React from "react";
import { Platform, SafeAreaView, Text, StatusBar } from "react-native";
import { Home } from "./component";

export default function App() {
  return (
    <SafeAreaView
      style={{
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <Text>Home</Text>
    </SafeAreaView>
  );
}
