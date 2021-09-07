import React from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  Pressable,
  View,
  Text,
} from 'react-native';
import Colors from '../../assets/colors';
import EntypoIcons from '../fonts-icon/entypo-icons';
import shadowBox from './ShadowBox';

export default function KeypadCustom(props: {onPress?: (key: any) => void}) {
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
    <EntypoIcons name="chevron-small-left" size={28} color={Colors.text} />,
  ];
  return (
    <View
      style={{
        marginHorizontal: 32,
        marginVertical: 16,
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
              borderRadius:
                ((Dimensions.get('window').width - 32 * 2 - 3 * 16) / 3 - 32) /
                2,
              borderColor: Colors.neutralLighter,
              borderWidth: 1,
              backgroundColor: Colors.neutralLightest,
            }}
            onPress={(event: GestureResponderEvent) => {
              if (props.onPress !== undefined) {
                props.onPress(index === key.length - 1 ? 'delete' : item);
              }
            }}>
            <Text
              style={{
                fontWeight: '900',
                color: Colors.text,
              }}>
              {item}
            </Text>
          </Pressable>
        </View>
      ))}
    </View>
  );
}
