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

const widthWindow: number = Dimensions.get("window").width;
const heightWindow: number = Dimensions.get("window").height;

export default class SignIn extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

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
            width: widthWindow,
            height: heightWindow,
          }}
        >
          <View style={styles.boxContainer}>
            <Text style={styles.textTitle}>Sign In</Text>
            <TextInput
              placeholder="Number Phone"
              keyboardType="numeric"
              style={styles.textInputNumberPhone}
            />
            <TouchableOpacity
              onPress={() => {
                this.props.navigator.navigate("code");
              }}
            >
              <View style={styles.flatButton}>
                <Text style={styles.textFlatButton}>Net Step</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.boxHaveNotAccount}>
              <Text style={styles.boxHaveNotAccountText}>
                You haven't account?
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("sign-up");
                }}
              >
                <Text style={styles.boxHaveNotAccountNavigator}>
                  Create Account
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  boxContainer: {
    height: heightWindow > 740 ? heightWindow : 740,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  textTitle: {
    color: "#000000",
    fontSize: 32,
    marginHorizontal: 16,
    fontWeight: "bold",
  },
  textInputNumberPhone: {
    width: widthWindow - 34,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    borderColor: "#426eb4",
    marginTop: 16,
  },
  flatButton: {
    marginTop: 16,
    backgroundColor: "#426eb4",
    display: "flex",
    borderRadius: 8,
    height: 54,
    width: widthWindow - 32,
    paddingHorizontal: 32,
  },
  textFlatButton: {
    lineHeight: 54,
    textAlign: "center",
    color: "#ffffff",
    fontWeight: "bold",
  },
  boxHaveNotAccount: {
    margin: 16,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  boxHaveNotAccountText: {
    color: "#000000",
    paddingHorizontal: 6,
  },
  boxHaveNotAccountNavigator: {
    color: "#426eb4",
    fontWeight: "bold",
  },
});
