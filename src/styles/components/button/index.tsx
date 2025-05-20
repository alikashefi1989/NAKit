import { CSSProperties } from "react";
import styled from "@emotion/styled";
import { CSSObject } from "@emotion/react";
import AppThemeModel from "../../../models/theme-model";
import {
  ButtonType,
  ButtonSize,
  PalLetType,
  getButtonStyleByType,
  buttonSizeConfig,
  palletMap,
  ButtonDirection,
} from "./button-config";
import { getPaddingByIconAndType } from "../../../utils/padding-utils";
import { getDocumentDirection } from "../../../utils/direction-helper";

export interface ButtonWrapperProps {
  size: ButtonSize;
  type: ButtonType;
  disabled: boolean;
  width?: CSSProperties["width"];
  hasIcon: boolean;
  style?: CSSProperties;
  pallet: PalLetType;
  iconPosition?: 'start' | 'center' | 'end';
  direction?: ButtonDirection;
}

const ButtonWrapper = styled.div<
  ButtonWrapperProps & { theme?: AppThemeModel }
>(
  ({
    theme,
    width,
    size,
    type,
    hasIcon,
    disabled,
    style,
    pallet,
    direction = getDocumentDirection(),
  }): CSSObject => {
    const colorKey = palletMap[pallet];
    const colorSet = theme?.color?.ordinalColors?.[colorKey];
    const white = theme?.color?.solid?.white;

    const baseStyle: CSSProperties = (() => {
      if (disabled) {
        return {
          borderColor:
            type === "SECONDARY"
              ? theme?.color?.ordinalColors?.neural_light[800]
              : "transparent",
          backgroundColor:
            type === "PRIMARY"
              ? theme?.color?.ordinalColors?.neural_light[300]
              : "transparent",
          color: theme?.color?.ordinalColors?.neural_light[800],
          cursor: "not-allowed",
        };
      }
      if (type === "PRIMARY") {
        return {
          backgroundColor: colorSet?.[300],
          color: white,
          border: "none",
          cursor: "pointer",
        };
      }
      if (type === "SECONDARY") {
        return {
          backgroundColor: white,
          color: colorSet?.[0],
          border: `1px solid ${colorSet?.[0]}`,
          cursor: "pointer",
        };
      }
      if (type === "TEXT") {
        return {
          backgroundColor: white,
          color: colorSet?.[0],
          border: "none",
          borderRadius: "1.5rem",
          cursor: "pointer",
        };
      }
      return {};
    })();

    return {
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: theme?.spacing?.spacingXs,
      borderWidth: "0.0625rem",
      borderStyle: "solid",
      borderRadius: theme?.spacing?.spacingXs,
      direction,
      fontFamily: "app-font",
      minWidth: "max-content",
      ...buttonSizeConfig[size],
      ...getPaddingByIconAndType(hasIcon, size, direction),
      ...baseStyle,
      ...style,
      width,
      ...(disabled
        ? {}
        : {
            ":hover": getButtonStyleByType(type,pallet,"HOVERED",false,theme) as CSSObject,
            ":focus": getButtonStyleByType(type,pallet,"FOCUSED",false,theme) as CSSObject,
            ":active": getButtonStyleByType(type,pallet,"PRESSED",false,theme) as CSSObject,
          }),
    };
  }
);

export default ButtonWrapper;

export const ButtonTitle = styled.span<Pick<ButtonWrapperProps, "size">>(
  ({ size }) => {
    return {
      boxSizing: "border-box",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "max-content",
      height: "max-content",
      textTransform: "capitalize",
      fontSize: buttonSizeConfig[size].fontSize,
      fontWeight: buttonSizeConfig[size].fontWeight,
      lineHeight: buttonSizeConfig[size].lineHeight,
    };
  }
);
