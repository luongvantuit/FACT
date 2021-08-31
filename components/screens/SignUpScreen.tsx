import React, {Component} from 'react';
import {Dimensions, ScrollView, Text, TextInput, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styleSignInScreen, styleSignUpScreen as styles} from '../../styles';
import {colors, strings} from '../../values';
import {FlatButton, ToolbarBackSignUp} from '..';
export default class SignUpScreen extends Component<
  {
    navigation: any;
  },
  any
> {
  render() {
    return (
      <SafeAreaView>
        <ScrollView>
          <ToolbarBackSignUp
            onPress={() => {
              this.props.navigation.goBack();
            }}
          />
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
              title={strings.nextStep}
              styleText={styleSignInScreen.flatButtonNextStepText}
              styleContainer={styleSignInScreen.flatButtonNextStepContainer}
              onPress={() => {
                this.props.navigation.navigate('dashboard');
              }}
            />
            <FlatButton
              title={strings.goBack}
              onPress={() => {
                this.props.navigation.goBack();
              }}
              styleText={{
                color: colors.black1,
                fontWeight: '900',
              }}
              styleContainer={{
                marginVertical: 8,
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
