import {Theme, DarkTheme} from '@react-navigation/native';
import AppTheme from './app-theme';
const ThemeDark: AppTheme = {
  colors: {...DarkTheme.colors, background: '#101010'},
  dark: true,
  app: {
    textColor: '#fff',
    textPrimaryColor: '#f2f2f2',
    placeholderTextColor: '#A0A0A0',
    backgroundTextInputColor: '#D7D7D7',
    backgroundButtonColor: '#fff',
    textButtonColor: '#363636',
    backgroundScreenColor: '#707070',
    textInputColor: '#000',
    shadowColor: '#fff',
    borderColor: '#f2f2f2',
    backgroundHeaderColor: '#101010',
    labelBottomTabsColor: '#fff',
    iconBottomTabsColor: '#fff',
    labelBottomTabsFocusedColor: '#fff',
    iconBottomTabsFocusedColor: '#fff',
    iconHeaderColor: '#fff',
  },
};
export default ThemeDark;
