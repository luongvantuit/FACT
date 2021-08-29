import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";

export default class SignIn extends React.Component<any, any> {
  render() {
    return (
      <SafeAreaView
        style={{
          paddingTop:
            Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
        }}
      >
        <ScrollView
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
        >
          <View>
            <Text>Sign In</Text>
            <TextInput placeholder="Number Phone" keyboardType="numeric" />
            <TouchableOpacity>
              <Text>Send code</Text>
            </TouchableOpacity>
            <View style={styles.boxCreateAccount}>
              <Text>You haven't account?</Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("SignUp");
                }}
              >
                <Text> Create account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  boxCreateAccount: {
    width: Dimensions.get("screen").width,
    display: "flex",
    flexDirection: "row",
  },
});
