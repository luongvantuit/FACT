import {StyleSheet} from 'react-native';
import {colors} from '../values';

const boxItemBorderRadius: number = 6;
const boxItemHeight: number = 110;

export const styleDashboardScreen = StyleSheet.create({
  boxItemContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boxItemTopRight: {
    marginTop: 8,
    marginRight: 8,
    height: boxItemHeight,
    backgroundColor: colors.white,
    flexGrow: 1,
    marginLeft: 4,
    marginBottom: 4,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: boxItemBorderRadius,
  },
  boxItemTopLeft: {
    marginTop: 8,
    marginRight: 4,
    height: boxItemHeight,
    flexGrow: 1,
    marginLeft: 8,
    marginBottom: 4,
    backgroundColor: colors.white,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: boxItemBorderRadius,
  },
  boxItemBottomRight: {
    marginTop: 4,
    marginRight: 8,
    height: boxItemHeight,
    backgroundColor: colors.white,
    flexGrow: 1,
    marginLeft: 4,
    marginBottom: 8,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: boxItemBorderRadius,
  },
  boxItemBottomLeft: {
    marginTop: 4,
    marginRight: 4,
    height: boxItemHeight,
    backgroundColor: colors.white,
    flexGrow: 1,
    marginLeft: 8,
    marginBottom: 8,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    borderRadius: boxItemBorderRadius,
  },
});
