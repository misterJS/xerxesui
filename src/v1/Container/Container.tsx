import { memo } from "react";
import { ContainerProps } from "./Container.type";
import ContainerStyle from "./Container.module.css";
import { additionalWrapperStyles } from "../../global/additional";
import classNames from "classnames";

const ContainerMemo = (props: ContainerProps) => {
  const { dataTestId, size, children, ...rest } = props;
  const sizeClassName = classNames({
    [ContainerStyle.mobile]: size === "mobile",
    [ContainerStyle.tablet]: size === "tablet",
    [ContainerStyle.pc]: size === "pc",
    [ContainerStyle.superpc]: size === undefined || null,
  });

  return (
    <div className={ContainerStyle.container}>
      <div
        data-testid={dataTestId}
        className={sizeClassName}
        style={additionalWrapperStyles(rest)}
      >
        {children}
      </div>
    </div>
  );
};

export const Container = memo(ContainerMemo);
