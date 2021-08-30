import {StyleSheet} from 'react-native';
import {colors} from '../values';

const boxItemBorderRadius: number = 6;
const boxItemHeight: number = 110;

const shawdowBox = {
  shadowColor: colors.black,
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  elevation: 8,
};

const box = {
  height: boxItemHeight,
  backgroundColor: colors.white,
  flexGrow: 1,
  borderRadius: boxItemBorderRadius,
};

export const styleDashboardScreen = StyleSheet.create({
  boxItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boxItemTopRight: {
    marginTop: 8,
    marginRight: 8,
    marginLeft: 4,
    marginBottom: 4,
    ...shawdowBox,
    ...box,
  },
  boxItemTopLeft: {
    marginTop: 8,
    marginRight: 4,
    marginLeft: 8,
    marginBottom: 4,
    ...shawdowBox,
    ...box,
  },
  boxItemBottomRight: {
    marginTop: 4,
    marginRight: 8,
    marginLeft: 4,
    marginBottom: 8,
    ...shawdowBox,
    ...box,
  },
  boxItemBottomLeft: {
    marginTop: 4,
    marginRight: 4,
    marginLeft: 8,
    marginBottom: 8,
    ...shawdowBox,
    ...box,
  },
});
