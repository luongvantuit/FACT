import React from 'react';
import {View, Text, StatusBar, Platform, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import EntypoIcons from '../fonts-icon/entypo-icons';
import shadowBox from '../widgets/ShadowBox';

export default function TransferScreen({navigation}: any) {
  return (
    <LinearGradient
      colors={[Colors.blueDark, Colors.blue, Colors.blueLight]}
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle={'light-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
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
            color={Colors.white}
          />
        </Pressable>
        <Text
          style={{
            flex: 1,
            color: Colors.white,
            textAlign: 'center',
            fontWeight: '900',
            fontSize: 18,
          }}>
          Transfer
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
          backgroundColor: Colors.neutralLightest,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          marginTop: 42,
        }}>
        <View
          style={{
            backgroundColor: Colors.neutralLightest,
            marginHorizontal: 32,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
            height: 120,
            marginTop: 32,
            borderRadius: 8,
            padding: 16,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              fontWeight: '900',
              color: Colors.text,
              fontSize: 16,
            }}>
            {user.numberPhone}
          </Text>
          <LinearGradient
            colors={[Colors.blueDark, Colors.blue]}
            style={{
              width: 60,
              borderRadius: 4,
              padding: 4,
            }}>
            <Text
              style={{
                color: Colors.neutralLightest,
                fontWeight: '700',
                fontSize: 12,
                textAlign: 'center',
              }}>
              Default
            </Text>
          </LinearGradient>
          <Text
            style={{
              color: Colors.text,
              fontWeight: '800',
            }}>
            {`${user.balance}${user.currency === 'USD' ? '$' : 'VNĐ'}`}
          </Text>
        </View>
        <View
          style={{
            marginHorizontal: 32,
            marginVertical: 16,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <EntypoIcons
            name={'chevron-with-circle-right'}
            color={Colors.blue}
            size={52}
          />
          <LinearGradient
            colors={[Colors.blueDark, Colors.blue, Colors.blueLight]}
            style={{
              height: 120,
              backgroundColor: Colors.neutralLightest,
              flex: 1,
              marginLeft: 16,
              ...shadowBox,
              shadowColor: Colors.matteBlack,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '900',
                fontSize: 18,
                color: Colors.neutralLightest,
              }}>
              Choose contact
            </Text>
          </LinearGradient>
        </View>
      </View>
    </LinearGradient>
  );
}
