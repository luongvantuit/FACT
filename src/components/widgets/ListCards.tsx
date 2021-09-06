import React, {useState} from 'react';
import {View, Text, FlatList, Platform, Image, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import listCards from '../../datas/list-cards';
import FontAwesomeIcons from '../fonts-icon/font-awesome-icons';
import shadowBox from './ShadowBox';
Icon.loadFont();
export default function ListCards() {
  const [page, setPage] = useState<number>(0);
  return (
    <View>
      <FlatList
        data={listCards}
        snapToAlignment="center"
        pagingEnabled
        decelerationRate="fast"
        snapToInterval={
          Platform.OS === 'android'
            ? Dimensions.get('window').width - 70
            : Dimensions.get('window').width - 48
        }
        onScroll={e => {
          setPage(
            Math.round(
              e.nativeEvent.contentOffset.x /
                (Dimensions.get('window').width - 72),
            ),
          );
        }}
        renderItem={({item, index}) => (
          <View
            style={{
              marginHorizontal: 8,
              marginVertical: index === page ? 16 : 26,
              display: 'flex',
              flexDirection: 'row',
              padding: 16,
              borderRadius: 8,
              width: Dimensions.get('window').width - 64,
              ...shadowBox,
              height: index === page ? 200 : 180,
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
                  }}>
                  {item.nameBank}
                </Text>
                <Text
                  style={{
                    fontWeight: '700',
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
      <View
        style={{
          width: Dimensions.get('window').width,
          justifyContent: 'center',
          display: 'flex',
          flexDirection: 'row',
        }}>
        {listCards.map((e, index) => {
          return (
            <View
              key={index}
              style={{
                borderWidth: 0.5,
                width: index === page ? 16 : 8,
                height: 8,
                borderRadius: 4,
                marginHorizontal: 4,
                marginVertical: 16,
              }}></View>
          );
        })}
      </View>
    </View>
  );
}
