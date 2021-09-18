import {Theme, useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Platform,
  Pressable,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../assets/colors';
import listSpending from '../../datas/list-spending';
import user from '../../datas/user';
import {Spending} from '../../types/spending';
import EntypoIcons from '../fonts-icon/entypo-icons';

export default function SpendingScreen({navigation}: any) {
  const theme: Theme = useTheme();
  const [index, setIndex] = useState<number>(0);
  const [listData, setListData] = useState<Array<Spending>>(listSpending);
  return (
    <LinearGradient
      colors={[Colors.blueDark, Colors.blueDark, Colors.blue]}
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.transparent}
        translucent={Platform.OS === 'android'}
      />
      <View
        style={{
          paddingTop: 54,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            marginVertical: 16,
            marginHorizontal: 25,
          }}>
          <EntypoIcons
            name="chevron-small-left"
            size={32}
            color={Colors.neutralLightest}
          />
        </Pressable>
        <Text
          style={{
            flex: 1,
            color: Colors.neutralLightest,
            textAlign: 'center',
            fontWeight: '900',
            fontSize: 18,
          }}>
          Spending
        </Text>
        <Pressable
          style={{
            marginVertical: 16,
            marginHorizontal: 25,
          }}>
          <EntypoIcons
            name="chevron-small-left"
            size={32}
            color={Colors.transparent}
          />
        </Pressable>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.white,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          paddingTop: 16,
        }}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginHorizontal: 16,
            backgroundColor: '#EEEEEE',
            borderRadius: 20,
          }}>
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 8,
              margin: 4,
              backgroundColor: index == 0 ? Colors.white : Colors.transparent,
              borderRadius: 16,
            }}
            onPress={() => {
              setIndex(0);
              setListData(listSpending);
            }}>
            <Text
              style={{
                color: index == 0 ? Colors.blueDark : Colors.text,
                fontWeight: '900',
                fontSize: index == 0 ? 16 : 14,
              }}>
              All
            </Text>
          </Pressable>
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 8,
              margin: 4,
              backgroundColor: index == 1 ? Colors.white : Colors.transparent,
              borderRadius: 16,
            }}
            onPress={() => {
              setIndex(1);
              const newData: Array<Spending> = [];
              for (let index = 0; index < listSpending.length; index++) {
                if (listSpending[index].increase)
                  newData.push(listSpending[index]);
              }
              setListData(newData);
            }}>
            <Text
              style={{
                color: index == 1 ? Colors.blueDark : Colors.text,
                fontWeight: '900',
                fontSize: index == 1 ? 16 : 14,
              }}>
              Credit
            </Text>
          </Pressable>
          <Pressable
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 8,
              margin: 4,
              backgroundColor: index == 2 ? Colors.white : Colors.transparent,
              borderRadius: 16,
            }}
            onPress={() => {
              setIndex(2);
              const newData: Array<Spending> = [];
              for (let index = 0; index < listSpending.length; index++) {
                if (!listSpending[index].increase)
                  newData.push(listSpending[index]);
              }
              setListData(newData);
            }}>
            <Text
              style={{
                color: index == 2 ? Colors.blueDark : Colors.text,
                fontWeight: '900',
                fontSize: index == 2 ? 16 : 14,
              }}>
              Debit
            </Text>
          </Pressable>
        </View>
        <ScrollView
          bounces={false}
          alwaysBounceHorizontal={false}
          overScrollMode={'never'}>
          {listData.length == 0 ? (
            <View></View>
          ) : (
            <View>
              {listData.map((e, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      marginTop: index == 0 ? 8 : 4,
                      marginBottom: index == listData.length - 1 ? 8 : 4,
                      marginHorizontal: 16,
                    }}>
                    <View
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                      }}>
                      <View
                        style={{
                          flex: 1,
                        }}>
                        <Text
                          style={{
                            color: Colors.text,
                            fontSize: 18,
                            fontWeight: '900',
                          }}>
                          {e.message}
                        </Text>
                        <Text
                          style={{
                            color: Colors.neutralLight,
                            fontWeight: '600',
                          }}>
                          {e.date}
                        </Text>
                      </View>
                      <View>
                        <Text
                          style={{
                            color: e.increase ? Colors.green : Colors.red,
                            fontWeight: '800',
                            fontSize: 16,
                          }}>{`${e.increase ? '+' : '-'}${e.value} ${
                          user.currency
                        }`}</Text>
                      </View>
                    </View>
                  </View>
                );
              })}
            </View>
          )}
        </ScrollView>
      </View>
    </LinearGradient>
  );
}
