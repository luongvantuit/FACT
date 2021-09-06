import { useTheme } from '@react-navigation/native'
import React from 'react'
import { View, Text, TextInput, Platform } from 'react-native'
import AppTheme from '../../themes/app-theme'
import shadowBox from './ShadowBox'

export default function TextInputRegister() {
    const theme: AppTheme = useTheme() as AppTheme;
    return (
        <TextInput
            placeholder={'Phone Number'}
            keyboardType={'numeric'}
            style={{
                marginHorizontal: 32,
                marginTop: 16,
                marginBottom: 12,
                paddingVertical: Platform.OS === 'android' ? 16 : 20,
                paddingHorizontal: 16,
                backgroundColor: theme.app?.backgroundTextInputColor,
                borderRadius: 8,
                fontWeight: '900',
                color: theme.app?.textInputColor,
                shadowColor: theme.app?.shadowColor,
                ...shadowBox
            }}
            placeholderTextColor={theme.app?.placeholderTextColor}
        />
    )
}
