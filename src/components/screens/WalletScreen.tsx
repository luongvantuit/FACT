import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  StatusBar,
  Platform,
} from 'react-native';
import Colors from '../../assets/colors';
import AntDesignIcons from '../fonts-icon/ant-design-icons';
import EntypoIcons from '../fonts-icon/entypo-icons';
import MaterialCommunityIcons from '../fonts-icon/material-community-icons';
import MaterialIcons from '../fonts-icon/material-icons';

export default function WalletScreen({navigation}: any) {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <StatusBar
        barStyle={'dark-content'}
        translucent={Platform.OS === 'android'}
        backgroundColor={Colors.transparent}
      />
      <View
        style={{
          backgroundColor: Colors.white,
          paddingTop: 54,
          paddingBottom: 8,
        }}>
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 18,
            textAlign: 'center',
          }}>
          My Wallet
        </Text>
      </View>
      <ScrollView>
        <Setting />
      </ScrollView>
    </View>
  );
}

function Setting(): JSX.Element {
  return (
    <View
      style={{
        backgroundColor: Colors.neutralLightest,
      }}>
      <View
        style={{
          backgroundColor: Colors.white,
          marginTop: 8,
          marginBottom: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <MaterialIcons name={'payment'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Manage card/account
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          marginVertical: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <EntypoIcons name={'fingerprint'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Fingerprint setting
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          marginVertical: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <EntypoIcons name={'keyboard'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Keyboard setting
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          marginVertical: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <EntypoIcons name={'language'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Language setting
        </Text>
      </View>
      <View
        style={{
          backgroundColor: Colors.white,
          marginVertical: 4,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <EntypoIcons name={'key'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Change password
        </Text>
      </View>
      {/**
       * bottom
       */}
      <View
        style={{
          backgroundColor: Colors.white,
          marginTop: 4,
          marginBottom: 8,
          paddingHorizontal: 16,
          alignItems: 'center',
          height: 68,
          display: 'flex',
          flexDirection: 'row',
        }}>
        <AntDesignIcons name={'logout'} size={32} color={Colors.yellowDark} />
        <Text
          style={{
            color: Colors.text,
            fontWeight: '900',
            fontSize: 16,
            marginLeft: 8,
          }}>
          Sign Out
        </Text>
      </View>
    </View>
  );
}
