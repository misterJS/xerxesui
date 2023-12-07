import { ButtonSize } from "@/global/enum.type";
import { AdditionalStyles } from "@/global/types.type";

type ExcludeButtonProps =
  | "className"
  | "form"
  | "contentEditable"
  | "style"
  | "translate"
  | "role"
  | "prefix"
  | "type"
  | "onclick"
  | "inputMode";

enum position {
  front,
  back,
}

interface IButtonBase
  extends Partial<React.ButtonHTMLAttributes<HTMLButtonElement>>,
    AdditionalStyles {
  size: keyof typeof ButtonSize;
  title: string;
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
