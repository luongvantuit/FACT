import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {styleDashboardScreen as styles} from '../../styles/style-dashboard-screen';
import {Dimensions, SafeAreaView, ScrollView, Text, View} from 'react-native';
Icon.loadFont();
import {ListCard} from '../widgets';
export default class DashboardScreen extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <ScrollView alwaysBounceVertical={false} alwaysBounceHorizontal={false}>
          <ListCard />
          <View style={styles.boxItemContainer}>
            <View style={styles.boxItemTopLeft}>
              <Text>Test</Text>
            </View>
            <View style={styles.boxItemTopRight}>
              <Text>Test</Text>
            </View>
          </View>
          <View style={styles.boxItemContainer}>
            <View style={styles.boxItemBottomLeft}>
              <Text>Test</Text>
            </View>
            <View style={styles.boxItemBottomRight}>
              <Text>Test</Text>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
