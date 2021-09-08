import React, {useState} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  Platform,
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
import ListCard from '../widgets/ListCards';
import ListServicesPayment from '../widgets/ListServicesPayment';

export default function DashboardScreen({navigation}: any) {
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}>
      <ImageBackground
        source={UndrawPayOnline}
        style={{
          marginTop: Platform.OS === 'android' ? 16 : 64,
          height: 340,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          paddingHorizontal: 8,
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
                Good Morning!
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
              marginHorizontal: 8,
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
       * container
       */}
      <View
        style={{
          marginHorizontal: 8,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <LinearGradient
          colors={[Colors.yellowDark, Colors.yellowDark, Colors.yellow]}
          style={{
            height: 120,
            borderRadius: 8,
            borderTopLeftRadius: 16,
            marginRight: 4,
            width: (Dimensions.get('window').width - 24) / 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesignIcons name={'swap'} color={'white'} size={32} />
        </LinearGradient>
        <LinearGradient
          colors={[Colors.yellowDark, Colors.yellowDark, Colors.yellow]}
          style={{
            height: 120,
            borderRadius: 8,
            borderTopRightRadius: 16,
            marginLeft: 4,
            width: (Dimensions.get('window').width - 24) / 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}></LinearGradient>
      </View>
      <View
        style={{
          marginHorizontal: 8,
          marginVertical: 8,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <LinearGradient
          colors={[Colors.yellow, Colors.yellowDark, Colors.yellowDark]}
          style={{
            height: 120,
            borderRadius: 8,
            borderBottomLeftRadius: 16,
            marginRight: 4,
            width: (Dimensions.get('window').width - 24) / 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
        <LinearGradient
          colors={[Colors.yellow, Colors.yellowDark, Colors.yellowDark]}
          style={{
            height: 120,
            borderRadius: 8,
            borderBottomRightRadius: 16,
            marginLeft: 4,
            width: (Dimensions.get('window').width - 24) / 2,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      </View>

      <ListCard />
      <ListServicesPayment />
    </ScrollView>
  );
}
