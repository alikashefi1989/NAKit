import { FC } from "react";
import AppThemeModel from "../models/theme-model";
import { ThemeProvider, ThemeProviderProps } from "@emotion/react";

interface CustomThemeProviderProps {
    children: React.ReactNode
    theme?:AppThemeModel
    AppThemeProvider: (props: ThemeProviderProps) => React.JSX.Element
}

const NakThemeProvider: FC<CustomThemeProviderProps> = ({children, theme, AppThemeProvider}) => {
    return(
        <AppThemeProvider theme={theme?theme:{}}>
            <ThemeProvider theme={theme?theme:{}}>
                {children}
            </ThemeProvider>
        </AppThemeProvider>
    )
}

export default NakThemeProvider
