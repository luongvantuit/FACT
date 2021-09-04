import React from 'react';
import {
  Dimensions,
  GestureResponderEvent,
  Pressable,
  View,
  Text,
} from 'react-native';
import EntypoIcons from '../fonts-icon/entypo-icons';

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
    <EntypoIcons name="chevron-small-left" color={'#000'} size={28} />,
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
