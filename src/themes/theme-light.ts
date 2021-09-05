import {Theme, DefaultTheme} from '@react-navigation/native';
import Colors from '../assets/colors';
import AppTheme from './app-theme';

const ThemeLight: AppTheme = {
  colors: {
    ...DefaultTheme.colors,
    background: Colors.yellowDark,
  },
  dark: DefaultTheme.dark,
  app: {
    textColor: Colors.matteBlack,
    textPrimaryColor: '#707070',
    placeholderTextColor: '#A0A0A0',
    backgroundTextInputColor: '#D7D7D7',
    backgroundButtonColor: '#363636',
    textButtonColor: '#fff',
    backgroundScreenColor: '#f2f2f2',
    textInputColor: '#000',
    shadowColor: '#000',
    borderColor: '#D7D7D7',
    backgroundHeaderColor: Colors.yellowDark,
    labelBottomTabsColor: '#000',
    iconBottomTabsColor: '#000',
    labelBottomTabsFocusedColor: '#000',
    iconBottomTabsFocusedColor: '#000',
    iconHeaderColor: Colors.matteBlack,
  },
};

export default ThemeLight;
