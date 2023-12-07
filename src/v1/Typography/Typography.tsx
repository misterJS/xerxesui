import { memo } from "react";
import { TypographyProps } from "./Typography.type";
import { additionalWrapperStyles } from "../../global/additional";
import TypographyStyle from "./Typography.module.css";
import classNames from "classnames";

const TypographyMemo = (props: TypographyProps) => {
  const {
    dataTestId,
    type = "standard",
    children,
    fontOption,
    ...rest
  } = props;

  const fontClassName = classNames({
    [TypographyStyle.kids]: fontOption === "kids",
    [TypographyStyle.aesthetic]: fontOption === "aesthetic",
    [TypographyStyle.retro]: fontOption === "retro",
    [TypographyStyle.basic]: fontOption === "basic" || fontOption === undefined,
  });

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
