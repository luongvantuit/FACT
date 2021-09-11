import React from 'react';
import {View, Text, Image} from 'react-native';
import Colors from '../../assets/colors';
import listServicesPayment from '../../datas/list-services-payment';
import EntypoIcons from '../fonts-icon/entypo-icons';
import shadowBox from './ShadowBox';

export default function ListServicesPayment() {
  return (
    <View
      style={{
        paddingHorizontal: 16,
        paddingVertical: 4,
      }}>
      {listServicesPayment.map(item => (
        <View
          key={item.id}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingHorizontal: 16,
            backgroundColor: Colors.white,
            marginVertical: 4,
            borderRadius: 16,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={item.img}
              style={{
                width: 40,
                height: 40,
                borderRadius: item.service === false ? 20 : 0,
                resizeMode: item.service === false ? 'cover' : 'contain',
              }}
            />
            <View
              style={{
                margin: 12,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontWeight: '900',
                  color: Colors.text,
                  fontSize: 18,
                }}>
                {item.name}
              </Text>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.text,
                    fontWeight: '700',
                    fontSize: 16,
                  }}>{`${item.increase === true ? '+' : '-'}${
                  item.value
                }$`}</Text>
                <Text
                  style={{
                    color: Colors.text,
                    fontWeight: '500',
                  }}>
                  {item.date}
                </Text>
              </View>
            </View>
          </View>
          <EntypoIcons
            name={`chevron-small-${item.increase === true ? 'up' : 'down'}`}
            size={28}
            style={{
              marginHorizontal: 8,
            }}
            color={item.increase === true ? Colors.green : Colors.red}
          />
        </View>
      ))}
    </View>
  );
}
