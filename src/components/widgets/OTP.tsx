import {Theme, useTheme} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {View, Text, Pressable} from 'react-native';
import Colors from '../../assets/colors';
import EntypoIcons from '../fonts-icon/entypo-icons';
import KeypadCustom from './KeypadCustom';
import shadowBox from './ShadowBox';

export default function OTP(props: {
  navigation: any;
  onComplete?: () => void;
  length?: number;
}) {
  const theme: Theme = useTheme();
  const init: Array<string> = [];
  const length = props.length || 4;
  for (let index = 0; index < length; index++) init.push('');
  const [position, setPosition] = useState<number>(0);
  const [codeOTP, setCodeOTP] = useState<Array<string>>(init);
  useEffect(() => {
    var opt: string = '';
    for (let index = 0; index < codeOTP.length; index++) opt += codeOTP[index];
    if (opt.length === length)
      if (props.onComplete !== undefined) props.onComplete();
  });
  return (
    <View>
      <Text
        style={{
          fontWeight: '900',
          margin: 32,
          fontSize: 32,
          textAlign: 'center',
          color: Colors.matteBlack,
        }}>
        OTP Code
      </Text>
      <View
        style={{
          marginHorizontal: 24,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {init.map((item, index) => (
          <Pressable
            style={{
              marginHorizontal: 8,
              display: 'flex',
              width: 58,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              ...shadowBox,
              shadowColor:
                index === position
                  ? Colors.matteBlack
                  : theme.colors.background,
              backgroundColor: Colors.yellow,
              height: 68,
            }}
            key={index}
            onPress={() => {
              setPosition(index);
            }}>
            <Text
              style={{
                fontWeight: '900',
                color: Colors.matteBlack,
              }}>
              {codeOTP[index]}
            </Text>
          </Pressable>
        ))}
      </View>
      <View
        style={{
          marginTop: 20,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            fontWeight: '700',
            color: Colors.matteBlack,
          }}>
          Send Again Code?
        </Text>
        <Text
          style={{
            fontWeight: '800',
            color: Colors.red,
          }}>
          {' 02:03'}
        </Text>
      </View>
      <KeypadCustom
        onPress={(key: any) => {
          const newCodeOPT: Array<string> = [];
          for (let index = 0; index < 4; index++) {
            newCodeOPT.push(codeOTP[index]);
          }
          if (key !== 'delete') {
            if (position === length - 1) {
              if (newCodeOPT[position] === '') newCodeOPT[position] = key;
            } else newCodeOPT[position] = key;
            if (position < length - 1) setPosition(position + 1);
          } else {
            if (newCodeOPT[position] === '') newCodeOPT[position - 1] = '';
            else newCodeOPT[position] = '';
            if (codeOTP[length - 1] !== '' && position === length - 1)
              newCodeOPT[length - 1] = '';
            if (position !== 0) setPosition(position - 1);
          }
          setCodeOTP(newCodeOPT);
        }}
      />
      <Pressable
        style={{
          marginHorizontal: 32,
          justifyContent: 'center',
          paddingVertical: 16,
          borderRadius: 8,
          marginVertical: 16,
          backgroundColor: Colors.matteBlack,
          ...shadowBox,
          shadowColor: Colors.matteBlack,
        }}
        onPress={() => {
          props.navigation.goBack();
        }}>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: '900',
            color: Colors.neutralLightest,
          }}>
          Go Back
        </Text>
      </Pressable>
    </View>
  );
}
