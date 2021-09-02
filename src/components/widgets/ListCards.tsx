import React from 'react';
import { View, Text, FlatList, Platform, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import listCards from '../../datas/list-cards';
import FontAwesomeIcons from '../fonts-icon/font-awesome-icons';
Icon.loadFont();
export default function ListCards() {
  return (
    <View>
      <FlatList
        data={listCards}
        renderItem={({ item }) => (
          <View>
            <View>
              <View >
                <Text>{item.nameBank}</Text>
                <Text >{item.numberCard}</Text>
                <View>
                  <Text>Expiry End</Text>
                  <Text >{item.expiryEnd}</Text>
                </View>
                <Text >{item.name}</Text>
              </View>
              <View >
                <FontAwesomeIcons
                  name={
                    item.service === 'master-card' ? 'cc-mastercard' : 'cc-visa'
                  }
                  size={32}
                  color={'#000'}
                />
                <Text>{item.type}</Text>
              </View>
            </View>
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
