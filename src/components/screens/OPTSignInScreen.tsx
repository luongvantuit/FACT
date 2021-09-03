import {useTheme} from '@react-navigation/native';
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  Pressable,
  Dimensions,
  GestureResponderEvent,
} from 'react-native';
import AppTheme from '../../themes/app-theme';
import EntypoIcons from '../fonts-icon/entypo-icons';

const len = [0, 1, 2, 3];

export default function OPTSignInScreen({navigation}: any) {
  const [position, setPosition] = useState<number>(0);
  const [codeOPT, setCodeOPT] = useState<Array<string>>(['', '', '', '']);
  const theme: AppTheme = useTheme() as AppTheme;
  return (
    <View>
      <Text>Code OPT</Text>
      <View
        style={{
          marginHorizontal: 24,
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        {len.map((item, index) => (
          <Pressable
            style={{
              marginHorizontal: 8,
              display: 'flex',
              width: 58,
              borderRadius: 8,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#f2f2f2',
              elevation: 8,
              shadowColor: theme.app?.shadowColor,
              shadowOffset: {
                width: 1,
                height: 4,
              },

              shadowOpacity: 0.3,
              shadowRadius: 4.65,
              height: 68,
              borderColor: '#D7D7D7',
              borderWidth: index === position ? 0.5 : 0,
            }}
            key={item}
            onPress={() => {
              setPosition(index);
            }}>
            <Text
              style={{
                fontWeight: '900',
              }}>
              {codeOPT[index]}
            </Text>
          </Pressable>
        ))}
      </View>
      <KeyPadCustom
        onPress={(key: any) => {
          const newCodeOPT: Array<string> = [];
          for (let index = 0; index < 4; index++) {
            newCodeOPT.push(codeOPT[index]);
          }
          if (key !== 'delete') {
            newCodeOPT[position] = key;
            if (position < 3) setPosition(position + 1);
          } else {
            if (newCodeOPT[position] === '') newCodeOPT[position - 1] = '';
            else newCodeOPT[position] = '';
            if (codeOPT[3] !== '' && position === 3) newCodeOPT[3] = '';
            if (position !== 0) setPosition(position - 1);
          }
          setCodeOPT(newCodeOPT);
        }}
      />
    </View>
  );
}

export function KeyPadCustom(props: {onPress?: (key: any) => void}) {
  const key = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    <EntypoIcons name="chevron-small-left" color={'#000'} size={28} />,
  ];
  return (
    <View
      style={{
        marginHorizontal: 32,
        marginVertical: 32,
        display: 'flex',
        flexWrap: 'wrap',
        flexShrink: 3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
      {key.map((item, index) => (
        <View
          key={index}
          style={{
            width: (Dimensions.get('window').width - 32 * 2 - 3 * 16) / 3,
            marginHorizontal: 8,
            height: (Dimensions.get('window').width - 32 * 2 - 3 * 16) / 3 - 24,
            justifyContent: 'center',
            alignItems: 'center',
            display: 'flex',
          }}>
          <Pressable
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              display: 'flex',
              width:
                (Dimensions.get('window').width - 32 * 2 - 3 * 16) / 3 - 32,
              height:
                (Dimensions.get('window').width - 32 * 2 - 3 * 16) / 3 - 32,
              backgroundColor: '#fff',
              borderRadius:
                ((Dimensions.get('window').width - 32 * 2 - 3 * 16) / 3 - 32) /
                2,
              borderColor: '#D7D7D7',
              borderWidth: 0.5,
            }}
            onPress={(event: GestureResponderEvent) => {
              if (props.onPress !== undefined) {
                props.onPress(index === key.length - 1 ? 'delete' : item);
              }
            }}>
            <Text
              style={{
                fontWeight: '900',
              }}>
              {item}
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}
