import { CSSProperties } from "react";
import AppThemeModel from "../../../models/theme-model";

export type ButtonSize = "XS" | "S" | "M" | "L" | "XL";
export type ButtonType = "PRIMARY" | "SECONDARY" | "TEXT";
export type ButtonDirection = "rtl" | "ltr";
export type PalLetType =
  | "1-Primary"
  | "2-Info"
  | "3-Danger"
  | "4-Green"
  | "5-Accent"
  | "6-Secondary"
  | "7-Olive"
  | "8-Neutral-Light"
  | "9-Neutral-Dark"
  | "10-Sunset"
  | "11-Warning"
  | "12-Seccess"
  | "13-Velvet"
export type StatusType = "ENABLED" | "HOVERED" | "PRESSED" | "FOCUSED";

export const buttonSizeConfig: Record<ButtonSize, CSSProperties> = {
  XS: {
    height: "1.75rem",
    fontSize: "0.625rem",
    fontWeight: 600,
    paddingBlock: "0.25rem",
  },
  S: {
    height: "2rem",
    fontSize: "0.75rem",
    fontWeight: 700,
    paddingBlock: "0.25rem",
  },
  M: {
    height: "2.5rem",
    fontSize: "1rem",
    fontWeight: 500,
    paddingBlock: "0.5rem",
  },
  L: {
    height: "2.75rem",
    fontSize: "1rem",
    fontWeight: 600,
    paddingBlock: "0.75rem",
  },
  XL: {
    height: "3.2rem",
    fontSize: "1rem",
    fontWeight: 600,
    paddingBlock: "0.25rem",
  },
};

export const palletMap: Record<PalLetType, keyof AppThemeModel["color"]["ordinalColors"]> = {
  "1-Primary": "primary",
  "2-Info": "info",
  "3-Danger": "danger",
  "4-Green": "green",
  "5-Accent": "accent",
  "6-Secondary": "secondary",
  "7-Olive": "olive",
  "8-Neutral-Light": "neural_light",
  "9-Neutral-Dark": "neural_dark",
  "10-Sunset": "sunset",
  "11-Warning": "warning",
  "12-Seccess": "success",
  "13-Velvet": "velvet",
};

const shadeMap: Record<ButtonType, Record<StatusType, number | "white">> = {
  PRIMARY: { ENABLED: 300, HOVERED: 400, PRESSED: 200, FOCUSED: 400 },
  SECONDARY: { ENABLED: 0, HOVERED: 0, PRESSED: 0, FOCUSED: 0 },
  TEXT: { ENABLED: 0, HOVERED: 0, PRESSED: 0, FOCUSED: 0 },
};

const bgShadeMap: Record<ButtonType, Record<StatusType, number | "white">> = {
  PRIMARY: { ENABLED: 300, HOVERED: 400, PRESSED: 200, FOCUSED: 400 },
  SECONDARY: { ENABLED: "white", HOVERED: 1000, PRESSED: 800, FOCUSED: 1000 },
  TEXT: { ENABLED: "white", HOVERED: 1000, PRESSED: 800, FOCUSED: 1000 },
};

export const getButtonStyleByType = (
  type: ButtonType,
  pallet: PalLetType,
  status: StatusType,
  disabled: boolean,
  theme?: AppThemeModel
): CSSProperties => {
  if (disabled) {
    return {
      borderColor: "transparent",
      backgroundColor: "transparent",
      color: theme?.color?.ordinalColors?.neural_light[400],
      cursor: "not-allowed",
    };
  }

  const colorGroupKey = palletMap[pallet];
  const colorSet = theme?.color?.ordinalColors?.[colorGroupKey];
  const white = theme?.color?.solid?.white;

  const getColor = (value: number | "white") =>
    value === "white" ? white : colorSet?.[value as keyof typeof colorSet];

  const bgColor = getColor(bgShadeMap[type][status]);
  const textColor = getColor(shadeMap[type][status]);

  switch (type) {
    case "PRIMARY":
      return {
        backgroundColor: bgColor,
        color: white,
        border: "none",
        cursor: "pointer",
      };
    case "SECONDARY":
      return {
        backgroundColor: bgColor,
        color: textColor,
        border: `${status === "FOCUSED" ? "2px" : "1px"} solid ${textColor}`,
        cursor: "pointer",
      };
    case "TEXT":
      return {
        backgroundColor: bgColor,
        color: textColor,
        border: "none",
        borderRadius: "1.5rem",
        cursor: "pointer",
      };
    default:
      return {};
  }
};
