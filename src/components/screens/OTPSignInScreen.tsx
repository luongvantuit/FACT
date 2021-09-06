import React from 'react';
import OTP from '../widgets/OTP';


export default function OTPSignInScreen({ navigation }: any) {
  return (
    <OTP navigation={navigation} onComplete={() => {
      navigation.navigate('app-user');
    }} />
  )
}
