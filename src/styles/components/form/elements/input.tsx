/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "@emotion/styled";
import AppThemeModel from "../../../../models/theme-model";
import { CSSProperties } from "react";
import { formElementSize } from "../../../../models/components/from-element-size";

export const InputWrapper = styled.div({
  position: "relative",
  width: "100%",
  height: "max-content",

  "& input:focus + fieldset legend, & input:not(:placeholder-shown) + fieldset legend": {
    transform: "translateY(1px)",
    opacity: 1,
  },
});

export const InputUi = styled.input<any>(({ theme, size, isActive, labelVariant }) => ({
  boxSizing: "border-box",
  fontFamily: "app-font",
  width: "100%",
  outline: "none",
  height: `${(formElementSize as any)[size]}rem`,
  fontSize: size === "l" ? "0.875rem" : "0.75rem",
  fontWeight: 600,
  backgroundColor: "transparent",
  border: labelVariant === "outside" 
    ? `1px solid ${(theme as AppThemeModel)?.color?.ordinalColors?.neural_light[1000]}`
    : isActive ? "none" : `1px solid ${(theme as AppThemeModel)?.color?.ordinalColors?.neural_light[1000]}`,
  borderRadius: (theme as AppThemeModel)?.radius.radiusXs,
  position: 'relative',
  zIndex: 1,
  '&:focus + .outside-label': {
    transform: 'translateY(-3px)',
    top: '0',
    fontSize: '0.75rem',
  },

  ":focus": {
    border: labelVariant === "outside" 
      ? `1px solid ${(theme as AppThemeModel)?.color?.ordinalColors?.neural_light[1000]}`
      : "none",
    outline: "none",
  },
  ":focus-visible": {
    border: labelVariant === "outside" 
      ? `1px solid ${(theme as AppThemeModel)?.color?.ordinalColors?.neural_light[1000]}`
      : "none",
    outline: "none",
  },
  '&:focus ~ .outside-label': {
    transform: 'translateY(-20px)',
    color: (theme as AppThemeModel)?.color?.ordinalColors?.primary[1000],
  },
  '&:not(:placeholder-shown) ~ .outside-label': {
    transform: 'translateY(-3px)',
  },
}));

export const OutsideLabel = styled.label<any>(({ theme, hasError }) => ({
  boxSizing: 'border-box',
  width: 'max-content',
  height: 'max-content',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingInline: '0.25rem',
  backgroundColor: 'transparent',
  position: 'absolute',
  top: '50%',
  right: '0.75rem',
  transform: 'translateY(-50%)',
  transition: 'all 0.3s ease-out',
  fontSize: '0.75rem',
  fontWeight: 600,
  color: hasError 
    ? (theme as AppThemeModel)?.color?.ordinalColors?.danger[1000]
    : (theme as AppThemeModel)?.color?.ordinalColors?.neural_light[1000],
  zIndex: 2,
  pointerEvents: 'none',
}));

export const FieldsetAnimated = styled.fieldset<any>(({ theme, size }) => ({
  boxSizing: "border-box",
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  minHeight: `${(formElementSize as any)[size]}rem`,
  height: "100%",
  display: "block",
  margin: 0,
  border: `1px solid ${(theme as AppThemeModel)?.color?.ordinalColors?.neural_light[1000]}`,
  borderRadius: (theme as AppThemeModel)?.radius.radiusXs,
  pointerEvents: "none",
  zIndex: 0,
  transition: "all 0.3s ease",

  "& legend": {
    // all: "unset",
    top: "50%",
    left: "0.75rem",
    fontSize: "0.75rem",
    height: "auto",
    lineHeight: "0",
    whiteSpace: "nowrap",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    transform: size === "l" ? "translateY(2rem)" : "translateY(1.25rem)",
    opacity: 1,
  },
  

  "&.active legend": {
    transform: "translateY(1px)",
    opacity: 1,
  },
  "&.outside legend": {
  top: "-1rem",
  transform: "none",
  opacity: 1,
}
}));

export const LabelWrapper = styled.div({
  display: "none",
});

interface InsideIconsWrapperProps {
  dir: CSSProperties["direction"];
}

export const InsideIconsWrapper = styled.div<InsideIconsWrapperProps>(({ dir }) => ({
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
}));

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
