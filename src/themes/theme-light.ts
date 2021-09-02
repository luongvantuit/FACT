import { Theme, DefaultTheme } from "@react-navigation/native";

const ThemeLight: Theme = {
    colors: {
        ...DefaultTheme.colors
    },
    dark: DefaultTheme.dark,
}

export default ThemeLight;