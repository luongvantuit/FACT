import { useTheme } from '@react-navigation/native';
import React from 'react';
import { View, Text, Dimensions, Platform, Pressable } from 'react-native';
import { check, checkMultiple, request, RESULTS } from 'react-native-permissions';
import Colors from '../../assets/colors';
import AppTheme from '../../themes/app-theme';
import RadioButtonGroup from '../widgets/RadioButtonGroup';

export default function SelectTypePersonalDocumentsScreen({ navigation }: any) {
  const theme: AppTheme = useTheme();
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
      <View style={{ marginHorizontal: 32, marginVertical: 32 }}>
        <Text
          style={{
            color: theme.app?.textColor,
            fontWeight: '900',
            fontSize: 28,
            marginBottom: 8,
          }}>
          Now. Please Select Indentity Papers
        </Text>
        <Text
          style={{
            color: theme.app?.textColor,
            fontWeight: '900',
            fontSize: 24,
            marginBottom: 16,
          }}>
          Step 2
        </Text>
        <RadioButtonGroup items={[{ label: 'CCCD/CMND' }, { label: 'Passport' }]} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'column',
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          elevation: 8,
          shadowColor: theme.app?.shadowColor,
          shadowOffset: {
            width: 1,
            height: 4,
          },
          shadowOpacity: 0.3,
          shadowRadius: 4.65,
          backgroundColor: Colors.yellow,
        }}>
        <Pressable
          style={{
            margin: 32,
            justifyContent: 'center',
            backgroundColor: '#363636',
            paddingVertical: 16,
            borderRadius: 8,
          }}
          onPress={() => {
            check(Platform.OS === 'android' ? 'android.permission.CAMERA' : 'ios.permission.CAMERA').then(result => {
              if (result === RESULTS.GRANTED)
                navigation.navigate('ekyc-indentification')
              else {
                request(Platform.OS === 'android' ? 'android.permission.CAMERA' : 'ios.permission.CAMERA')
                  .then(result => {
                    if (result === RESULTS.GRANTED)
                      navigation.navigate('ekyc-indentification')
                  })
              }
            })
          }}>
          <Text
            style={{
              textAlign: 'center',
              color: '#fff',
              fontWeight: '900',
            }}>
            Next Step
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
