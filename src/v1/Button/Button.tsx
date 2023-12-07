import { additionalWrapperStyles } from "../../global/additional";
import React, { memo } from "react";
import ButtonStyle from "./Button.module.css";
import { ButtonProps } from "./Button.type";
import classNames from "classnames";

const ButtonMemo = (props: ButtonProps) => {
  const { size, title, iconLabel, iconPosition, multiIcon, ...rest } = props;
  const sizeClassName = classNames({
    [ButtonStyle.small]: size === "small",
    [ButtonStyle.medium]: size === "medium",
    [ButtonStyle.large]: size === "large",
  });

  const renderIconLabel = () => {
    if (iconLabel && !multiIcon) {
      return <span>{iconLabel}</span>;
    } else if (iconLabel && multiIcon && Array.isArray(iconLabel)) {
      return (
        <React.Fragment>
          <span>{iconLabel[0]}</span>
          <span>{iconLabel[1]}</span>
        </React.Fragment>
      );
    }
    return null;
  };

  return (
    <div className={ButtonStyle.buttonWrapper}>
      <button
        className={`${ButtonStyle.button} ${sizeClassName}`}
        style={size === "custom" ? additionalWrapperStyles(rest) : {}}
        {...props}
      >
        {iconPosition === "back" && renderIconLabel()}
        <span>{title}</span>
        {iconPosition === "front" && renderIconLabel()}
      </button>
    </div>
  );
};

export const Button = memo(ButtonMemo);
