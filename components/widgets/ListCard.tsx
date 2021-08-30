import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {listCard} from '../../datas';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styleWidgetListCard as styles} from '../../styles';
Icon.loadFont();
export default function ListCard() {
  return (
    <View>
      <FlatList
        data={listCard}
        renderItem={({item}) => (
          <View style={styles.boxContainer}>
            <View style={styles.boxContainerInner}>
              <View>
                <Text style={styles.textNameBank}>{item.nameBank}</Text>
                <Text style={styles.textNumberCard}>{item.numberCard}</Text>
                <View style={styles.boxContainerExpiryEnd}>
                  <Text>Expiry End</Text>
                  <Text style={styles.textExpiryEnd}>{item.expiryEnd}</Text>
                </View>
                <Text style={styles.textName}>{item.name}</Text>
              </View>
              <View>
                <Icon name="cc-visa" />
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
