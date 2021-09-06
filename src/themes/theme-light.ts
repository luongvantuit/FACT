import {Theme, DefaultTheme} from '@react-navigation/native';
import Colors from '../assets/colors';

const ThemeLight: Theme = {
  colors: {
    card: Colors.yellow,
    background: Colors.yellowDark,
    text: Colors.matteBlack,
    border: Colors.matteBlack,
    primary: Colors.yellowDark,
    notification: Colors.yellowLight,
  },
  dark: DefaultTheme.dark,
};

export default ThemeLight;
