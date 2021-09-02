import React from 'react';
import {View, Text, FlatList, Platform, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import listCards from '../../datas/list-cards';
import FontAwesomeIcons from '../fonts-icon/font-awesome-icons';
Icon.loadFont();
export default function ListCards() {
  return (
    <View>
      <FlatList
        data={listCards}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: 'white',
              marginHorizontal: 8,
              marginVertical: 16,
              display: 'flex',
              flexDirection: 'row',
              padding: 16,
              borderRadius: 8,
              width: Dimensions.get('window').width - 64,
              height: 190,
              elevation: 8,
              shadowColor: '#000',
              shadowOffset: {
                width: 1,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
            }}>
            <View
              style={{
                display: 'flex',
                flexGrow: 3,
                justifyContent: 'space-between',
              }}>
              <View>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 18,
                    color: '#000',
                  }}>
                  {item.nameBank}
                </Text>
                <Text
                  style={{
                    fontWeight: '700',
                    color: '#000',
                    fontSize: 16,
                    marginVertical: 8,
                  }}>
                  {item.numberCard}
                </Text>
              </View>
              <View>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      color: '#000',
                      fontSize: 14,
                      fontWeight: '600',
                    }}>
                    Expiry End
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 8,
                      fontWeight: '800',
                    }}>
                    {item.expiryEnd}
                  </Text>
                </View>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 16,
                  }}>
                  {item.name}
                </Text>
              </View>
            </View>
            <View
              style={{
                display: 'flex',
                flexGrow: 3,
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}>
              <FontAwesomeIcons
                name={
                  item.service === 'master-card' ? 'cc-mastercard' : 'cc-visa'
                }
                size={32}
                color={'#000'}
              />
              <Text
                style={{
                  marginVertical: 4,
                  fontWeight: '600',
                  fontSize: 16,
                }}>
                {item.type}
              </Text>
            </View>
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
