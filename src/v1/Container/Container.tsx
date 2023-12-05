import { memo } from "react";
import { ContainerProps } from "./Container.type";
import ContainerStyle from "./Container.module.css";
import { additionalWrapperStyles } from "../../global/additional";

const ContainerMemo = (props: ContainerProps) => {
  const { dataTestId, size, children, ...rest } = props;

  let sizeClassName = "";
  switch (size) {
    case "mobile":
      sizeClassName = ContainerStyle.mobile;
      break;
    case "tablet":
      sizeClassName = ContainerStyle.tablet;
      break;
    case "pc":
      sizeClassName = ContainerStyle.pc;
      break;
    default:
      sizeClassName = ContainerStyle.superpc;
      break;
  }

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
