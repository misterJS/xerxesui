import { ButtonSize } from "@/global/enum.type";
import { AdditionalStyles } from "@/global/types.type";

enum position {
  front,
  back,
}

interface IButtonBase
  extends Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>,
    AdditionalStyles {
  size: keyof typeof ButtonSize;
  title: string;
  hoverAnimate?: boolean;
  dataTestId?: string;
}

interface IButtonWithIconLabel extends IButtonBase {
  iconLabel: React.ReactNode | [React.ReactNode, React.ReactNode];
  iconPosition: keyof typeof position;
  multiIcon?: boolean;
}

interface IButtonWithoutIconLabel extends IButtonBase {
  iconLabel: null;
  iconPosition?: never;
  multiIcon?: never;
}

export type ButtonProps = IButtonWithIconLabel | IButtonWithoutIconLabel;
