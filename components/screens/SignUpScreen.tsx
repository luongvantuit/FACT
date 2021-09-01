import React, {Component} from 'react';
import {Dimensions, ScrollView, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styleSignInScreen, styleSignUpScreen as styles} from '../../styles';
import {colors, strings} from '../../values';
import {FlatButton} from '..';
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
              {strings.signUp}
            </Text>
            <TextInput
              placeholder={strings.numberPhone}
              style={styles.textInput}
            />
            <FlatButton
              style={styleSignInScreen.flatButtonNextStepContainer}
              onPress={() => {
                this.props.navigation.navigate('home');
              }}>
              <Text style={styleSignInScreen.flatButtonNextStepText}>
                {strings.nextStep}
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
                  color: colors.black1,
                  fontWeight: '900',
                }}>
                {strings.goBack}
              </Text>
            </FlatButton>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
