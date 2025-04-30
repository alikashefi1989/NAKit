import THEME_MODE from "../../enums/theme-mode";
import AppThemeModel from "../../models/theme-model";
import buttonTheme from "./button-theme";
import darkColor from "./dark-color";
import inputTheme from "./input-theme";
import radiusTheme from "./radius-theme";
import spacingTheme from "./spacing-theme";

const darkTheme: AppThemeModel = {
  mode: THEME_MODE.DARK,
  color: darkColor,
  button: buttonTheme,
  input: inputTheme,
  spacing: spacingTheme,
  radius: radiusTheme,
};

export default darkTheme;
