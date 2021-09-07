import React, {useState} from 'react';
import {ImageBackground, ScrollView, View} from 'react-native';
import {UndrawPayOnline} from '../../assets';
import ListCard from '../widgets/ListCards';
import ListServicesPayment from '../widgets/ListServicesPayment';

export default function DashboardScreen({navigation}: any) {
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={UndrawPayOnline}
        style={{
          height: 500,
        }}
        resizeMode={'contain'}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}></View>
      </ImageBackground>
      <ListCard />
      <ListServicesPayment />
    </ScrollView>
  );
}
