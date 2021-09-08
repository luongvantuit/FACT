import {Theme, useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  Pressable,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../assets/colors';
import listCards from '../../datas/list-cards';
import EntypoIcons from '../fonts-icon/entypo-icons';
import FontAwesomeIcons from '../fonts-icon/font-awesome-icons';
import shadowBox from '../widgets/ShadowBox';

export default function CardServiceScreen({navigation}: any) {
  const theme: Theme = useTheme();
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {/**
       * start header
       */}
      <View
        style={{
          paddingTop: Platform.OS === 'android' ? 0 : 54,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: theme.colors.background,
        }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            marginVertical: 16,
            marginHorizontal: 16 - 9,
          }}>
          <EntypoIcons
            name="chevron-small-left"
            size={32}
            color={Colors.text}
          />
        </Pressable>
        <Text
          style={{
            flex: 1,
            color: Colors.text,
            textAlign: 'center',
            fontWeight: '900',
            fontSize: 18,
          }}>
          Card service
        </Text>
        <Pressable
          style={{
            marginVertical: 16,
            marginHorizontal: 16 - 9,
          }}>
          <EntypoIcons
            name="chevron-small-left"
            size={32}
            color={Colors.transparent}
          />
        </Pressable>
      </View>
      {/**
       * end header
       */}
      <View
        style={{
          marginVertical: 32,
        }}>
        <View
          style={{
            marginHorizontal: 32,
          }}></View>
      </View>

      {
        ///
      }

      <View
        style={{
          paddingTop: 32,
          paddingBottom: 4,
          flex: 1,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          ...shadowBox,
          shadowColor: Colors.matteBlack,
          backgroundColor: Colors.white,
        }}>
        {listCards.map((item, index) => (
          <LinearGradient
            key={index}
            colors={
              item.color || [Colors.blueDark, Colors.blueDark, Colors.blueLight]
            }
            style={{
              marginHorizontal: 32,
              marginVertical: 4,
              display: 'flex',
              flexDirection: 'row',
              padding: 16,
              borderRadius: 8,
              width: Dimensions.get('window').width - 64,
              ...shadowBox,
              height: 180,
            }}>
            <View
              style={{
                display: 'flex',
                flexGrow: 3,
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 18,
                  color: Colors.neutralLightest,
                }}>
                {item.nameBank}
              </Text>
              <View>
                <Text
                  style={{
                    fontWeight: '800',
                    fontSize: 16,
                    color: Colors.neutralLightest,
                  }}>
                  {item.numberCard}
                </Text>
                <View
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '600',
                      color: Colors.neutralLightest,
                    }}>
                    Expiry end
                  </Text>
                  <Text
                    style={{
                      marginHorizontal: 8,
                      fontWeight: '800',
                      color: Colors.neutralLightest,
                    }}>
                    {item.expiryEnd}
                  </Text>
                </View>
                <Text
                  style={{
                    marginTop: 24,
                    fontWeight: '800',
                    fontSize: 16,
                    color: Colors.neutralLightest,
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
                color={Colors.neutralLightest}
              />
              <Text
                style={{
                  marginVertical: 4,
                  fontWeight: '800',
                  fontSize: 16,
                  color: Colors.neutralLightest,
                }}>
                {item.type}
              </Text>
            </View>
          </LinearGradient>
        ))}
      </View>
    </ScrollView>
  );
}
