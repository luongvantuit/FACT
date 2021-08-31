import React, {Component} from 'react';
import {
  Dimensions,
  Platform,
  ScrollView,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styleSignInScreen, styleSignUpScreen as styles} from '../../styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
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
        <ScrollView>
          <View
            style={{
              width: 54,
            }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack();
              }}>
              <View
                style={{
                  marginHorizontal: 16,
                  marginVertical: Platform.OS === 'ios' ? 8 : 16,
                }}>
                <Icon name="arrow-back-ios" size={28} color={colors.black1} />
              </View>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: Dimensions.get('window').height - 54,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
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
