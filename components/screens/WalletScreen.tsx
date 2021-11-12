import React from 'react';
import {View, Text, ScrollView, StatusBar, Platform, Image} from 'react-native';
import {leakImage} from '../../assets';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import AntDesignIcons from '../../fonts-icon/ant-design-icons';
import EntypoIcons from '../../fonts-icon/entypo-icons';
import Ionicons from '../../fonts-icon/ionicons';
import MaterialCommunityIcons from '../../fonts-icon/material-community-icons';
import MaterialIcons from '../../fonts-icon/material-icons';
import shadowBox from '../widgets/ShadowBox';

export default function WalletScreen({navigation}: any) {
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
          My Wallet
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        bounces={false}
        overScrollMode={'never'}>
        <View
          style={{
            paddingTop: 8,
            backgroundColor: Colors.neutralLightest,
          }}>
          <View
            style={{
              paddingVertical: 32,
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: Colors.white,
            }}>
            <View
              style={{
                ...shadowBox,
                shadowColor: Colors.matteBlack,
                width: 160,
                height: 160,
                borderRadius: 80,
              }}>
              <Image
                source={leakImage}
                style={{
                  width: 160,
                  height: 160,
                  borderRadius: 80,
                }}
              />
            </View>
            <View
              style={{
                backgroundColor: Colors.blueLight,
                paddingVertical: 4,
                paddingHorizontal: 16,
                marginVertical: 16,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 16,
              }}>
              <Text
                style={{
                  color: Colors.white,
                  fontWeight: 'bold',
                }}>
                Current account
              </Text>
            </View>
            <Text
              style={{
                color: Colors.text,
                fontWeight: '900',
                fontSize: 18,
              }}>
              {user.name}
            </Text>
            <Text
              style={{
                color: Colors.neutralLighter,
                fontSize: 12,
              }}>
              Balance
            </Text>
            <Text
              style={{
                color: Colors.text,
                fontWeight: '900',
                fontSize: 16,
              }}>
              {`${user.balance}${user.currency === 'USD' ? '$' : 'VNĐ'}`}
            </Text>
          </View>
        </View>
        <Setting />
      </ScrollView>
    </View>
  );
}

function Setting(): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: Colors.neutralLightest,
      }}>
      <View
        style={{
          backgroundColor: Colors.white,
          marginTop: 8,
          marginBottom: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <Ionicons name={'person-circle'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Change profile
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          marginVertical: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <MaterialIcons name={'payment'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Manage card/account
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          marginVertical: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <AntDesignIcons name={'gift'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Gift voucher
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          marginVertical: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <MaterialCommunityIcons
          name={'piggy-bank'}
          size={32}
          color={Colors.yellowDark}
        />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Online savings
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          marginVertical: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <EntypoIcons name={'fingerprint'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Fingerprint setting
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          marginVertical: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <EntypoIcons name={'keyboard'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Keyboard setting
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          marginVertical: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <EntypoIcons name={'language'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Language setting
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          marginVertical: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <EntypoIcons name={'key'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Change password
        </Text>
      </View>
      {/**
       * bottom
       */}
      <View
        style={{
          backgroundColor: Colors.white,
          marginTop: 4,
          marginBottom: 8,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <AntDesignIcons name={'logout'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Sign Out
        </Text>
      </View>
    </View>
  );
}
