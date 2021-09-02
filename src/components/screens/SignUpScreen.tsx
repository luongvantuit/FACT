import React, {Component} from 'react';
import {
  KeyboardAvoidingView,
  TouchableNativeFeedback,
  View,
} from 'react-native';
export default class SignUpScreen extends Component<
  {
    navigation: any;
  },
  any
> {
  render() {
    return (
      <KeyboardAvoidingView>
        <TouchableNativeFeedback>
          <View></View>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    );
  }
}
