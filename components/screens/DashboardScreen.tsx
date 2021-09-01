import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ListCard, ListPayment} from '../widgets';
import {colors} from '../../values';
import {EntypoIcon, IoinconsIcon} from '..';
export default class DashboardScreen extends Component<{navigation: any}, any> {
  render() {
    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            display: 'flex',
            marginHorizontal: 8,
            marginTop: 16,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <IoinconsIcon name="sunny" size={24} />
          <Text
            style={{
              color: colors.black5,
              marginHorizontal: 8,
              fontWeight: 'bold',
            }}>
            Good Morning.
          </Text>
        </View>
        <Text
          style={{
            marginTop: 16,
            marginHorizontal: 16,
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Account
        </Text>
        <View
          style={{
            backgroundColor: colors.white,
            height: 180,
            width: Dimensions.get('window').width - 16,
            margin: 8,
            borderRadius: 8,
            elevation: 8,
            shadowColor: colors.black1,
            shadowOffset: {
              width: 1,
              height: 4,
            },
            display: 'flex',
            flexDirection: 'column',
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            marginVertical: 16,
            padding: 16,
          }}>
          <View
            style={{
              width: Dimensions.get('window').width - 48,
              paddingVertical: 8,
              borderBottomColor: colors.black5,
              borderBottomWidth: 0.3,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              flexGrow: 2,
            }}>
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                flexGrow: 3,
              }}>
              <Image
                source={require('../../assets/leak.jpeg')}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                }}
              />
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  marginHorizontal: 16,
                }}>
                <Text
                  style={{
                    fontWeight: '900',
                    fontSize: 18,
                  }}>
                  LUONG VAN TU
                </Text>
                <Text style={{}}>Personal</Text>
              </View>
            </View>
            <Text
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderColor: colors.black5,
                borderRadius: 8,
                borderWidth: 1,
                flexGrow: 1,
                textAlign: 'center',
                fontWeight: 'bold',
              }}>
              USD
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              flexGrow: 100,
            }}>
            <View
              style={{
                flexGrow: 3,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  marginVertical: 8,
                }}>
                Gold
              </Text>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                }}>
                $6262.62
              </Text>
            </View>
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-end',
                flexGrow: 1,
              }}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  this.props.navigation.navigate('recharge');
                }}>
                <View
                  style={{
                    padding: 16,
                    backgroundColor: colors.black8,
                    borderRadius: 8,
                  }}>
                  <IoinconsIcon name="add" size={28} />
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <Text
          style={{
            marginHorizontal: 16,
            fontWeight: 'bold',
            fontSize: 18,
          }}>
          Your Cards
        </Text>
        <ListCard />
        {/* <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.props.navigation.navigate('payment');
          }}>
          <View
            style={{
              borderRadius: 8,
              padding: 16,
              marginTop: 8,
              elevation: 8,
              marginHorizontal: 8,
              shadowColor: colors.black1,
              shadowOffset: {
                width: 1,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              backgroundColor: colors.white,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '900',
              }}>
              Payment
            </Text>
            <EntypoIcon name="chevron-small-right" size={32} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.props.navigation.navigate('services');
          }}>
          <View
            style={{
              borderRadius: 8,
              padding: 16,
              marginTop: 8,
              elevation: 8,
              marginHorizontal: 8,
              shadowColor: colors.black1,
              shadowOffset: {
                width: 1,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              backgroundColor: colors.white,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '900',
              }}>
              Services
            </Text>
            <EntypoIcon name="chevron-small-right" size={32} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            this.props.navigation.navigate('analytics');
          }}>
          <View
            style={{
              borderRadius: 8,
              padding: 16,
              marginTop: 8,
              elevation: 8,
              marginHorizontal: 8,
              shadowColor: colors.black1,
              shadowOffset: {
                width: 1,
                height: 4,
              },
              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              backgroundColor: colors.white,
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text
              style={{
                fontWeight: '900',
              }}>
              Analytics
            </Text>
            <EntypoIcon name="chevron-small-right" size={32} />
          </View>
        </TouchableOpacity> */}
        <View
          style={{
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            paddingHorizontal: 16,
            paddingTop: 32,
            marginTop: 8,
            elevation: 8,
            shadowColor: colors.black1,
            shadowOffset: {
              width: 1,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            backgroundColor: colors.white,
            display: 'flex',
          }}>
          <ListPayment />
        </View>
      </ScrollView>
    );
  }
}
