/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSProperties } from "react";
import styled from "@emotion/styled";
import AppThemeModel from "../../../../models/theme-model";
import FormElementSize, {
  formElementSize,
} from "../../../../models/components/from-element-size";

export const TextFieldWrapper = styled.div({
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

export interface TextFieldUiProps {
  size: FormElementSize;
  error: boolean;
  disabled?: boolean;
  borderHide?: boolean;
  hasIcon?: boolean;
  hasResetter: boolean;
  dir?: CSSProperties["direction"];
  minHeight: CSSProperties["minHeight"];
  maxHeight: CSSProperties["maxHeight"];
}

export const TextFieldUi = styled.textarea<any>(
  ({
    theme,
    size,
    error,
    disabled,
    borderHide,
    hasIcon,
    hasResetter,
    dir,
    minHeight,
    maxHeight,
  }) => {
    return {
      boxSizing: "border-box",
      fontFamily: "app-font",
      width: "100%",
      minWidth: "100%",
      maxWidth: "100%",
      outline: "none",
      direction: dir ? dir : undefined,
      height: `${(formElementSize as any)[size]}rem`,
      minHeight,
      maxHeight,
      fontSize: size === "l" ? "0.875rem" : "0.75rem",
      fontWeight: 600,
      backgroundColor: "transparent",
      borderWidth: "0.0625rem",
      borderStyle: "solid",
      borderColor: getTextareaUiBorderColor(
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
      paddingInline: (theme as AppThemeModel)?.spacing.spacingS,
      paddingRight: getTextareaUiPaddingRight(
        dir ? dir : "rtl",
        hasIcon ? true : false,
        hasResetter ? true : false,
        theme as AppThemeModel
      ),
      paddingLeft: getTextareaUiPaddingLeft(
        dir ? dir : "rtl",
        hasIcon ? true : false,
        hasResetter ? true : false,
        theme as AppThemeModel
      ),
      ":focus": {
        borderColor: getTextareaUiBorderColor(
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
        borderColor: getTextareaUiBorderColor(
          error ? true : false,
          disabled ? true : false,
          borderHide ? true : false,
          theme as AppThemeModel
        ),
      },
      ":focus-visible": {
        borderColor: getTextareaUiBorderColor(
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
      "&::-webkit-scrollbar": {
        width: "0.2rem",
        backgroundColor: "transparent",
        borderRadius: "0.5rem",
        paddingRight: "10rem",
      },
      "&::-webkit-scrollbar-track": {
        backgroundColor: "transparent",
        borderRadius: "0.5rem",
      },
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "transparent",
        borderRadius: "0.5rem",
      },
      ":hover": {
        "&::-webkit-scrollbar": {
          width: "0.2rem",
          backgroundColor: "transparent",
          height: "95%",
          borderRadius: "0.5rem",
        },
        "&::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
          height: "95%",
          borderRadius: "0.5rem",
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: "grey",
          borderRadius: "0.5rem",
        },
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
  top: "0.75rem",
  right: "0.75rem",
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
      top: "0.75rem",
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

const getTextareaUiBorderColor = (
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

const getTextareaUiPaddingRight = (
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

const getTextareaUiPaddingLeft = (
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
