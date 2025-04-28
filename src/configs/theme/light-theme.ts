import THEME_MODE from "../../enums/theme-mode";
import AppThemeModel from "../../models/theme-model";
import buttonTheme from "./button-theme";
import inputTheme from "./input-theme";
import lightColor from "./light-color";
import radiusTheme from "./radius-theme";
import spacingTheme from "./spacing-theme";

const lightTheme: AppThemeModel = {
  mode: THEME_MODE.LIGHT,
  color: lightColor,
  button: buttonTheme,
  input: inputTheme,
  spacing: spacingTheme,
  radius: radiusTheme,
};

export default lightTheme;
