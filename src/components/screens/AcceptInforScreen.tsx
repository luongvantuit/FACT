import React, {useState} from 'react';
import {
  Platform,
  StatusBar,
  View,
  Text,
  Pressable,
  Dimensions,
  Image,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Fingerfrint} from '../../assets';
import Colors from '../../assets/colors';
import AntDesignIcons from '../fonts-icon/ant-design-icons';
import EntypoIcons from '../fonts-icon/entypo-icons';
import FeatherIcons from '../fonts-icon/feather-icons';
import Ionicons from '../fonts-icon/ionicons';
import shadowBox from '../widgets/ShadowBox';

export default function AcceptInforScreen({navigation}: any) {
  const [accept, setAccept] = useState<boolean>(false);
  return (
    <View
      style={{
        backgroundColor: Colors.blue,
        flex: 1,
      }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.transparent}
        translucent={Platform.OS === 'android'}
      />
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          paddingHorizontal: 25,
          paddingTop: 54,
          paddingBottom: 16,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <EntypoIcons
          name="chevron-small-left"
          size={32}
          color={Colors.neutralLightest}
        />
        <Text
          style={{
            color: Colors.neutralLightest,
            fontWeight: 'bold',
          }}>
          Verify identity documents
        </Text>
      </Pressable>
      <View
        style={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          flex: 1,
          backgroundColor: Colors.neutralLightest,
          paddingTop: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View>
          {/**
           * front card
           */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              marginHorizontal: 8,
              borderRadius: 8,
              ...shadowBox,
              shadowColor: Colors.matteBlack,
              backgroundColor: Colors.neutralLightest,
              padding: 8,
            }}>
            <View
              style={{
                justifyContent: 'flex-end',
              }}>
              <LinearGradient
                colors={[Colors.blue, Colors.blue, Colors.blue]}
                style={{
                  width: 68,
                  height: 86,
                  borderRadius: 8,
                  ...shadowBox,
                  shadowColor: Colors.matteBlack,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Ionicons
                  name={'person'}
                  color={Colors.neutralLightest}
                  size={42}
                />
              </LinearGradient>
            </View>
            <View
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                marginLeft: 8,
              }}>
              <View
                style={{
                  alignItems: 'center',
                  paddingBottom: 16,
                }}>
                <Text
                  style={{
                    color: Colors.redDark,
                    fontWeight: '900',
                    fontSize: 18,
                  }}>
                  CCCD/CMND
                </Text>
                <Text
                  style={{
                    color: Colors.red,
                    fontWeight: '700',
                    letterSpacing: 3,
                  }}>
                  *********7788
                </Text>
              </View>
              <View style={{}}>
                <Text
                  style={{
                    color: Colors.blue,
                    fontWeight: '900',
                    fontSize: 12,
                  }}>
                  Full name:
                </Text>
                <Text
                  style={{
                    color: Colors.text,
                    fontWeight: '800',
                  }}>
                  LUONG VAN TU
                </Text>
              </View>
              <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text
                  style={{
                    color: Colors.blue,
                    fontWeight: '900',
                    fontSize: 12,
                  }}>
                  Birthday:
                </Text>
                <Text
                  style={{
                    color: Colors.text,
                    fontWeight: '800',
                    fontSize: 12,
                  }}>
                  09/06/2001
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: Colors.blue,
                      fontWeight: '900',
                      fontSize: 12,
                    }}>
                    Sex:
                  </Text>
                  <Text
                    style={{
                      color: Colors.text,
                      fontWeight: '800',
                      fontSize: 12,
                    }}>
                    Male
                  </Text>
                </View>
                <View style={{display: 'flex', flexDirection: 'row'}}>
                  <Text
                    style={{
                      color: Colors.blue,
                      fontWeight: '900',
                      fontSize: 12,
                    }}>
                    Nationality:
                  </Text>
                  <Text
                    style={{
                      color: Colors.text,
                      fontWeight: '800',
                      fontSize: 12,
                    }}>
                    Vietnamese
                  </Text>
                </View>
              </View>
              <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text
                  style={{
                    color: Colors.blue,
                    fontWeight: '900',
                    fontSize: 12,
                  }}>
                  Address:
                </Text>
                <Text
                  style={{
                    color: Colors.text,
                    fontWeight: '800',
                    fontSize: 12,
                  }}>
                  An Trang - Quynh Phu - Thai Binh
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                }}>
                <Text
                  style={{
                    color: Colors.blue,
                    fontWeight: '900',
                    fontSize: 12,
                  }}>
                  Permanent address:
                </Text>
                <Text
                  style={{
                    color: Colors.text,
                    fontWeight: '800',
                    fontSize: 12,
                  }}>
                  Dong Quan - Dong Hung - Thai Binh
                </Text>
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                }}>
                <Text
                  style={{
                    color: Colors.blue,
                    fontWeight: '900',
                    fontSize: 12,
                  }}>
                  Valid until:
                </Text>
                <Text
                  style={{
                    color: Colors.text,
                    fontWeight: '800',
                    fontSize: 12,
                  }}>
                  09/06/2026
                </Text>
              </View>
            </View>
          </View>
          {/**
           * back card
           */}
          <View
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginHorizontal: 8,
              marginVertical: 8,
              borderRadius: 8,
              ...shadowBox,
              shadowColor: Colors.matteBlack,
              backgroundColor: Colors.neutralLightest,
              paddingVertical: 8,
            }}>
            <View
              style={{
                marginTop: 8,
                marginBottom: 16,
                height: 54,
                backgroundColor: Colors.blue,
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}>
              <View>
                <Image
                  source={Fingerfrint}
                  style={{
                    width: 86,
                    height: 64,
                    marginBottom: 4,
                    transform: [{rotate: '-90deg'}],
                  }}
                  resizeMode={'contain'}
                />
                <Image
                  source={Fingerfrint}
                  style={{
                    width: 86,
                    height: 64,
                    marginTop: 4,
                    transform: [{rotate: '-90deg'}],
                  }}
                  resizeMode={'contain'}
                />
              </View>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  marginLeft: 32,
                }}>
                <Text
                  style={{
                    color: Colors.blue,
                    fontWeight: '900',
                  }}>
                  Issued on
                </Text>
                <Text
                  style={{
                    color: Colors.text,
                    fontWeight: '900',
                  }}>
                  17th of May 2016
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
            backgroundColor: Colors.neutralLightest,
            alignItems: 'center',
          }}>
          <Pressable
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              marginHorizontal: 32,
              marginVertical: 16,
            }}
            onPress={() => {
              setAccept(!accept);
            }}>
            {accept === true ? (
              <AntDesignIcons
                name={'checksquare'}
                color={Colors.green}
                size={18}
              />
            ) : (
              <View
                style={{
                  borderRadius: 2,
                  borderColor: Colors.text,
                  width: 18,
                  height: 18,
                  borderWidth: 2,
                }}
              />
            )}
            <Text
              style={{
                marginLeft: 8,
                fontWeight: '800',
                color: Colors.text,
              }}>
              Accept the terms of service
            </Text>
          </Pressable>
          <Pressable
            style={{
              marginHorizontal: 32,
              justifyContent: 'center',
              alignItems: 'center',
              width: 120,
              height: 54,
              borderRadius: 27,
              marginBottom: Platform.OS === 'android' ? 16 : 24,
              ...shadowBox,
              shadowColor: Colors.matteBlack,
              backgroundColor: Colors.blue,
            }}
            onPress={() => {
              if (accept) navigation.navigate('ekyc-face');
            }}>
            <FeatherIcons
              name={'arrow-right'}
              color={Colors.neutralLightest}
              size={28}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
