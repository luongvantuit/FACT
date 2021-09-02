import { Theme, DarkTheme } from "@react-navigation/native";

const ThemeDark: Theme = {
    colors: {
        ...DarkTheme.colors
    },
    dark: DarkTheme.dark,
}

export default ThemeDark;