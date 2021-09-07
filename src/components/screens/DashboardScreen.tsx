import React, {useState} from 'react';
import {ImageBackground, Platform, ScrollView, Text, View} from 'react-native';
import {UndrawPayOnline} from '../../assets';
import ListCard from '../widgets/ListCards';
import ListServicesPayment from '../widgets/ListServicesPayment';

export default function DashboardScreen({navigation}: any) {
  const [hidden, setHidden] = useState<boolean>(true);
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      alwaysBounceVertical={false}>
      <ImageBackground
        source={UndrawPayOnline}
        style={{
          height: 480,
        }}
        resizeMode={'contain'}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: 54,
          }}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}>
            <Text style={{
              fontWeight: '900',
              
            }}>FACT</Text>
          </View>
          <View></View>
        </View>
      </ImageBackground>
      <ListCard />
      <ListServicesPayment />
    </ScrollView>
  );
}
