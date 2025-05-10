import { CSSProperties } from "react";
import {
  ButtonDirection,
  ButtonSize,
} from "../styles/components/button/button-config";

const paddingMap: Record<ButtonSize, { base: number; iconExtra: number }> = {
  XS: { base: 12, iconExtra: 8 },
  S: { base: 16, iconExtra: 12 },
  M: { base: 16, iconExtra: 12 },
  L: { base: 24, iconExtra: 16 },
  XL: { base: 24, iconExtra: 20 },
};

const getDirectionalPadding = (
  base: number,
  iconExtra: number,
  hasIcon: boolean,
  dir: ButtonDirection
): CSSProperties => {
  const finalPad = hasIcon ? iconExtra : base;
  return {
    paddingLeft: dir === "rtl" ? `${base}px` : `${finalPad}px`,
    paddingRight: dir === "rtl" ? `${base}px` : `${finalPad}px`,
  };
};

export const getPaddingByIconAndType = (
  hasIcon: boolean,
  size: ButtonSize,
  direction: ButtonDirection
): CSSProperties => {
  const { base, iconExtra } = paddingMap[size];
  return getDirectionalPadding(base, iconExtra, hasIcon, direction);
};
