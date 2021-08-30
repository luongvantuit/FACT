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
import Icon from 'react-native-vector-icons/Entypo';
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
                  marginHorizontal: Platform.OS === 'android' ? 8 : 16,
                  marginVertical: 8,
                }}>
                <Icon
                  name="chevron-small-left"
                  size={32}
                  color={colors.black}
                />
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
            />
            <FlatButton
              title={strings.goBack}
              onPress={() => {
                this.props.navigation.goBack();
              }}
              styleText={{
                color: colors.blue6,
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
