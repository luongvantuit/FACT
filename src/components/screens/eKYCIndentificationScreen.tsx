import React, {useEffect} from 'react';
import {View, Text, Dimensions, Platform, Pressable} from 'react-native';
import {check, RESULTS} from 'react-native-permissions';
import Colors from '../../assets/colors';
import EntypoIcons from '../fonts-icon/entypo-icons';
import {Svg, Rect, Polyline, Text as SVGText} from 'react-native-svg';
import {RNCamera} from 'react-native-camera';

export default function eKYCIndentificationScreen(props: any) {
  useEffect(() => {
    check(
      Platform.OS === 'android'
        ? 'android.permission.CAMERA'
        : 'ios.permission.CAMERA',
    ).then(result => {
      if (result === RESULTS.DENIED) props.navigation.goBack();
    });
  }, []);
  return (
    <View>
      <View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          paddingTop: Platform.OS === 'android' ? 0 : 54,
          display: 'flex',
          alignItems: 'flex-start',
          zIndex: 10,
        }}>
        <Pressable
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <View
            style={{
              marginVertical: 16,
              marginLeft: 25,
            }}>
            <EntypoIcons
              name="chevron-small-left"
              size={32}
              color={Colors.neutralLightest}
            />
          </View>
          <Text
            style={{
              fontWeight: '900',
              color: Colors.neutralLightest,
            }}>
            Back
          </Text>
        </Pressable>
      </View>
      <RNCamera
        style={{
          width: Dimensions.get('window').width,
          height: Dimensions.get('window').height,
        }}
        captureAudio={false}
        type={'back'}
        keepAudioSession={false}
      />
      <Pressable
        style={{
          backgroundColor: Colors.redDark,
          width: 60,
          height: 60,
          left: Dimensions.get('window').width / 2 - 30,
          right: Dimensions.get('window').width / 2 - 30,
          borderRadius: 40,
          position: 'absolute',
          bottom: 38,
          zIndex: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          props.navigation.navigate('ekyc-face');
        }}>
        <EntypoIcons name="camera" color={Colors.white} size={38} />
      </Pressable>
      <SVGFrame
        colorStroke={Colors.greenDark}
        x={16}
        strokeWidth={5}
        height={280}
      />
      <View
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          width: Dimensions.get('window').width,
          top: 130,
          zIndex: 10,
          justifyContent: 'center',
        }}>
        <Text
          style={{
            textAlign: 'center',
            color: Colors.greenDark,
            fontWeight: '900',
            fontSize: 16,
          }}>
          Front CCCD/CMND
        </Text>
      </View>
    </View>
  );
}

function SVGFrame(props: {
  width?: number;
  height?: number;
  colorStroke?: string;
  strokeWidth?: number;
  x?: number;
  y?: number;
}): JSX.Element {
  const colorStroke: string = props.colorStroke || Colors.greenDark;
  const height: number = props.height || 240;
  const x = props.x || 16;
  const y = props.y || 160;
  const width: number = props.width || Dimensions.get('window').width - 2 * x;
  const weight: number = 24;
  const strokeWidth: number = props.strokeWidth || 3;
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        top: 0,
        zIndex: 5,
      }}>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          zIndex: 4,
        }}>
        <Svg
          width={`${Dimensions.get('window').width}`}
          height={`${Dimensions.get('window').height}`}>
          <Polyline
            points={`${x + weight},${y} ${x},${y} ${x},${y + weight}`}
            stroke={colorStroke}
            strokeWidth={strokeWidth}
          />
          <Polyline
            points={`${x + width - weight},${y} ${x + width},${y} ${
              x + width
            },${y + weight}`}
            stroke={colorStroke}
            strokeWidth={strokeWidth}
          />
          <Polyline
            points={`${x + weight},${y + height} ${x},${y + height} ${x},${
              y + height - weight
            }`}
            stroke={colorStroke}
            strokeWidth={strokeWidth}
          />
          <Polyline
            points={`${x + width - weight},${y + height} ${x + width},${
              y + height
            } ${x + width},${y + height - weight}`}
            stroke={colorStroke}
            strokeWidth={strokeWidth}
          />
        </Svg>
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          zIndex: 3,
        }}>
        <RectInSideFrame {...props} />
      </View>
    </View>
  );
}

function RectInSideFrame(props: {
  width?: number;
  height?: number;
  colorStroke?: string;
  strokeWidth?: number;
  x?: number;
  y?: number;
}): JSX.Element {
  const colorStroke: string = props.colorStroke || Colors.greenDark;
  const height: number = props.height || 240;
  const x = props.x || 16;
  const y = props.y || 160;
  const width: number = props.width || Dimensions.get('window').width - 2 * x;
  const weight: number = 24;
  const strokeWidth: number = props.strokeWidth || 3;
  return (
    <Svg>
      <Rect
        x={0}
        y={0}
        width={Dimensions.get('window').width}
        height={y}
        fill={'#000000AA'}
      />
      <Rect x={0} y={y} width={x} height={height} fill={'#000000AA'} />
      <Rect
        x={x + width}
        y={y}
        width={Dimensions.get('window').width - (x + width)}
        height={height}
        fill={'#000000AA'}
      />
      <Rect
        x={0}
        y={y + height}
        width={Dimensions.get('window').width}
        height={Dimensions.get('window').height}
        fill={'#000000AA'}
      />
    </Svg>
  );
}
