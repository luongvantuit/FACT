import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {ListCard, ToolbarDashboard} from '../widgets';
import {colors} from '../../values';
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
              marginHorizontal: 8,
              fontWeight: '900',
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
              }}>
              <View
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
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
            </View>
          </View>
          <Text
            style={{
              marginHorizontal: 8,
              fontWeight: '900',
              marginBottom: 8,
            }}>
            Your Cards
          </Text>
          <ListCard />
        </ScrollView>
      </View>
    );
  }
}
