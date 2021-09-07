import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, Dimensions, Platform, Pressable} from 'react-native';
import {check, checkMultiple, request, RESULTS} from 'react-native-permissions';
import Colors from '../../assets/colors';
import RadioButtonGroup from '../widgets/RadioButtonGroup';
import shadowBox from '../widgets/ShadowBox';

export default function SelectTypePersonalDocumentsScreen({navigation}: any) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height:
          Dimensions.get('window').height -
          (Platform.OS === 'android' ? 64 : 118),
      }}>
      <View style={{marginHorizontal: 32, marginVertical: 32}}>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 28,
            marginBottom: 8,
            color: Colors.matteBlack,
          }}>
          Now. Please Select Indentity Papers
        </Text>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 24,
            marginBottom: 16,
            color: Colors.matteBlack,
          }}>
          Step 2
        </Text>
        <RadioButtonGroup items={[{label: 'CCCD/CMND'}, {label: 'Passport'}]} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          ...shadowBox,
          shadowColor: Colors.matteBlack,
          backgroundColor: Colors.yellow,
        }}>
        <Pressable
          style={{
            margin: 32,
            justifyContent: 'center',
            paddingVertical: 16,
            borderRadius: 8,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
            backgroundColor: Colors.matteBlack,
          }}
          onPress={() => {
            check(
              Platform.OS === 'android'
                ? 'android.permission.CAMERA'
                : 'ios.permission.CAMERA',
            ).then(result => {
              if (result === RESULTS.GRANTED)
                navigation.navigate('ekyc-indentification');
              else {
                request(
                  Platform.OS === 'android'
                    ? 'android.permission.CAMERA'
                    : 'ios.permission.CAMERA',
                ).then(result => {
                  if (result === RESULTS.GRANTED)
                    navigation.navigate('ekyc-indentification');
                });
              }
            });
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontWeight: '900',
              color: Colors.neutralLightest,
            }}>
            Next Step
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
