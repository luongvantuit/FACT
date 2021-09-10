import React from 'react';
import {
  Platform,
  StatusBar,
  View,
  Text,
  Pressable,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../assets/colors';
import EntypoIcons from '../fonts-icon/entypo-icons';
import Ionicons from '../fonts-icon/ionicons';
import shadowBox from '../widgets/ShadowBox';

export default function AcceptInforScreen({navigation}: any) {
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
          paddingVertical: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
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
              colors={[Colors.blue, Colors.blue, Colors.blueLight]}
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
                  color: Colors.red,
                  fontWeight: '900',
                  fontSize: 16,
                }}>
                CCCD/CMND
              </Text>
              <Text
                style={{
                  color: Colors.red,
                  fontWeight: '700',
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
        <View style={{}}></View>
        {/* <Pressable
          style={{
            marginHorizontal: 32,
            justifyContent: 'center',
            paddingVertical: 16,
            borderRadius: 8,
            marginVertical: Platform.OS === 'android' ? 8 : 16,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
            backgroundColor: Colors.blue,
          }}
          onPress={() => {
            navigation.navigate('ekyc-face');
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '900',
              color: Colors.neutralLightest,
            }}>
            Next step
          </Text>
        </Pressable> */}
      </View>
    </View>
  );
}
