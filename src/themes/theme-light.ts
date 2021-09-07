import {Theme, DefaultTheme} from '@react-navigation/native';
import Colors from '../assets/colors';

const ThemeLight: Theme = {
  colors: {
    card: Colors.yellowDark,
    background: Colors.yellowDark,
    text: Colors.blue,
    border: Colors.blue,
    primary: Colors.yellowDark,
    notification: Colors.yellowLight,
  },
  dark: DefaultTheme.dark,
};

export default ThemeLight;
