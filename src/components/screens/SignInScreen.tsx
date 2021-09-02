import React, {Component} from 'react';
import {
  View,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Dimensions,
  Text,
  Pressable,
  Platform,
} from 'react-native';

export default class SignInScreen extends Component<
  {
    navigation: any;
  },
  {isFocus: boolean}
> {
  constructor(props: any) {
    super(props);
    this.state = {
      isFocus: false,
    };
  }
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView style={{flex: 1}} behavior={'position'}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              paddingTop:
                Dimensions.get('screen').height /
                (Platform.OS === 'android' ? 3 : 2),
            }}>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 28,
                marginHorizontal: 32,
                marginVertical: 8,
              }}>
              Hey
            </Text>
            <Text
              style={{
                fontWeight: '800',
                fontSize: 32,
                marginHorizontal: 32,
                marginVertical: 8,
              }}>
              Sign In, Now.
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                marginHorizontal: 32,
                alignItems: 'center',
              }}>
              <Text
                style={{
                  fontWeight: '500',
                  color: '#707070',
                }}>
                If You Haven't Account?
              </Text>
              <Pressable
                style={{
                  marginHorizontal: 8,
                }}
                onPress={() => {
                  this.props.navigation.navigate('sign-up');
                }}>
                <Text
                  style={{
                    fontWeight: '800',
                  }}>
                  Create New Account
                </Text>
              </Pressable>
            </View>
            <TextInput
              placeholder={'Number Phone'}
              keyboardType={'numeric'}
              style={{
                marginHorizontal: 32,
                marginTop: 16,
                marginBottom: 12,
                paddingVertical: Platform.OS === 'android' ? 16 : 20,
                paddingHorizontal: 16,
                backgroundColor: '#D7D7D7',
                borderRadius: 8,
                fontWeight: 'bold',
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: 32,
                marginBottom: 32,
              }}>
              <Text
                style={{
                  color: '#707070',
                }}>
                Forgot Password?
              </Text>
              <Pressable style={{marginHorizontal: 8}} onPress={() => {}}>
                <Text
                  style={{
                    fontWeight: '800',
                  }}>
                  Reset
                </Text>
              </Pressable>
            </View>
            <Pressable
              style={{
                marginHorizontal: 32,
                justifyContent: 'center',
                backgroundColor: '#363636',
                paddingVertical: 16,
                borderRadius: 8,
              }}
              onPress={() => {
                this.props.navigation.navigate('app-user');
              }}>
              <Text
                style={{
                  textAlign: 'center',
                  color: 'white',
                  fontWeight: '900',
                }}>
                Next Step
              </Text>
            </Pressable>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    );
  }
}
