import React, { useEffect } from 'react'
import { View, Text, Dimensions, Platform, } from 'react-native'
import { RNCamera } from 'react-native-camera'
import { check, RESULTS } from 'react-native-permissions'

export default function eKYCIndentificationScreen({ navigation }: any) {
    useEffect(() => {
        check(Platform.OS === 'android' ? 'android.permission.CAMERA' : 'ios.permission.CAMERA')
            .then(result => {
                if (result === RESULTS.DENIED)
                    navigation.goBack();
            })
    }, [])
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
