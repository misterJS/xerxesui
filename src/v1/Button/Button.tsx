import { additionalWrapperStyles } from "../../global/additional";
import { memo } from "react";
import ButtonStyle from "./Button.module.css";
import { ButtonProps } from "./Button.type";

const ButtonMemo = (props: ButtonProps) => {
  const { size, title } = props;
  let sizeClassName = "";
  switch (size) {
    case "small":
      sizeClassName = ButtonStyle.small;
      break;
    case "medium":
      sizeClassName = ButtonStyle.medium;
      break;
    case "large":
      sizeClassName = ButtonStyle.large;
      break;
    default:
      sizeClassName = "";
      break;
  }

  return (
    <div className={ButtonStyle.buttonWrapper}>
    <button
      className={`${ButtonStyle.button} ${sizeClassName}`}
      style={size === "custom" ? additionalWrapperStyles(props) : {}}
      {...props}
    >
      {title}
    </button>
    </div>
  );
};

export const Button = memo(ButtonMemo);
