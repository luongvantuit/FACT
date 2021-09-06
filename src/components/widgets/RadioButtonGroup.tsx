import {useTheme} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import Colors from '../../assets/colors';
import shadowBox from './ShadowBox';

export default function RadioButtonGroup(props: {
  items: Array<{
    label?: string;
    body?: JSX.Element;
  }>;
  initialValue?: number;
  onChangeValue?: (value: number) => void;
}) {
  const [value, setValue] = useState<number>(props.initialValue || 0);
  return (
    <View
      style={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      {props.items?.map((item, index) => (
        <Pressable
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 8,
            paddingHorizontal: 16,
            ...shadowBox,
            borderRadius: 8,
            paddingVertical: 16,
            backgroundColor: '#fff',
          }}
          onPress={() => {
            if (props.onChangeValue !== undefined) props.onChangeValue(index);
            setValue(index);
          }}>
          <View
            style={{
              borderWidth: 2,
              width: 24,
              height: 24,
              borderRadius: 12,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: 8,
            }}>
            <View
              style={{
                width: 14,
                height: 14,
                borderRadius: 8,
              }}
            />
          </View>
          {item.body !== undefined ? (
            item.body
          ) : (
            <Text
              style={{
                fontWeight: '900',
              }}>
              {item.label}
            </Text>
          )}
        </Pressable>
      ))}
    </View>
  );
}
