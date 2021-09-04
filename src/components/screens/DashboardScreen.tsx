import {useTheme} from '@react-navigation/native';
import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {charliePuth, leakImage, snoopDogg, taylorSwift} from '../../assets';
import user from '../../datas/user';
import AppTheme from '../../themes/app-theme';
import Ionicons from '../fonts-icon/ionicons';
import ListCard from '../widgets/ListCards';
import ListServicesPayment from '../widgets/ListServicesPayment';

const listImg: Array<{
  id: string;
  img: any;
}> = [
  {
    id: '0',
    img: taylorSwift,
  },
  {id: '1', img: charliePuth},
  {id: '2', img: snoopDogg},
];

export default function DashboardScreen() {
  const theme: AppTheme = useTheme() as AppTheme;
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View
        style={{
          backgroundColor: '#fff',
          height: 180,
          width: Dimensions.get('window').width - 16,
          marginTop: 24,
          marginBottom: 8,
          marginHorizontal: 8,
          borderRadius: 8,
          elevation: 8,
          shadowColor: theme.app?.shadowColor,
          shadowOffset: {
            width: 1,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          display: 'flex',
          flexDirection: 'column',
          padding: 16,
        }}>
        <View
          style={{
            width: Dimensions.get('window').width - 48,
            paddingVertical: 8,
            borderBottomColor: '#D7D7D7',
            borderBottomWidth: 0.3,
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
                }}>
                {user.name}
              </Text>
              <Text
                style={{
                  fontWeight: '600',
                  fontSize: 14,
                }}>
                {user.type}
              </Text>
            </View>
          </View>
          <Text
            style={{
              paddingHorizontal: 12,
              paddingVertical: 6,
              borderColor: '#D7D7D7',
              borderRadius: 8,
              borderWidth: 1,
              flexGrow: 1,
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            {user.currency}
          </Text>
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
              }}>
              {user.rank}
            </Text>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              {`${user.balance}${user.currency === 'USD' ? '$' : 'Đ'}`}
            </Text>
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
                  backgroundColor: '#D7D7D7',
                  borderRadius: 8,
                }}>
                <Ionicons name="add" size={28} />
              </View>
            </Pressable>
          </View>
        </View>
      </View>
      <View
        style={{
          marginTop: 16,
          marginBottom: 40,
          display: 'flex',
          flexDirection: 'row',
          marginHorizontal: 16,
        }}>
        {listImg.map((item, index) => {
          return (
            <View
              style={{
                position: 'absolute',
                left: index * 30,
              }}
              key={item.id}>
              <Image
                source={item.img}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                }}
              />
            </View>
          );
        })}
        <View
          style={{
            position: 'absolute',
            left: listImg.length * 30,
          }}>
          <Pressable
            style={{
              display: 'flex',
              width: 40,
              height: 40,
              backgroundColor: '#D7D7D7',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 20,
            }}>
            <Ionicons color={'#363636'} name={'add'} size={24} />
          </Pressable>
        </View>
      </View>
      <ListCard />
      <View
        style={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          paddingHorizontal: 16,
          paddingTop: 32,
          marginTop: 8,
          elevation: 8,
          shadowColor: '#000',
          shadowOffset: {
            width: 1,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          backgroundColor: '#fff',
          display: 'flex',
        }}>
        <ListServicesPayment />
      </View>
    </ScrollView>
  );
}
