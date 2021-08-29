import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Platform,
  StatusBar,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  StyleSheet,
} from "react-native";

const widthWindow: number = Dimensions.get("window").width;
const heightWindow: number = Dimensions.get("window").height;

export default function SignUp({ navigation }: any): JSX.Element {
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
          <Text style={styles.textTitle}>Sign Up</Text>
          <TextInput
            placeholder="Number Phone"
            style={styles.textInputNumberPhone}
            keyboardType="numeric"
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("code");
            }}
          >
            <View style={styles.flatButton}>
              <Text style={styles.textFlatButton}>Next step</Text>
            </View>
          </TouchableOpacity>
          <Text style={styles.textHaveAccount}>You have account</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <View style={styles.flatButton}>
              <Text style={styles.textFlatButton}>Go back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
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
    marginVertical: 16,
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
  textHaveAccount: {
    fontWeight: "bold",
    color: "#000000",
  },
});
