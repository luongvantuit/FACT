import { Theme } from "@react-navigation/native";
interface AppTheme extends Theme {
    app?: {
        textColor?: string,

    }
}

export default AppTheme;