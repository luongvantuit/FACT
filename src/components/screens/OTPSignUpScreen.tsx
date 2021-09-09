import React from 'react';
import OTP from '../widgets/OTP';

export default function OTPSignUpScreen({navigation}: any) {
  return (
    <OTP
      navigation={navigation}
      onComplete={() => {
        navigation.navigate('accept-valid-citizenship-id-card');
      }}
    />
  );
}
