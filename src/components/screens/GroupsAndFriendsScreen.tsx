import React from 'react';
import {View, Text, StatusBar, Platform, Image} from 'react-native';
import {highlandsCoffeeImage, leakNDHImage} from '../../assets';
import Colors from '../../assets/colors';
import shadowBox from '../widgets/ShadowBox';

export default function GroupsAndFriendsScreen() {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
      <View
        style={{
          backgroundColor: Colors.white,
          paddingTop: 54,
          paddingBottom: 8,
          ...shadowBox,
          shadowColor: Colors.matteBlack,
        }}>
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 18,
            textAlign: 'center',
          }}>
          Groups and friends
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          backgroundColor: Colors.neutralLightest,
          paddingTop: 8,
        }}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.white,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            paddingHorizontal: 16,
          }}>
          <Text
            style={{
              color: Colors.text,
              fontWeight: '900',
              fontSize: 24,
              marginVertical: 16,
            }}>
            Messages
          </Text>
          {/** 2 */}
          <View
            style={{
              marginVertical: 8,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={highlandsCoffeeImage}
              style={{
                width: 64,
                height: 64,
                borderRadius: 0,
              }}
              resizeMode={'contain'}
            />
            <View
              style={{
                flex: 1,
                height: 64,
                justifyContent: 'center',
                paddingHorizontal: 8,
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    height: 24,
                    color: Colors.text,
                    fontSize: 16,
                    fontWeight: '900',
                  }}>
                  Highlands Coffee
                </Text>
                <View
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    backgroundColor: Colors.blueLight,
                    borderRadius: 100,
                    marginHorizontal: 8,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontWeight: '900',
                      color: Colors.white,
                      fontSize: 8,
                    }}>
                    Service
                  </Text>
                </View>
              </View>
              <Text
                style={{
                  height: 40,
                  color: Colors.neutralLight,
                }}
                numberOfLines={2}
                ellipsizeMode={'tail'}>
                Congratulations! You get a discount voucher for orders over 10$
              </Text>
            </View>
            <View
              style={{
                width: 64,
                height: 64,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.neutralLighter,
                  fontSize: 12,
                }}>
                18:00PM
              </Text>
              {/* <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.red,
                }}>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 10,
                    color: Colors.neutralLightest,
                  }}>
                  1
                </Text>
              </View> */}
            </View>
          </View>
          {/** */}
          {/** 1 */}
          <View
            style={{
              marginVertical: 8,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/jonathan-perry.jpeg')}
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
              }}
            />
            <View
              style={{
                flex: 1,
                height: 64,
                justifyContent: 'center',
                paddingHorizontal: 8,
              }}>
              <Text
                style={{
                  height: 24,
                  color: Colors.text,
                  fontSize: 16,
                  fontWeight: '900',
                }}>
                Jonathan Perry
              </Text>
              <Text
                style={{
                  height: 40,
                  color: Colors.neutralLight,
                }}
                numberOfLines={2}
                ellipsizeMode={'tail'}>
                I am Perry, here to help you find new friends.
              </Text>
            </View>
            <View
              style={{
                width: 64,
                height: 64,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.neutralLighter,
                  fontSize: 12,
                }}>
                12:35PM
              </Text>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.red,
                }}>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 10,
                    color: Colors.neutralLightest,
                  }}>
                  1
                </Text>
              </View>
            </View>
          </View>
          {/** */}
          {/** 2 */}
          <View
            style={{
              marginVertical: 8,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={leakNDHImage}
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
              }}
            />
            <View
              style={{
                flex: 1,
                height: 64,
                justifyContent: 'center',
                paddingHorizontal: 8,
              }}>
              <Text
                style={{
                  height: 24,
                  color: Colors.text,
                  fontSize: 16,
                  fontWeight: '900',
                }}>
                Nguyễn Đức Huy
              </Text>
              <Text
                style={{
                  height: 40,
                  color: Colors.neutralLight,
                }}
                numberOfLines={2}
                ellipsizeMode={'tail'}>
                Transfer: 1000$
              </Text>
            </View>
            <View
              style={{
                width: 64,
                height: 64,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.neutralLighter,
                  fontSize: 12,
                }}>
                05:12AM
              </Text>
              <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.red,
                }}>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 10,
                    color: Colors.neutralLightest,
                  }}>
                  2
                </Text>
              </View>
            </View>
          </View>
          {/** */}
          {/** 3*/}
          <View
            style={{
              marginVertical: 8,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={require('../../assets/bill-gates.jpeg')}
              style={{
                width: 64,
                height: 64,
                borderRadius: 32,
              }}
            />
            <View
              style={{
                flex: 1,
                height: 64,
                justifyContent: 'center',
                paddingHorizontal: 8,
              }}>
              <Text
                style={{
                  height: 24,
                  color: Colors.text,
                  fontSize: 16,
                  fontWeight: '900',
                }}>
                Bill Gates
              </Text>
              <Text
                style={{
                  height: 40,
                  color: Colors.neutralLight,
                }}
                numberOfLines={2}
                ellipsizeMode={'tail'}>
                Hello! Tu.
              </Text>
            </View>
            <View
              style={{
                width: 64,
                height: 64,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.neutralLighter,
                  fontSize: 12,
                }}>
                03:30AM
              </Text>
              {/* <View
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: 12,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.red,
                }}>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 10,
                    color: Colors.neutralLightest,
                  }}>
                  1
                </Text>
              </View> */}
            </View>
          </View>
          {/** */}
        </View>
      </View>
    </View>
  );
}
