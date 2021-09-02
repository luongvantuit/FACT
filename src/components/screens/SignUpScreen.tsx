import React, { Component } from 'react';
import { Dimensions, ScrollView, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import FlatButton from '../widgets/FlatButton';
export default class SignUpScreen extends Component<
  {
    navigation: any;
  },
  any
> {
  render() {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View
            style={{
              height: Dimensions.get('window').height - 54,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 36,
                margin: 16,
              }}>
              Sign Up
            </Text>
            <TextInput
              placeholder={'Number Phone'}
            />
            <FlatButton
              onPress={() => {
                this.props.navigation.navigate('home');
              }}>
              <Text >
                Next Step
              </Text>
            </FlatButton>
            <FlatButton
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={{
                marginVertical: 8,
              }}>
              <Text
                style={{
                  color: '#000',
                  fontWeight: '900',
                }}>
                Go Back
              </Text>
            </FlatButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
