import React, {useState} from 'react';
import {
  ScrollView,
  Dimensions,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';
import {LineChart, PieChart} from 'react-native-chart-kit';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../assets/colors';
import user from '../../datas/user';
import shadowBox from '../widgets/ShadowBox';
import * as Progress from 'react-native-progress';

export default function AnalyticsScreen({navigation}: any) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  const [shownAlert, setShownAlert] = useState<boolean>(true);
  let timeOut: NodeJS.Timeout = setTimeout(() => {
    setShownAlert(false);
    clearTimeout(timeOut);
  }, 800);
  return shownAlert === true ? (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
      <Progress.Circle
        borderWidth={6}
        indeterminate
        color={Colors.blueLight}
        strokeCap={'butt'}
        size={98}
        animated={true}
      />
    </View>
  ) : (
    <View
      style={{
        width: Dimensions.get('window').width,
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        zIndex: 0,
      }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 8,
          marginTop: 90,
          color: Colors.blueDark,
          fontWeight: '900',
          fontSize: 32,
        }}>
        Spends
      </Text>
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 8,
          color: Colors.text,
          fontWeight: '800',
          fontSize: 12,
        }}>
        6th - 11h of September 2021
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: 8,
          marginBottom: 16,
        }}>
        <LinearGradient
          colors={[Colors.blueDark, Colors.blueDark, Colors.blue]}
          style={{
            borderRadius: 18,
            height: 36,
            width: 74,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 4,
            borderWidth: 0,
            borderColor: Colors.transparent,
          }}>
          <Text
            style={{
              color: Colors.neutralLightest,
              fontWeight: '900',
            }}>
            Week
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={[Colors.white, Colors.white, Colors.white]}
          style={{
            backgroundColor: Colors.transparent,
            borderRadius: 18,
            height: 36,
            width: 74,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 4,
            borderWidth: 1,
            borderColor: Colors.blue,
          }}>
          <Text
            style={{
              color: Colors.blueDark,
              fontWeight: '800',
            }}>
            Month
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={[Colors.white, Colors.white, Colors.white]}
          style={{
            backgroundColor: Colors.transparent,
            borderRadius: 18,
            height: 36,
            width: 74,
            justifyContent: 'center',
            alignItems: 'center',
            marginHorizontal: 4,
            borderWidth: 1,
            borderColor: Colors.blue,
          }}>
          <Text
            style={{
              color: Colors.blueDark,
              fontWeight: '800',
            }}>
            Year
          </Text>
        </LinearGradient>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        alwaysBounceVertical={false}
        bounces={false}
        overScrollMode={'never'}
        style={{
          position: 'absolute',
          width: Dimensions.get('window').width,
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 2,
        }}>
        {/** 397 */}
        <LinearGradient
          colors={[Colors.blueDark, Colors.blue, Colors.blueLight]}
          style={{
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            marginTop: 280,
            paddingVertical: 32,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
          }}>
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
        </LinearGradient>
      </ScrollView>
    </View>
  );
}
