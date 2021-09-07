import {useTheme} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {leakImage} from '../../assets';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import EntypoIcons from '../fonts-icon/entypo-icons';
import Ionicons from '../fonts-icon/ionicons';
import ListCard from '../widgets/ListCards';
import ListServicesPayment from '../widgets/ListServicesPayment';
import shadowBox from '../widgets/ShadowBox';
import StyledHeader from '../widgets/StyledHeader';
import StyledImage from '../widgets/StyledImage';

export default function DashboardScreen({navigation}: any) {
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <HeaderDashboard navigation={navigation} />
      <View
        style={{
          height: 180,
          width: Dimensions.get('window').width - 16,
          marginTop: 24,
          marginBottom: 8,
          marginHorizontal: 8,
          borderRadius: 8,
          ...shadowBox,
          shadowColor: Colors.matteBlack,
          display: 'flex',
          flexDirection: 'column',
          padding: 16,
          backgroundColor: Colors.neutralLightest,
        }}>
        <View
          style={{
            width: Dimensions.get('window').width - 48,
            paddingVertical: 8,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexGrow: 2,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              flexGrow: 3,
            }}>
            <Image
              source={leakImage}
              style={{
                width: 40,
                height: 40,
                borderRadius: 8,
              }}
            />
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                marginHorizontal: 16,
              }}>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 18,
                  color: Colors.matteBlack,
                }}>
                {user.name}
              </Text>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 14,
                  color: Colors.matteBlack,
                }}>
                {user.type}
              </Text>
            </View>
          </View>
          <View
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderRadius: 8,
              backgroundColor: Colors.blueLight,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: 'bold',
                color: Colors.neutralLightest,
              }}>
              {user.currency}
            </Text>
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            flexGrow: 100,
          }}>
          <View
            style={{
              flexGrow: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                marginVertical: 8,
                fontWeight: '600',
                fontSize: 16,
                color: Colors.matteBlack,
              }}>
              {user.rank}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Pressable
                style={{
                  marginHorizontal: 8,
                }}
                onPress={() => {
                  setHidden(!hidden);
                }}>
                <EntypoIcons
                  name={hidden === true ? 'eye-with-line' : 'eye'}
                  color={Colors.matteBlack}
                  size={24}
                />
              </Pressable>
              {hidden === true ? (
                <EntypoIcons
                  name="dots-three-horizontal"
                  color={Colors.matteBlack}
                  size={24}
                />
              ) : (
                <Text
                  style={{
                    fontWeight: 'bold',
                    fontSize: 20,
                    color: Colors.matteBlack,
                  }}>
                  {`${user.balance}${user.currency === 'USD' ? '$' : 'Đ'}`}
                </Text>
              )}
            </View>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'flex-end',
              flexGrow: 1,
            }}>
            <Pressable onPress={() => {}}>
              <View
                style={{
                  padding: 16,
                  borderRadius: 8,
                }}>
                <Ionicons name="add" size={28} />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <ListCard />
      <ListServicesPayment />
    </ScrollView>
  );
}

function HeaderDashboard({navigation}: any): JSX.Element {
  return (
    <View style={StyledHeader.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>
        <Text
          style={{
            fontWeight: '700',
            fontSize: 14,
            color: Colors.matteBlack,
          }}>
          Hi, TU
        </Text>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 18,
            color: Colors.matteBlack,
          }}>
          Welcome back!
        </Text>
      </View>
      <Pressable
        onPress={() => {
          navigation.navigate('profile');
        }}>
        <Image source={leakImage} style={StyledImage.rightHeader} />
      </Pressable>
    </View>
  );
}
