import React from 'react'
import { View, Text, Dimensions, } from 'react-native'
import { RNCamera } from 'react-native-camera'

export default function eKYCIndentificationScreen() {
    return (
        <View style={{

        }}>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <RNCamera style={{
                    width: Dimensions.get('window').width * 3 / 4,
                    height: 100,
                }} captureAudio={false} />
            </View>
        </View>
    )
}
