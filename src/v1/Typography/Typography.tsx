import { memo } from "react";
import { TypographyProps } from "./Typography.type";
import { additionalWrapperStyles } from "../../global/additional";
import TypographyStyle from "./style.module.css";

const TypographyMemo = (props: TypographyProps) => {
  const { dataTestId, type = "standard", children, fontGaye, ...rest } = props;

  let fontClassName = "";
  switch (fontGaye) {
    case "kids":
      fontClassName = TypographyStyle.kids;
      break;
    case "aesthetic":
      fontClassName = TypographyStyle.aesthetic;
      break;
    case "retro":
      fontClassName = TypographyStyle.retro;
      break;
    default:
      fontClassName = TypographyStyle.basic;
      break;
  }
  return (
    <>
      {type === "standard" && (
        <p
          data-testid={dataTestId}
          className={fontClassName}
          style={additionalWrapperStyles(rest)}
        >
          {children}
        </p>
      )}

      {type === "h1" && (
        <h1
          data-testid={dataTestId}
          className={fontClassName}
          style={additionalWrapperStyles(rest)}
        >
          {children}
        </h1>
      )}

      {type === "h2" && (
        <h2
          data-testid={dataTestId}
          className={fontClassName}
          style={additionalWrapperStyles(rest)}
        >
          {children}
        </h2>
      )}

      {type === "h3" && (
        <h3
          data-testid={dataTestId}
          className={fontClassName}
          style={additionalWrapperStyles(rest)}
        >
          {children}
        </h3>
      )}
    </>
  );
};

export const Typography = memo(TypographyMemo);
