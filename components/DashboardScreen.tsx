import React, {Component} from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {colors, dimensions} from '../values';
export default class DashboardScreen extends Component {
  render() {
    return (
      <SafeAreaView>
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

const styles = StyleSheet.create({
  boxItemContainer: {
    width: dimensions.widthWindow,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boxItemTopRight: {
    marginTop: 8,
    marginRight: 8,
    height: 120,
    backgroundColor: colors.black,
    flexGrow: 1,
    marginLeft: 4,
    marginBottom: 4,
  },
  boxItemTopLeft: {
    marginTop: 8,
    marginRight: 4,
    height: 120,
    backgroundColor: colors.black,
    flexGrow: 1,
    marginLeft: 8,
    marginBottom: 4,
  },
  boxItemBottomRight: {
    marginTop: 4,
    marginRight: 8,
    height: 120,
    backgroundColor: colors.black,
    flexGrow: 1,
    marginLeft: 4,
    marginBottom: 8,
  },
  boxItemBottomLeft: {
    marginTop: 4,
    marginRight: 4,
    height: 120,
    backgroundColor: colors.black,
    flexGrow: 1,
    marginLeft: 8,
    marginBottom: 8,
  },
});
