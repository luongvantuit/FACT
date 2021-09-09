import React, {useEffect, useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IconApp, leakImage, UndrawPayOnline} from '../../assets';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import AntDesignIcons from '../fonts-icon/ant-design-icons';
import EntypoIcons from '../fonts-icon/entypo-icons';
import ListServicesPayment from '../widgets/ListServicesPayment';
import shadowBox from '../widgets/ShadowBox';
import * as ProcessBar from 'react-native-progress';

export default function DashboardScreen({navigation}: any) {
  const [hidden, setHidden] = useState<boolean>(false);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}
      bounces={false}
      overScrollMode={'never'}>
      <ImageBackground
        source={UndrawPayOnline}
        style={{
          marginTop: 54,
          height: 340,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingHorizontal: 16,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 24,
                color: Colors.text,
              }}>
              FACT
            </Text>
            <Image
              source={IconApp}
              style={{
                width: 24,
                height: 24,
                resizeMode: 'contain',
                marginHorizontal: 8,
              }}
            />
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={leakImage}
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
              }}
            />
            <View
              style={{
                marginVertical: 16,
                marginHorizontal: 8,
              }}>
              <Text
                style={{
                  color: Colors.text,
                  fontWeight: '800',
                }}>
                Good morning!
              </Text>
              <Text
                style={{
                  color: Colors.text,
                  fontWeight: '900',
                  fontSize: 18,
                }}>
                {user.name}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          {hidden === true ? (
            <EntypoIcons
              name={'dots-three-horizontal'}
              color={Colors.text}
              size={24}
            />
          ) : (
            <Text
              style={{
                fontWeight: '900',
                fontSize: 18,
                color: Colors.text,
              }}>
              {`${user.balance}${user.currency === 'USD' ? '$' : 'VNĐ'}`}
            </Text>
          )}
          <Pressable
            style={{
              marginLeft: 8,
            }}
            onPress={() => {
              setHidden(!hidden);
            }}>
            <EntypoIcons
              name={hidden === true ? 'eye-with-line' : 'eye'}
              color={Colors.text}
              size={24}
            />
          </Pressable>
        </View>
      </ImageBackground>
      {/**
       * service
       */}

      {/**
       * container
       */}
      <View
        style={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          paddingTop: 32,
          marginTop: 8,
          ...shadowBox,
          shadowColor: Colors.matteBlack,
          display: 'flex',
          backgroundColor: Colors.white,
        }}>
        <DashboardService />
        <View
          style={{
            marginHorizontal: 16,
            marginTop: 8,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <LinearGradient
            colors={[Colors.yellowDark, Colors.yellowDark, Colors.yellow]}
            style={{
              borderRadius: 16,
              borderBottomRightRadius: 0,
              marginRight: 4,
            }}>
            <Pressable
              style={{
                width: (Dimensions.get('window').width - 40) / 2,
                height: 110,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('account');
              }}>
              <AntDesignIcons
                name={'wallet'}
                color={Colors.neutralLightest}
                size={32}
              />
              <Text
                style={{
                  color: Colors.neutralLightest,
                  fontWeight: '900',
                }}>
                Account
              </Text>
            </Pressable>
          </LinearGradient>
          <LinearGradient
            colors={[Colors.yellowDark, Colors.yellowDark, Colors.yellow]}
            style={{
              marginLeft: 4,
              borderRadius: 16,
              borderBottomLeftRadius: 0,
            }}>
            <Pressable
              style={{
                height: 110,
                width: (Dimensions.get('window').width - 40) / 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('card-service');
              }}>
              <AntDesignIcons
                name={'creditcard'}
                color={Colors.neutralLightest}
                size={32}
              />
              <Text
                style={{
                  color: Colors.neutralLightest,
                  fontWeight: '900',
                }}>
                Card service
              </Text>
            </Pressable>
          </LinearGradient>
        </View>
        <View
          style={{
            marginHorizontal: 16,
            marginVertical: 8,
            display: 'flex',
            flexDirection: 'row',
          }}>
          <LinearGradient
            colors={[Colors.yellow, Colors.yellowDark, Colors.yellowDark]}
            style={{
              borderRadius: 16,
              borderTopRightRadius: 0,
              marginRight: 4,
            }}>
            <Pressable
              style={{
                height: 110,
                width: (Dimensions.get('window').width - 40) / 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                navigation.navigate('transfer');
              }}>
              <AntDesignIcons
                name={'swap'}
                color={Colors.neutralLightest}
                size={32}
              />
              <Text
                style={{
                  color: Colors.neutralLightest,
                  fontWeight: '900',
                }}>
                Transfer
              </Text>
            </Pressable>
          </LinearGradient>
          <LinearGradient
            colors={[Colors.yellow, Colors.yellowDark, Colors.yellowDark]}
            style={{
              height: 110,
              borderBottomRightRadius: 16,
              borderBottomLeftRadius: 16,
              borderTopRightRadius: 16,
              marginLeft: 4,
              width: (Dimensions.get('window').width - 40) / 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <AntDesignIcons
              name={'qrcode'}
              color={Colors.neutralLightest}
              size={32}
            />
            <Text
              style={{
                color: Colors.neutralLightest,
                fontWeight: '900',
              }}>
              QR code
            </Text>
          </LinearGradient>
        </View>
        <ListServicesPayment />
      </View>
    </ScrollView>
  );
}

function DashboardService(): JSX.Element {
  const [indeterminate, setIndeterminate] = useState<boolean>(true);
  useEffect(() => {
    const interval: NodeJS.Timer = setInterval(() => {
      clearTimeout(interval);
      setIndeterminate(false);
    }, 1200);
  }, []);
  return (
    <View>
      <View
        style={{
          marginHorizontal: 16,
          marginVertical: 12,
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: Colors.white,
          ...shadowBox,
          shadowColor: Colors.matteBlack,
          borderRadius: 16,
        }}>
        <ProcessBar.Circle
          progress={indeterminate === true ? 0.09 : 0.43}
          color={indeterminate === true ? Colors.transparent : Colors.blueLight}
          size={98}
          thickness={14}
          borderWidth={0}
          unfilledColor={
            indeterminate === true ? Colors.blueLight : Colors.neutralLightest
          }
          showsText={true}
          formatText={() => `${0.43 * 100}%`}
          textStyle={{
            fontWeight: '900',
            color: Colors.text,
          }}
          animated={true}
          indeterminate={indeterminate}
          strokeCap={'round'}
          accessible
          direction={'clockwise'}
          collapsable
        />
      </View>
    </View>
  );
}
