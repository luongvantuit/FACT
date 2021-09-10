import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Platform,
  Pressable,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {IconApp} from '../../assets';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import EntypoIcons from '../fonts-icon/entypo-icons';
import shadowBox from '../widgets/ShadowBox';

export default function TopUpScreen({navigation}: any) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle={'light-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
      <LinearGradient
        colors={[Colors.blueDark, Colors.blueDark, Colors.blue]}
        style={{
          flex: 1,
        }}>
        <Pressable
          style={{
            paddingTop: 54,
            paddingBottom: 16,
            paddingHorizontal: 16,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            navigation.goBack();
          }}>
          <EntypoIcons
            name={'chevron-small-left'}
            color={Colors.neutralLightest}
            size={32}
          />
          <Text
            style={{
              color: Colors.neutralLightest,
              textAlign: 'center',
              fontWeight: '900',
              fontSize: 18,
            }}>
            Top up to your wallet
          </Text>
        </Pressable>
        <ScrollView
          style={{
            flex: 1,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            backgroundColor: Colors.neutralLightest,
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 8,
            }}>
            <View
              style={{
                backgroundColor: Colors.blueLight,
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 24,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  color: Colors.neutralLightest,
                  fontWeight: '900',
                  fontSize: 12,
                }}>
                Current account
              </Text>
            </View>
          </View>
          <View
            style={{
              margin: 8,
              borderRadius: 8,
              backgroundColor: Colors.neutralLightest,
              ...shadowBox,
              shadowColor: Colors.matteBlack,
              height: 200,
              padding: 16,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                backgroundColor: Colors.neutralLighter,
                paddingVertical: 8,
                paddingHorizontal: 16,
                borderRadius: 8,
              }}>
              <View
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: Colors.neutralLightest,
                }}>
                <Image
                  source={IconApp}
                  style={{
                    width: 24,
                    height: 24,
                  }}
                />
              </View>
              <Text
                style={{
                  marginLeft: 8,
                  color: Colors.text,
                }}>
                Wallet balance:
              </Text>
              <Text
                style={{
                  fontWeight: '900',
                  color: Colors.text,
                  fontSize: 16,
                }}>
                {`${user.balance}${user.currency === 'USD' ? '$' : 'VNĐ'}`}
              </Text>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
