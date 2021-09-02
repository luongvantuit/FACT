import { Theme, DefaultTheme } from "@react-navigation/native";
import AppTheme from "./app-theme";

const ThemeLight: AppTheme = {
    colors: {
        ...DefaultTheme.colors
    },
    dark: DefaultTheme.dark,
}

export default ThemeLight;