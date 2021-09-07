import React from 'react';
import {
  View,
  Text,
  Dimensions,
  Platform,
  Pressable,
  ImageBackground,
} from 'react-native';
import {check, request, RESULTS} from 'react-native-permissions';
import {UndrawOptions} from '../../assets';
import Colors from '../../assets/colors';
import RadioButtonGroup from '../widgets/RadioButtonGroup';
import shadowBox from '../widgets/ShadowBox';

export default function SelectTypePersonalDocumentsScreen({navigation}: any) {
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <ImageBackground
        source={UndrawOptions}
        style={{
          height: 280,
        }}
        resizeMode={'stretch'}
      />
      <View style={{marginHorizontal: 32}}>
        <Text
          style={{
            fontWeight: '900',
            fontSize: 28,
            marginBottom: 8,
            color: Colors.text,
          }}>
          Now. Please Select Indentity Papers
        </Text>
        <Text
          style={{
            fontWeight: '800',
            fontSize: 24,
            marginBottom: 16,
            color: Colors.text,
          }}>
          Step 2
        </Text>
        <RadioButtonGroup items={[{label: 'CCCD/CMND'}, {label: 'Passport'}]} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: Dimensions.get('window').height,
          marginTop: 16,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          ...shadowBox,
          shadowColor: Colors.matteBlack,
          backgroundColor: Colors.white,
        }}>
        <Pressable
          style={{
            marginHorizontal: 32,
            marginVertical: 16,
            justifyContent: 'center',
            paddingVertical: 16,
            borderRadius: 8,
            ...shadowBox,
            shadowColor: Colors.matteBlack,
            backgroundColor: Colors.text,
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
