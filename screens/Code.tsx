import React, { Component } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from "react-native";

const widthWindow: number = Dimensions.get("window").width;
const heightWindow: number = Dimensions.get("window").height;

export default class Code extends Component<any, any> {
  render() {
    const { from }: any = this.props.route.params;
    return (
      <SafeAreaView
        style={{
          width: widthWindow,
          height: heightWindow,
        }}
      >
        <ScrollView
          style={{
            paddingTop:
              Platform.OS === "android" ? StatusBar.currentHeight || 0 : 0,
          }}
        >
          <View style={styles.boxContainer}>
            <Text style={styles.textTitle}>Code</Text>
            <TextInput
              style={styles.textInputNumberCode}
              placeholder="6 - Digit Number Code"
            />
            <TouchableOpacity
              onPress={() => {
                if (from === "sign-in")
                  this.props.navigation.navigate("verify-password");
                else this.props.navigation.navigate("set-password");
              }}
            >
              <View style={styles.flatButton}>
                <Text style={styles.textFlatButton}>Confirm</Text>
              </View>
            </TouchableOpacity>
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
  textInputNumberCode: {
    width: widthWindow - 34,
    borderWidth: 1,
    borderRadius: 8,
    padding: 16,
    borderColor: "#426eb4",
    marginTop: 16,
  },
  flatButton: {
    margin: 16,
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
});
