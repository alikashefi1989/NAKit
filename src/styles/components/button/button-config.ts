import { CSSProperties } from "react";
import AppThemeModel from "../../../models/theme-model";
import StoreModel from "../../../models/store-model";

export type ButtonSize = "XS" | "S" | "M" | "L" | "XL";
export type ButtonType =
  | "PRIMARY"
  | "SECONDARY"
  | "TEXT"
export type ButtonDirection = "rtl" | "ltr";
export type PalLetType = '1-Primary' | '2-Info' | '3-Danger' | '4-Green' | '5-Accent' | '6-Secondary' | '7-Olive'
export type StatusType = 'ENABLED' | 'HOVERED' | 'PRESSED' | 'FOCUSED'

const buttonSizeConfig: Record<ButtonSize, CSSProperties> = {
  XS: {
    height: "1.75rem",
    fontSize: "0.625rem",
    fontWeight: 600,
  },
  S: {
    height: "2rem",
    fontSize: "0.75rem",
    fontWeight: 700,
  },
  M: {
    height: "2.5rem",
    fontSize: "1rem",
    fontWeight: 500,
    // lineHeight: '1.5rem'
  },
  L: {
    height: "2.75rem",
    fontSize: "1rem",
    fontWeight: 600,
  },
  XL: {
    height: "3.2rem",
    fontSize: "1rem",
    fontWeight: 600,
  },
};

export default buttonSizeConfig;


export const getButtonStyleByType = (
  type: ButtonType,
  pallet: PalLetType,
  status: StatusType,
  disabled: boolean,
  theme?: AppThemeModel
): CSSProperties => {
  const palletMap: Record<PalLetType, keyof AppThemeModel["color"]["ordinalColors"]> = {
    '1-Primary': 'primary',
    '2-Info': 'info',
    '3-Danger': 'danger',
    '4-Green': 'green',
    '5-Accent': 'accent',
    '6-Secondary': 'secondary',
    '7-Olive': 'olive',
  };

  const primaryShadeMap: Record<StatusType, number> = {
    ENABLED: 300,
    HOVERED: 400,
    PRESSED: 200,
    FOCUSED: 400,
  };

  const secondaryColorShadeMap: Record<StatusType, number> = {
    ENABLED: 0,
    HOVERED: 0,
    PRESSED: 0,
    FOCUSED: 0,
  };

  const secondaryAndTextBgShadeMap: Record<StatusType, number | 'white'> = {
    ENABLED: 'white',
    HOVERED: 1000,
    PRESSED: 800,
    FOCUSED: 1000,
  };

  const textColorShadeMap: Record<StatusType, number> = {
    ENABLED: 0,
    HOVERED: 0,
    PRESSED: 0,
    FOCUSED: 0,
  };

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

  if (!colorSet) {
    console.warn(`Invalid color group for pallet ${pallet}`);
    return {};
  }

  const getColor = (value: number | 'white') =>
    value === 'white'
      ? theme?.color?.solid?.white
      : colorSet[value as keyof typeof colorSet];

  switch (type) {
    case "PRIMARY": {
      const shade = primaryShadeMap[status];
      return {
        backgroundColor: getColor(shade),
        color: theme?.color?.solid?.white,
        border: "none",
        cursor: "pointer",
      };
    }

    case "SECONDARY": {
      const colorShade = secondaryColorShadeMap[status];
      const bgShade = secondaryAndTextBgShadeMap[status];
      return {
        backgroundColor: getColor(bgShade),
        color: getColor(colorShade),
        border: `${status === 'FOCUSED' ? '2px' : '1px'} solid ${getColor(colorShade)}`,
        cursor: "pointer",
      };
    }

    case "TEXT": {
      const textShade = textColorShadeMap[status];
      const bgShade = secondaryAndTextBgShadeMap[status];
      return {
        backgroundColor: getColor(bgShade),
        color: getColor(textShade),
        border: "none",
        borderRadius: "1.5rem",
        cursor: "pointer",
      };
    }

    default:
      return {};
  }
};

export const getPaddingByIconAndType = (
  hasIcon: boolean,
  size: keyof typeof buttonSizeConfig,
  direction: StoreModel["language"]["dir"]
): CSSProperties => {
  switch (size) {
    case "XS":
      if (hasIcon)
        return {
          paddingInline: "0.75rem",
          paddingBlock: "0.25rem",
          paddingLeft: direction === "rtl" ? "0.5rem" : "0.75rem",
          paddingRight: direction === "rtl" ? "0.75rem" : "0.5rem",
        };
      return {
        paddingBlock: "0.25rem",
        paddingInline: "0.75rem",
      };
    case "S":
      if (hasIcon)
        return {
          paddingBlock: "0.625rem",
          paddingLeft: direction === "rtl" ? "0.75rem" : "1rem",
          paddingRight: direction === "rtl" ? "1rem" : "0.75rem",
        };
      return {
        paddingBlock: "0.375rem",
        paddingInline: "1rem",
      };
    case "M":
      if (hasIcon)
        return {
          paddingBlock: "0.5rem",
          paddingLeft: direction === "rtl" ? "1.5rem" : "1rem",
          paddingRight: direction === "rtl" ? "1rem" : "1.5rem",
        };
      return {
        paddingBlock: "0.5rem",
        paddingInline: "1.5rem",
      };
    case "L":
      if (hasIcon)
        return {
          paddingBlock: "0.75rem",
          paddingLeft: direction === "rtl" ? "1.25rem" : "1.5rem",
          paddingRight: direction === "rtl" ? "1.5rem" : "1.25rem",
        };
      return {
        paddingBlock: "0.5rem",
        paddingInline: "1.5rem",
      };
    case "XL":
      if (hasIcon)
        return {
          paddingBlock: "0.8125rem",
          paddingLeft: direction === "rtl" ? "1.25rem" : "1.5rem",
          paddingRight: direction === "rtl" ? "1.5rem" : "1.25rem",
        };
      return {
        paddingBlock: "0.5rem",
        paddingInline: "1.5rem",
      };
    default:
      return {};
  }
};
