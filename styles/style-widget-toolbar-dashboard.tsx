import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../values';

export const styleWidgetToolbarDashboad = StyleSheet.create({
  boxToolbar: {
    paddingTop: Platform.OS === 'android' ? 0 : 54,
    display: 'flex',
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
    flexDirection: 'row',
    elevation: 6,
    shadowColor: colors.black1,
    shadowOffset: {
      width: 1,
      height: 4,
    },
    backgroundColor: colors.white,
    shadowOpacity: 0.3,
    shadowRadius: 2.22,
    zIndex: 10,
  },
});
