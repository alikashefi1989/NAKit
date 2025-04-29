import { FC } from "react";
import AppThemeModel from "../models/theme-model";
import { ThemeProvider } from "@emotion/react";

interface CustomThemeProviderProps {
    children: React.ReactNode
    theme?:AppThemeModel
}

const CustomThemeProvider: FC<CustomThemeProviderProps> = ({children, theme}) => {
    return(
        <ThemeProvider theme={theme?theme:{}}>
            {children}
        </ThemeProvider>
    )
}

export default CustomThemeProvider
