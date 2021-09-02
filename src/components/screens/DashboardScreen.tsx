import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Ionicons from '../fonts-icon/ionicons';
import ListCard from '../widgets/ListCards';
import ListServicesPayment from '../widgets/ListServicesPayment';
export default class DashboardScreen extends Component<{ navigation: any }, any> {
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
          <Ionicons name="sunny" size={24} />
          <Text
            style={{
              color: '#D7D7D7',
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
            backgroundColor: '#fff',
            height: 180,
            width: Dimensions.get('window').width - 16,
            margin: 8,
            borderRadius: 8,
            elevation: 8,
            shadowColor: '#000',
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
              borderBottomColor: '#D7D7D7',
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
                <Text style={{ }}>Personal</Text>
              </View>
            </View>
            <Text
              style={{
                paddingHorizontal: 12,
                paddingVertical: 6,
                borderColor: '#D7D7D7',
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
                    backgroundColor: '#D7D7D7',
                    borderRadius: 8,
                  }}>
                  <Ionicons name="add" size={28} />
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
        <View
          style={{
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            paddingHorizontal: 16,
            paddingTop: 32,
            marginTop: 8,
            elevation: 8,
            shadowColor: '#000',
            shadowOffset: {
              width: 1,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
            backgroundColor: '#fff',
            display: 'flex',
          }}>
          <ListServicesPayment />
        </View>
      </ScrollView>
    );
  }
}
