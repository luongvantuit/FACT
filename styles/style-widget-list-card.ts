import {Dimensions, StyleSheet} from 'react-native';
import {colors} from '../values';
export const styleWidgetListCard = StyleSheet.create({
  boxContainer: {
    width: Dimensions.get('window').width - 92,
    margin: 16,
    backgroundColor: colors.white,
    height: 150,
    borderRadius: 8,
    elevation: 8,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  boxContainerInner: {
    margin: 16,
    display: 'flex',
    flexDirection: 'row',
  },
  textNameBank: {
    fontWeight: 'bold',
    color: colors.black,
  },
  textName: {
    color: colors.black,
    fontWeight: 'bold',
  },
  textNumberCard: {
    marginTop: 28,
    color: colors.black,
    fontWeight: 'bold',
  },
  boxContainerExpiryEnd: {
    marginVertical: 8,
    display: 'flex',
    flexDirection: 'row',
  },
  textExpiryEnd: {
    marginLeft: 16,
    color: colors.black,
    fontWeight: 'bold',
  },
});
