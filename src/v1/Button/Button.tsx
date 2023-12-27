import { additionalWrapperStyles } from "../../global/additional";
import React, { memo } from "react";
import ButtonStyle from "./Button.module.css";
import { ButtonProps } from "./Button.type";
import classNames from "classnames";

const ButtonMemo = (props: ButtonProps) => {
  const {
    size,
    title,
    iconLabel,
    iconPosition,
    multiIcon,
    hoverAnimate = true,
    ...rest
  } = props;

  const hoverClassName = classNames({
    [ButtonStyle.hoverAnimate]: hoverAnimate,
  })

  const sizeClassName = classNames({
    [ButtonStyle.small]: size === "small",
    [ButtonStyle.medium]: size === "medium",
    [ButtonStyle.large]: size === "large",
  });

  const renderIconLabel = () => {
    if (iconLabel) {
      if (Array.isArray(iconLabel)) {
        return (
          <React.Fragment>
            {iconLabel.map((icon, index) => (
              <span key={`icon-${index}`}>{icon}</span>
            ))}
          </React.Fragment>
        );
      } else {
        return <span>{iconLabel}</span>;
      }
    }
    return null;
  };

  const renderButtonContent = () => {
    if (multiIcon) {
      return (
        <React.Fragment>
          {renderIconLabel()}
          <span>{title}</span>
          {renderIconLabel()}
        </React.Fragment>
      );
    } else if (iconPosition === "back" || iconPosition === "front") {
      return (
        <React.Fragment>
          {iconPosition === "back" && renderIconLabel()}
          <span>{title}</span>
          {iconPosition === "front" && renderIconLabel()}
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <span>{title}</span>
        </React.Fragment>
      );
    }
  };

  return (
    <div className={ButtonStyle.buttonWrapper}>
      <button
        className={`${ButtonStyle.button} ${sizeClassName} ${hoverClassName}`}
        style={size === "custom" ? additionalWrapperStyles(rest) : {}}
        {...rest}
      >
        {renderButtonContent()}
      </button>
    </div>
  );
};

export const Button = memo(ButtonMemo);
