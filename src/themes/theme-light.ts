import {Theme, DefaultTheme} from '@react-navigation/native';
import {Platform} from 'react-native';
import Colors from '../assets/colors';
import AppTheme from './app-theme';

const ThemeLight: AppTheme = {
  colors: {
    ...DefaultTheme.colors,
    background: Colors.yellowDark,
    text: Colors.matteBlack,
    border: Colors.matteBlack,
    primary: Colors.yellowDark,
  },
  dark: DefaultTheme.dark,
  app: {
    textColor: Colors.matteBlack,
    textPrimaryColor: Colors.matteBlack,
    placeholderTextColor: Colors.yellowDark,
    backgroundTextInputColor: Colors.yellowLightest,
    backgroundButtonColor: '#363636',
    textButtonColor: Colors.yellowLightest,
    backgroundScreenColor: '#f2f2f2',
    textInputColor: Colors.matteBlack,
    shadowColor: Colors.matteBlack,
    borderColor: Colors.matteBlack,
    backgroundHeaderColor: Colors.yellowDark,
    labelBottomTabsColor: '#000',
    iconBottomTabsColor: '#000',
    labelBottomTabsFocusedColor: '#000',
    iconBottomTabsFocusedColor: '#000',
    iconHeaderColor: Colors.matteBlack,
    textOTPColor: Colors.matteBlack,
    backgroundOTPColor: Colors.white,
    backgroundButtonPrimaryColor: Colors.yellow,
  },
};

export default ThemeLight;
