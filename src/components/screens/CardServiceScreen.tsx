import {Theme, useTheme} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Platform,
  Pressable,
  Dimensions,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Colors from '../../assets/colors';
import listCards from '../../datas/list-cards';
import EntypoIcons from '../fonts-icon/entypo-icons';
import FontAwesomeIcons from '../fonts-icon/font-awesome-icons';
import ListCards from '../widgets/ListCards';
import shadowBox from '../widgets/ShadowBox';

export default function CardServiceScreen({navigation}: any) {
  const theme: Theme = useTheme();
  return (
    //  <LinearGradient
    //   colors={[Colors.blueDark, Colors.blueLight, Colors.blueLight]}
    //   style={{
    //     position: 'relative',
    //     top: 0,
    //     left: 0,
    //     right: 0,
    //   }}>
    //   <View
    //     style={{
    //       paddingTop: Platform.OS === 'android' ? 0 : 54,
    //       display: 'flex',
    //       flexDirection: 'row',
    //       alignItems: 'center',
    //     }}>
    //     <Pressable
    //       onPress={() => {
    //         navigation.goBack();
    //       }}
    //       style={{
    //         marginVertical: 16,
    //         marginHorizontal: 16 - 9,
    //       }}>
    //       <EntypoIcons
    //         name="chevron-small-left"
    //         size={32}
    //         color={Colors.white}
    //       />
    //     </Pressable>
    //     <Text
    //       style={{
    //         flex: 1,
    //         color: Colors.white,
    //         textAlign: 'center',
    //         fontWeight: '900',
    //         fontSize: 18,
    //       }}>
    //       Card service
    //     </Text>
    //     <Pressable
    //       style={{
    //         marginVertical: 16,
    //         marginHorizontal: 16 - 9,
    //       }}>
    //       <EntypoIcons
    //         name="chevron-small-left"
    //         size={32}
    //         color={Colors.transparent}
    //       />
    //     </Pressable>
    //   </View>
    //   <View
    //     style={{
    //       marginVertical: 60,
    //       display: 'flex',
    //       flexDirection: 'row',
    //       position: 'absolute',
    //       top: 32 + (Platform.OS === 'android' ? 0 : 54),
    //       left: 0,
    //       right: 0,
    //       zIndex: 5,
    //       height: 112,
    //       borderRadius: 8,
    //       ...shadowBox,
    //       shadowColor: Colors.matteBlack,
    //       marginHorizontal: 32,
    //       paddingVertical: 16,
    //       backgroundColor: Colors.white,
    //     }}>
    //     <View
    //       style={{
    //         width: (Dimensions.get('window').width - 64) / 2,
    //         borderRightColor: Colors.blueLight,
    //         borderRightWidth: 0.5,
    //       }}></View>
    //     <View
    //       style={{
    //         width: (Dimensions.get('window').width - 64) / 2,
    //         borderLeftColor: Colors.blueLight,
    //         borderLeftWidth: 0.5,
    //       }}></View>
    //   </View>
    //   <ListCards />
    // </LinearGradient>
    <LinearGradient
      colors={[Colors.blueDark, Colors.blue, Colors.blueLight]}
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle={'light-content'}
        translucent={Platform.OS === 'android'}
        animated={true}
        showHideTransition={'slide'}
      />
      <View></View>
    </LinearGradient>
  );
}
