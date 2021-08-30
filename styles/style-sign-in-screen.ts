import {Dimensions, Platform, StyleSheet} from 'react-native';
import {colors} from '../values';

const fullBox = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

const marginHorizontal: number = 32;
const shadowBox = {
  elevation: 8,
  shadowColor: colors.black,
  shadowOffset: {
    width: 1,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
};

export const styleSignInScreen = StyleSheet.create({
  scrollWindow: {
    ...fullBox,
  },
  boxContainer: {
    ...fullBox,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    marginHorizontal: marginHorizontal,
    width: Dimensions.get('window').width - marginHorizontal * 2,
    backgroundColor: colors.blue1,
    fontWeight: 'bold',
    borderRadius: 32,
    paddingVertical: Platform.OS === 'android' ? 18 : 24,
    paddingHorizontal: 32,
    ...shadowBox,
  },
  flatButtonNextStepContainer: {
    margin: marginHorizontal / 2,
    width: Dimensions.get('window').width - marginHorizontal * 2,
    borderRadius: 32,
    paddingHorizontal: 32,
    backgroundColor: colors.blue6,
    ...shadowBox,
  },
  flatButtonNextStepText: {
    fontWeight: 'bold',
    paddingVertical: Platform.OS === 'android' ? 18 : 24,
    textAlign: 'center',
    color: colors.white,
  },
  boxCotainerCreateAccount: {
    display: 'flex',
    flexDirection: 'row',
    margin: 8,
  },
  textCreateAccount: {
    fontWeight: '900',
    color: colors.blue6,
  },
});
