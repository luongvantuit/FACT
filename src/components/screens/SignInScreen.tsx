import React, {Component} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import FlatButton from '../widgets/FlatButton';

export default class SignInScreen extends Component<{
  navigation: any;
}> {
  render() {
    return (
      <SafeAreaView>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View>
            <Text>Sign In</Text>
            <TextInput placeholder={'Number Phone'} />
            <FlatButton
              onPress={() => {
                this.props.navigation.navigate('home');
              }}>
              <Text>Next Step</Text>
            </FlatButton>
            <View>
              <Text
                style={{
                  fontWeight: '500',
                }}>
                You Haven't Account?
              </Text>
              <FlatButton
                onPress={() => {
                  this.props.navigation.navigate('sign-up');
                }}>
                <Text>Create Account</Text>
              </FlatButton>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
