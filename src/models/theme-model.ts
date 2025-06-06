import { CSSProperties } from "react";
import THEME_TYPE from "../enums/theme-mode";
import {
    AppButtons,
    AppColors,
    AppInputs,
    AppRadius,
    AppSpacing,
    OrdinalKeys,
} from "../configs/theme";

interface AppThemeModel {
    mode: THEME_TYPE;
    color: {
    ordinalColors: Record<AppColors, Record<OrdinalKeys, string>>;
    solid: { white: string; black: string };
    gradients: { gradients: string };
    };
    button: Record<AppButtons, Partial<CSSProperties>>;
    input: Record<AppInputs, Partial<CSSProperties>>;
    spacing: Record<AppSpacing, string>;
    radius: Record<AppRadius, string>;
}

export default AppThemeModel;
