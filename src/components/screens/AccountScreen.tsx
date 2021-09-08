import React from 'react';
import {
  View,
  Text,
  Pressable,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import AntDesignIcons from '../fonts-icon/ant-design-icons';
import EntypoIcons from '../fonts-icon/entypo-icons';
import shadowBox from '../widgets/ShadowBox';

export default function AccountScreen({navigation}: any) {
  const layout = useWindowDimensions();
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Account',
      headerTitleStyle: {
        fontWeight: '900',
        color: Colors.text,
      },
      headerTitleAlign: 'center',
      headerLeft: (props: any) => (
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}>
          <EntypoIcons
            name="chevron-small-left"
            size={32}
            color={Colors.text}
          />
        </Pressable>
      ),
      headerStyle: {
        borderWidth: 0,
      },
    });
  }, []);
  return (
    <ScrollView showsVerticalScrollIndicator={true}>
      <View
        style={{
          marginHorizontal: 8,
          marginTop: 16,
          ...shadowBox,
          shadowColor: Colors.matteBlack,
        }}>
        <LinearGradient
          colors={[Colors.blueDark, Colors.blue]}
          style={{
            borderRadius: 8,
            paddingBottom: 16,
            paddingHorizontal: 16,
          }}>
          <View
            style={{
              height: 80,
              justifyContent: 'center',
            }}>
            <Text
              style={{
                color: Colors.neutralLightest,
                fontWeight: '900',
                fontSize: 18,
              }}>
              Current account
            </Text>
          </View>
          <View
            style={{
              backgroundColor: Colors.white,
              borderRadius: 8,
              padding: 8,
              display: 'flex',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flexGrow: 3,
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
                  marginTop: 8,
                  fontWeight: '600',
                  color: Colors.neutralDarker,
                }}>
                Available balance
              </Text>
              <Text
                style={{
                  color: Colors.text,
                  fontWeight: '800',
                  fontSize: 16,
                }}>
                {`${user.balance}${user.currency === 'USD' ? '$' : 'VNĐ'}`}
              </Text>
            </View>
            <View
              style={{
                flexGrow: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <Pressable
                style={{
                  backgroundColor: Colors.neutralLighter,
                  borderRadius: 4,
                  paddingHorizontal: 12,
                  paddingVertical: 1,
                }}>
                <AntDesignIcons
                  name={'arrowright'}
                  color={Colors.text}
                  size={16}
                />
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </View>
    </ScrollView>
  );
}
