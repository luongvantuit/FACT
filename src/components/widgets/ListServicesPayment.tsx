import React from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import listServicesPayment from '../../datas/list-services-payment';
import EntypoIcons from '../fonts-icon/entypo-icons';

export default function ListServicesPayment() {
  return (
    <View>
      {listServicesPayment.map(item => (
        <View
          key={item.id}
          style={{
            borderBottomColor: '#D7D7D7',
            borderBottomWidth: 0.5,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
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
                borderRadius: item.service === false ? 20 : 40,
                resizeMode: item.service === false ? 'cover' : 'contain',
              }}
            />
            <View
              style={{
                margin: 16,
                display: 'flex',
                flexDirection: 'column',
              }}>
              <Text
                style={{
                  fontWeight: '900',
                }}>
                {item.name}
              </Text>
              <Text style={{ }}>{`${item.increase === true ? '+' : '-'}${item.value
                }$`}</Text>
            </View>
          </View>
          <EntypoIcons
            name={`chevron-small-${item.increase === true ? 'up' : 'down'}`}
            color={item.increase === true ? 'green' : 'red'}
            size={24}
            style={{
              marginHorizontal: 8,
            }}
          />
        </View>
      ))}
    </View>
  );
}
