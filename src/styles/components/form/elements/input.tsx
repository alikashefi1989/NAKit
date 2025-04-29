/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties } from "react";
import styled from "@emotion/styled";
import AppThemeModel from "../../../../models/theme-model";
import FormElementSize, {
  formElementSize,
} from "../../../../models/components/from-element-size";

export const InputWrapper = styled.div({
  boxSizing: "border-box",
  width: "100%",
  height: "max-content",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",
  "> input[type=number]": {
    MozAppearance: "textfield",
    "::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "::-webkit-outer-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
  },
});

export interface InputUiProps {
  size: FormElementSize;
  error: boolean;
  disabled?: boolean;
  borderHide?: boolean;
  hasIcon?: boolean;
  hasResetter: boolean;
  dir?: CSSProperties["direction"];
}

export const InputUi = styled.input<any>(
  ({ theme, size, error, disabled, borderHide, hasIcon, hasResetter, dir }) => {
    return {
      boxSizing: "border-box",
      fontFamily: "app-font",
      width: "100%",
      outline: "none",
      direction: dir ? dir : undefined,
      height: `${(formElementSize as any)[size]}rem`,
      fontSize: size === "l" ? "0.875rem" : "0.75rem",
      fontWeight: 600,
      backgroundColor: "transparent",
      borderWidth: "0.0625rem",
      borderStyle: "solid",
      borderColor: getInputUiBorderColor(
        error ? true : false,
        disabled ? true : false,
        borderHide ? true : false,
        theme as AppThemeModel
      ),
      borderRadius: (theme as AppThemeModel)?.radius.radiusXs,
      color: disabled
        ? (theme as AppThemeModel)?.color?.ordinalColors?.neural_light[500]
        : (theme as AppThemeModel)?.color?.ordinalColors?.neural_dark[400],
      paddingBlock:
        size === "l"
          ? (theme as AppThemeModel)?.spacing?.spacingS
          : (theme as AppThemeModel)?.spacing?.spacingXs,
      paddingInline: (theme as AppThemeModel)?.spacing?.spacingS,
      paddingRight: getInputUiPaddingRight(
        dir ? dir : "rtl",
        hasIcon ? true : false,
        hasResetter ? true : false,
        theme as AppThemeModel
      ),
      paddingLeft: getInputUiPaddingLeft(
        dir ? dir : "rtl",
        hasIcon ? true : false,
        hasResetter ? true : false,
        theme as AppThemeModel
      ),
      ":focus": {
        borderColor: getInputUiBorderColor(
          error ? true : false,
          disabled ? true : false,
          borderHide ? true : false,
          theme as AppThemeModel
        ),
        "& + .label-wrapper": {
          top: size === "l" ? "-0.625rem" : "-0.5rem",
          right: "0.75rem",
          transform: "none",
          backgroundColor: (theme as AppThemeModel)?.color?.solid?.white,
        },
      },
      ":focus-within": {
        borderColor: getInputUiBorderColor(
          error ? true : false,
          disabled ? true : false,
          borderHide ? true : false,
          theme as AppThemeModel
        ),
      },
      ":focus-visible": {
        borderColor: getInputUiBorderColor(
          error ? true : false,
          disabled ? true : false,
          borderHide ? true : false,
          theme as AppThemeModel
        ),
      },
      ":not(:placeholder-shown)": {
        "& + .label-wrapper": {
          top: size === "l" ? "-0.625rem" : "-0.5rem",
          right: "0.75rem",
          transform: "none",
          backgroundColor: (theme as AppThemeModel)?.color?.solid?.white,
        },
      },
      ":disabled": {
        backgroundColor: "transparent",
        color: (theme as AppThemeModel)?.color?.ordinalColors
          ?.neural_light[500],
      },
    };
  }
);

export const LabelWrapper = styled.div({
  boxSizing: "border-box",
  width: "max-content",
  height: "max-content",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  paddingInline: "0.25rem",
  backgroundColor: "transparent",
  position: "absolute",
  top: "50%",
  right: "0.75rem",
  transform: "translateY(-50%)",
  transition: "all 0.3s ease-out",
});

interface InsideIconsWrapperProps {
  dir: CSSProperties["direction"];
}

export const InsideIconsWrapper = styled.div<InsideIconsWrapperProps>(
  ({ dir }) => {
    return {
      boxSizing: "border-box",
      width: "max-content",
      height: "max-content",
      display: "inline-flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "0.5rem",
      paddingRight: dir === "rtl" ? "0.5rem" : undefined,
      paddingLeft: dir === "ltr" ? "0.5rem" : undefined,
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      left: dir === "rtl" ? "0.75rem" : undefined,
      right: dir === "ltr" ? "0.75rem" : undefined,
    };
  }
);

export const CharacterCounterCmpWrapper = styled.div({
  boxSizing: "border-box",
  width: "max-content",
  height: "max-content",
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  left: "0rem",
  top: "calc(100% + 0.125rem)",
});

const getInputUiBorderColor = (
  error: boolean,
  disabled: boolean,
  borderHide: boolean,
  theme?: AppThemeModel
): string | undefined => {
  if (disabled) return theme?.color?.ordinalColors?.neural_light[200];
  if (error) return theme?.color?.ordinalColors?.danger[500];
  if (borderHide) return "transparent";
  return theme?.color?.ordinalColors?.neural_light[1000];
};

const getInputUiPaddingRight = (
  dir: CSSProperties["direction"],
  hasIcon: boolean,
  hasResetter: boolean,
  theme?: AppThemeModel
): string | undefined => {
  if (dir === "rtl") return theme?.spacing.spacingS;
  if (hasIcon && hasResetter) return "3.75rem";
  if (hasIcon || hasResetter) return "2.25rem";
  return theme?.spacing.spacingS;
};

const getInputUiPaddingLeft = (
  dir: CSSProperties["direction"],
  hasIcon: boolean,
  hasResetter: boolean,
  theme?: AppThemeModel
): string | undefined => {
  if (dir === "ltr") return theme?.spacing.spacingS;
  if (hasIcon && hasResetter) return "3.75rem";
  if (hasIcon || hasResetter) return "2.25rem";
  return theme?.spacing.spacingS;
};
