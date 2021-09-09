import React from 'react';
import {
  View,
  Text,
  Platform,
  Pressable,
  Dimensions,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../assets/colors';
import EntypoIcons from '../fonts-icon/entypo-icons';
import ListCards from '../widgets/ListCards';
import shadowBox from '../widgets/ShadowBox';

export default function CardServiceScreen({navigation}: any) {
  return (
    <LinearGradient
      colors={[Colors.blueDark, Colors.blue, Colors.blueLight]}
      style={{
        flex: 1,
        alignContent: 'space-between',
      }}>
      <StatusBar
        barStyle={'light-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
      <View
        style={{
          paddingTop: 54,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <Pressable
          onPress={() => {
            navigation.goBack();
          }}
          style={{
            marginVertical: 16,
            marginHorizontal: 25,
          }}>
          <EntypoIcons
            name="chevron-small-left"
            size={32}
            color={Colors.white}
          />
        </Pressable>
        <Text
          style={{
            flex: 1,
            color: Colors.white,
            textAlign: 'center',
            fontWeight: '900',
            fontSize: 18,
          }}>
          Card service
        </Text>
        <Pressable
          style={{
            marginVertical: 16,
            marginHorizontal: 25,
          }}>
          <EntypoIcons
            name="chevron-small-left"
            size={32}
            color={Colors.transparent}
          />
        </Pressable>
      </View>
      <View
        style={{
          marginTop: Dimensions.get('window').height / 4,
          flex: 1,
          backgroundColor: Colors.neutralLightest,
          ...shadowBox,
          shadowColor: Colors.matteBlack,
        }}>
        <ListCards />
      </View>
    </LinearGradient>
  );
}
