import { CSSProperties } from "react";
import { AdditionalStyles } from "./type";

export const additionalWrapperStyles = (rest: AdditionalStyles): CSSProperties => {
  const {
    color,
    fontSize,
    fontWeight,
    fontStyle,
    fontFamily,
    textDecoration,
    textTransform,
    textAlign,
    lineHeight,
    letterSpacing,
    wordSpacing,
    whiteSpace,
    backgroundColor,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderColor,
    borderRadius,
    boxShadow,
    opacity,
    zIndex,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    display,
    position,
    top,
    right,
    bottom,
    left,
    float,
    clear,
    overflow,
    cursor,
    listStyle,
    pointerEvents,
    userSelect,
  } = rest;

  return {
    color,
    fontSize,
    fontWeight,
    fontStyle,
    fontFamily,
    textDecoration,
    textTransform,
    textAlign,
    lineHeight,
    letterSpacing,
    wordSpacing,
    whiteSpace,
    backgroundColor,
    backgroundImage,
    backgroundSize,
    backgroundPosition,
    backgroundRepeat,
    border,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    borderColor,
    borderRadius,
    boxShadow,
    opacity,
    zIndex,
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    margin,
    marginTop,
    marginRight,
    marginBottom,
    marginLeft,
    padding,
    paddingTop,
    paddingRight,
    paddingBottom,
    paddingLeft,
    display,
    position,
    top,
    right,
    bottom,
    left,
    float,
    clear,
    overflow,
    cursor,
    listStyle,
    pointerEvents,
    userSelect,
  };
};
