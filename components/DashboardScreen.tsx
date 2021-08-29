import React, {Component} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors} from '../values';
export default class DashboardScreen extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}>
        <ScrollView>
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

const boxItemBorderRadius: number = 6;
const boxItemHeight: number = 110;

const styles = StyleSheet.create({
  boxItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boxItemTopRight: {
    marginTop: 8,
    marginRight: 8,
    height: boxItemHeight,
    backgroundColor: colors.white,
    flexGrow: 1,
    marginLeft: 4,
    marginBottom: 4,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: boxItemBorderRadius,
  },
  boxItemTopLeft: {
    marginTop: 8,
    marginRight: 4,
    height: boxItemHeight,
    flexGrow: 1,
    marginLeft: 8,
    marginBottom: 4,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: boxItemBorderRadius,
  },
  boxItemBottomRight: {
    marginTop: 4,
    marginRight: 8,
    height: boxItemHeight,
    backgroundColor: colors.white,
    flexGrow: 1,
    marginLeft: 4,
    marginBottom: 8,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: boxItemBorderRadius,
  },
  boxItemBottomLeft: {
    marginTop: 4,
    marginRight: 4,
    height: boxItemHeight,
    backgroundColor: colors.white,
    flexGrow: 1,
    marginLeft: 8,
    marginBottom: 8,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: boxItemBorderRadius,
  },
});
