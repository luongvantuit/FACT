import React from 'react';
import {ScrollView, Dimensions, View, Text, StatusBar} from 'react-native';
import {LineChart, PieChart} from 'react-native-chart-kit';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import shadowBox from '../widgets/ShadowBox';

export default function AnalyticsScreen({navigation}: any) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  return (
    <View
      style={{
        flex: 1,
      }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}>
        {/** 397 */}
        <View
          style={{
            paddingTop: 54,
            paddingBottom: 16,
            borderBottomColor: Colors.text,
          }}>
          <Text
            style={{
              color: Colors.neutralLightest,
              fontWeight: '900',
              fontSize: 18,
              textAlign: 'center',
              marginHorizontal: 32,
            }}>
            Analytics
          </Text>
        </View>
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            datasets: [
              {
                data: [20.0, 84.5, 54.0, 0.0, 18.5, 220],
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={240}
          chartConfig={{
            backgroundColor: Colors.blue,
            backgroundGradientFrom: Colors.blueDark,
            backgroundGradientTo: Colors.blue,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: '3',
              fill: Colors.yellowDark,
            },
          }}
          yAxisSuffix={user.currency === 'USD' ? '$' : 'VNĐ'}
          bezier
          style={{
            marginHorizontal: 8,
            marginTop: 16,
            borderRadius: 8,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
          }}
        />
        <Text
          style={{
            fontWeight: '900',
            fontSize: 18,
            color: Colors.neutralLightest,
            textAlign: 'center',
            marginTop: 16,
            marginBottom: 8,
          }}>
          Top categories
        </Text>
        <LinearGradient
          colors={[Colors.blueDark, Colors.blue, Colors.blue]}
          style={{
            marginTop: 16,
            marginHorizontal: 8,
            borderRadius: 8,
          }}>
          <PieChart
            width={Dimensions.get('window').width - 16}
            height={240}
            data={[
              {
                name: 'Service',
                expense: 36.5,
                color: Colors.blue,
                legendFontColor: Colors.neutralLightest,
              },
              {
                name: 'Restaurant',
                expense: 120,
                color: Colors.blueLight,
                legendFontColor: Colors.neutralLightest,
              },
              {
                name: 'Shopping',
                expense: 240.5,
                color: Colors.blueLighter,
                legendFontColor: Colors.neutralLightest,
              },
            ]}
            chartConfig={{
              color: () => `${Colors.blue}`,
              labelColor: () => `${Colors.blue}`,
            }}
            accessor={'expense'}
            backgroundColor={Colors.transparent}
            paddingLeft={'8'}
          />
        </LinearGradient>
      </ScrollView>
    </View>
  );
}
