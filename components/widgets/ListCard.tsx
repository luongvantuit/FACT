import React from 'react';
import {View, Text, FlatList, Platform, Image} from 'react-native';
import {listCard} from '../../datas';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styleWidgetListCard as styles} from '../../styles';
import {colors} from '../../values';
import {FontAwesomeIcon} from '..';
Icon.loadFont();
export default function ListCard() {
  return (
    <View>
      <FlatList
        data={listCard}
        renderItem={({item}) => (
          <View style={styles.boxContainer}>
            <View style={styles.boxContainerInner}>
              <View style={styles.boxContainerLeft}>
                <Text style={styles.textNameBank}>{item.nameBank}</Text>
                <Text style={styles.textNumberCard}>{item.numberCard}</Text>
                <View style={styles.boxContainerExpiryEnd}>
                  <Text>Expiry End</Text>
                  <Text style={styles.textExpiryEnd}>{item.expiryEnd}</Text>
                </View>
                <Text style={styles.textName}>{item.name}</Text>
              </View>
              <View style={styles.boxContainerRight}>
                <Image
                  source={require('../../assets/sim.png')}
                  style={{
                    width: 40,
                    height: 40,
                    marginVertical: 8,
                  }}
                />
                <FontAwesomeIcon
                  name={
                    item.service === 'master-card' ? 'cc-mastercard' : 'cc-visa'
                  }
                  size={32}
                  color={colors.black1}
                />
                <Text>{item.type}</Text>
              </View>
            </View>
          </View>
        )}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        alwaysBounceHorizontal={listCard.length > 1}
      />
    </View>
  );
}
