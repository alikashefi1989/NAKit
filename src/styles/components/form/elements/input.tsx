/* eslint-disable @typescript-eslint/no-explicit-any */
import styled from "@emotion/styled";
import AppThemeModel from "../../../../models/theme-model";
import { CSSProperties } from "react";
import { formElementSize } from "../../../../models/components/from-element-size";

export const InputWrapper = styled.div({
  position: "relative",
  width: "100%",
  height: "max-content",
});

export const InputUi = styled.input<any>(({ theme, size, isActive }) => ({
  boxSizing: "border-box",
  fontFamily: "app-font",
  width: "100%",
  outline: "none",
  height: `${(formElementSize as any)[size]}rem`,
  fontSize: size === "l" ? "0.875rem" : "0.75rem",
  fontWeight: 600,
  backgroundColor: "transparent",
  border: isActive ? "none" : `1px solid ${(theme as AppThemeModel)?.color?.ordinalColors?.neural_light[1000]}`,
  borderRadius: (theme as AppThemeModel)?.radius.radiusXs,

  ":focus": {
    border: "none",
    outline: "none",
  },
  ":focus-visible": {
    border: "none",
    outline: "none",
  },
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
    all: "unset",
    top: "-0.6rem",
    left: "0.75rem",
    fontSize: "0.75rem",
    height: "auto",
    lineHeight: "0",
    whiteSpace: "nowrap",
    transition: "transform 0.3s ease, opacity 0.3s ease",
    transform: "translateY(0.75rem)",
    opacity: 0,
  },

  "&.active legend": {
    transform: "translateY(1px)",
    opacity: 1,
  },
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
