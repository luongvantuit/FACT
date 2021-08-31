import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ListCard, ToolbarDashboard} from '../widgets';
import {colors} from '../../values';
import {IoinconsIcon} from '..';
export default class DashboardScreen extends Component {
  render() {
    return (
      <View>
        <ToolbarDashboard />
        <ScrollView
          alwaysBounceVertical={false}
          alwaysBounceHorizontal={false}
          showsVerticalScrollIndicator={false}>
          <Text
            style={{
              marginTop: 32,
              marginHorizontal: 16,
              fontWeight: '900',
              fontSize: 24,
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
                    fontWeight: '900',
                    fontSize: 22,
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
                <TouchableOpacity activeOpacity={0.8}>
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
              fontWeight: '900',
              marginBottom: 8,
              fontSize: 24,
            }}>
            Your Cards
          </Text>
          <ListCard />
          ///
        </ScrollView>
      </View>
    );
  }
}
