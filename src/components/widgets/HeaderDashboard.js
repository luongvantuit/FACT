import React from 'react'
import { View, Text, Platform, StatusBar, Image, Pressable } from 'react-native'
import styled from 'styled-components'
import { leakImg } from '../../assets'
import FlatButton from './FlatButton'

export default function HeaderDashboard({
    navigation
}) {
    return (
        <View style={{
            paddingTop: Platform.OS === 'android' ? 0 : 54,
            backgroundColor: 'white'
            , display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            // borderBottomLeftRadius: 8,
            // borderBottomRightRadius: 8,
            borderBottomColor: '#D7D7D7'
            , borderBottomWidth: 0.5
        }}>
            <View style={{
                display: 'flex'
                , flexDirection: 'column'
                , margin: 16,
            }}>
                <Text style={{ fontSize: 14, fontWeight: '600' }}>Hi, TU 👋</Text>
                <Text style={{
                    fontSize: 18,
                    fontWeight: '900'
                }}>Welcome back!</Text>
            </View>
            <Pressable onPress={
                () => {
                    navigation.navigate('profile')
                }
            }>
                <Avatar source={leakImg} />
            </Pressable>
        </View>
    )
}

const Avatar = styled.Image`
width: 40px;
height: 40px;
border-radius: 8px;
margin: 16px;
`