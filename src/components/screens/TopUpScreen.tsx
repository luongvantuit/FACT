import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Platform,
  Pressable,
  Image,
  ScrollView,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IconApp} from '../../assets';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import EntypoIcons from '../fonts-icon/entypo-icons';
import shadowBox from '../widgets/ShadowBox';

export default function TopUpScreen({navigation}: any) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle={'light-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
      <LinearGradient
        colors={[Colors.blueDark, Colors.blueDark, Colors.blue]}
        style={{
          flex: 1,
        }}>
        <Pressable
          style={{
            paddingTop: 54,
            paddingBottom: 16,
            paddingHorizontal: 16,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <EntypoIcons
            name={'chevron-small-left'}
            color={Colors.neutralLightest}
            size={32}
          />
          <Text
            style={{
              color: Colors.neutralLightest,
              textAlign: 'center',
              fontWeight: '900',
              fontSize: 18,
            }}>
            Top up to your wallet
          </Text>
        </Pressable>
        <TouchableWithoutFeedback
          onPress={Keyboard.dismiss}
          style={{
            flex: 1,
          }}>
          <KeyboardAvoidingView
            style={{
              flex: 1,
            }}>
            <View
              style={{
                flex: 1,
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                backgroundColor: Colors.neutralLightest,
              }}>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 8,
                }}>
                <View
                  style={{
                    backgroundColor: Colors.blueLight,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 24,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      color: Colors.neutralLightest,
                      fontWeight: '900',
                      fontSize: 12,
                    }}>
                    Current account
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  textAlign: 'center',
                  marginTop: 8,
                  fontWeight: '900',
                  fontSize: 18,
                }}>
                {user.name}
              </Text>
              <View
                style={{
                  margin: 8,
                  borderRadius: 8,
                  backgroundColor: Colors.neutralLightest,
                  ...shadowBox,
                  shadowColor: Colors.matteBlack,
                  padding: 16,
                }}>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingVertical: 8,
                    borderRadius: 8,
                  }}>
                  <View
                    style={{
                      width: 36,
                      height: 36,
                      borderRadius: 4,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: Colors.neutralLightest,
                      borderColor: Colors.matteBlack,
                      borderWidth: 0.5,
                    }}>
                    <Image
                      source={IconApp}
                      style={{
                        width: 24,
                        height: 24,
                      }}
                    />
                  </View>
                  <Text
                    style={{
                      marginLeft: 8,
                      color: Colors.text,
                      fontWeight: '800',
                    }}>
                    Wallet balance:
                  </Text>
                  <Text
                    style={{
                      fontWeight: '900',
                      color: Colors.text,
                      fontSize: 16,
                    }}>
                    {`${user.balance}${user.currency === 'USD' ? '$' : 'VNĐ'}`}
                  </Text>
                </View>
                <TextInput
                  style={{
                    borderColor: Colors.blueLight,
                    borderWidth: 1,
                    marginTop: 16,
                    paddingVertical: 8,
                    paddingHorizontal: 16,
                    borderRadius: 8,
                    fontWeight: '900',
                    color: Colors.text,
                  }}
                  placeholder={'Amount'}
                  keyboardType={'numeric'}
                  maxLength={9}
                  placeholderTextColor={Colors.neutralLighter}
                />
                <View
                  style={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Pressable
                    style={{
                      paddingVertical: 4,
                      paddingHorizontal: 16,
                      borderColor: Colors.neutralLighter,
                      borderRadius: 8,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: Colors.text,
                        fontWeight: '900',
                      }}>
                      50$
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{
                      paddingVertical: 4,
                      paddingHorizontal: 16,
                      borderColor: Colors.neutralLighter,
                      borderRadius: 8,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: Colors.text,
                        fontWeight: '900',
                      }}>
                      200$
                    </Text>
                  </Pressable>
                  <Pressable
                    style={{
                      paddingVertical: 4,
                      paddingHorizontal: 16,
                      borderColor: Colors.neutralLighter,
                      borderRadius: 8,
                      borderWidth: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <Text
                      style={{
                        color: Colors.text,
                        fontWeight: '900',
                      }}>
                      500$
                    </Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </LinearGradient>
    </View>
  );
}
