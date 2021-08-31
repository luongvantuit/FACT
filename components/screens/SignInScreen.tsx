import React, {Component} from 'react';
import {ScrollView, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatButton} from '..';
import {styleSignInScreen as styles} from '../../styles';
import {strings} from '../../values';

export default class SignInScreen extends Component<{
  navigation: any;
}> {
  render() {
    return (
      <SafeAreaView>
        <ScrollView style={styles.scrollWindow}>
          <View style={styles.boxContainer}>
            <Text style={styles.textTitle}>{strings.signIn}</Text>
            <TextInput
              placeholder={strings.numberPhone}
              style={styles.textInput}
            />
            <FlatButton
              title={strings.nextStep}
              styleContainer={styles.flatButtonNextStepContainer}
              styleText={styles.flatButtonNextStepText}
              onPress={() => {
                this.props.navigation.navigate('dashboard');
              }}
            />
            <View style={styles.boxCotainerCreateAccount}>
              <Text
                style={{
                  fontWeight: '500',
                }}>
                {strings.youHaveNotAccount}
              </Text>
              <FlatButton
                title={strings.createAccount}
                onPress={() => {
                  this.props.navigation.navigate('sign-up');
                }}
                styleText={styles.textCreateAccount}
              />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
