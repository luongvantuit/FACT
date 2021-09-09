import React, {useState} from 'react';
import {View, Text, ScrollView, Platform, Dimensions} from 'react-native';
import {LineChart} from 'react-native-chart-kit';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import shadowBox from '../widgets/ShadowBox';

export default function AnalyticsScreen({navigation}: any) {
  const [borderWidth, setBorderWidth] = useState<number>(0);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: true,
      header: (props: any) => (
        <View
          style={{
            paddingTop: Platform.OS === 'android' ? 16 : 54,
            paddingBottom: 16,
            borderBottomColor: Colors.text,
            borderBottomWidth: borderWidth,
          }}>
          <Text
            style={{
              color: Colors.text,
              fontWeight: '900',
              fontSize: 18,
              textAlign: 'center',
              marginHorizontal: 32,
            }}>
            Analytics
          </Text>
        </View>
      ),
    });
  });
  return (
    <ScrollView
      onScroll={e => {
        if (e.nativeEvent.contentOffset.y > 0) setBorderWidth(0.2);
        else setBorderWidth(0);
      }}
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}>
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
          decimalPlaces: 2,
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          paddingTop: 16,
          propsForDots: {
            r: '3',
            strokeWidth: '2',
            stroke: Colors.yellowDark,
            fill: Colors.yellowLightest,
          },
        }}
        yAxisLabel={user.currency === 'USD' ? '$' : 'VNĐ'}
        yAxisInterval={1}
        bezier
        style={{
          marginHorizontal: 8,
          marginTop: 16,
          borderRadius: 8,
          ...shadowBox,
          shadowColor: Colors.matteBlack,
        }}
      />
    </ScrollView>
  );
}
