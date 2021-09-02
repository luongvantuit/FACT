import {Theme, DarkTheme} from '@react-navigation/native';
import AppTheme from './app-theme';
const ThemeDark: AppTheme = {
  colors: {...DarkTheme.colors},
  dark: true,
};
export default ThemeDark;
