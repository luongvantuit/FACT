import {Theme, DarkTheme} from '@react-navigation/native';
import Colors from '../assets/colors';
const ThemeDark: Theme = {
  colors: {
    card: Colors.yellow,
    background: Colors.yellowDark,
    text: Colors.matteBlack,
    border: Colors.matteBlack,
    primary: Colors.yellowDark,
    notification: Colors.yellowLight,
  },
  dark: DarkTheme.dark,
};
export default ThemeDark;
