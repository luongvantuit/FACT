import React from 'react';
import {Platform, StatusBar, View, Text, Pressable} from 'react-native';
import Colors from '../../assets/colors';
import EntypoIcons from '../fonts-icon/entypo-icons';
import shadowBox from '../widgets/ShadowBox';

export default function AcceptInforScreen({navigation}: any) {
  return (
    <View
      style={{
        backgroundColor: Colors.blue,
        flex: 1,
      }}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={Colors.transparent}
        translucent={Platform.OS === 'android'}
      />
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          paddingHorizontal: 25,
          paddingTop: 54,
          paddingBottom: 16,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}>
        <EntypoIcons
          name="chevron-small-left"
          size={32}
          color={Colors.neutralLightest}
        />
        <Text
          style={{
            color: Colors.neutralLightest,
            fontWeight: 'bold',
          }}>
          Verify identity documents
        </Text>
      </Pressable>
      <View
        style={{
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          flex: 1,
          backgroundColor: Colors.neutralLightest,
          paddingVertical: 8,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <View>
          <Text
            style={{
              fontWeight: '900',
              color: Colors.text,
              marginHorizontal: 16,
            }}>
            Name
          </Text>
          <Text
            style={{
              fontWeight: '900',
              color: Colors.text,
              marginHorizontal: 16,
            }}>
            LUONG VAN TU
          </Text>
        </View>
        <Pressable
          style={{
            marginHorizontal: 32,
            justifyContent: 'center',
            paddingVertical: 16,
            borderRadius: 8,
            marginVertical: 8,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
            backgroundColor: Colors.blue,
          }}
          onPress={() => {
            navigation.navigate('ekyc-face');
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '900',
              color: Colors.neutralLightest,
            }}>
            Next step
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
