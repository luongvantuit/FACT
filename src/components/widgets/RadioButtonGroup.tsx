import {useTheme} from '@react-navigation/native';
import React, {Component, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import AppTheme from '../../themes/app-theme';

export default function RadioButtonGroup(props: {
  items: Array<{
    label?: string;
    body?: JSX.Element;
  }>;
  initialValue?: number;
  onChangeValue?: (value: number) => void;
}) {
  const theme: AppTheme = useTheme() as AppTheme;
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
            elevation: 8,
            shadowColor: theme.app?.shadowColor,
            shadowOffset: {
              width: 1,
              height: 4,
            },
            shadowOpacity: 0.3,
            shadowRadius: 4.65,
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
              borderColor: '#363636',
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
                borderRadius: 7,
                backgroundColor: index === value ? '#363636' : '#fff',
              }}
            />
          </View>
          {item.body !== undefined ? (
            item.body
          ) : (
            <Text
              style={{
                color: '#000',
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
