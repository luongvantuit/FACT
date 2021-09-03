import {Theme, DefaultTheme} from '@react-navigation/native';
import AppTheme from './app-theme';

const ThemeLight: AppTheme = {
  colors: {
    ...DefaultTheme.colors,
    background: '#f2f2f2',
  },
  dark: DefaultTheme.dark,
  app: {
    textColor: '#000',
    textPrimaryColor: '#707070',
    placeholderTextColor: '#A0A0A0',
    backgroundTextInputColor: '#D7D7D7',
    backgroundButtonColor: '#363636',
    textButtonColor: '#fff',
    backgroundScreenColor: '#f2f2f2',
    textInputColor: '#000',
    shadowColor: '#000',
    borderColor: '#D7D7D7',
    backgroundHeaderColor: '#f2f2f2',
    labelBottomTabsColor: '#000',
    iconBottomTabsColor: '#000',
    labelBottomTabsFocusedColor: '#000',
    iconBottomTabsFocusedColor: '#000',
    iconHeaderColor: '#000',
  },
};

export default ThemeLight;
