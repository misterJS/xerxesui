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
  | "inputMode";

interface IButton extends Partial<Omit<HTMLButtonElement, ExcludeButtonProps>> {
  size: keyof typeof ButtonSize;
  title: string;
  dataTestId?: string;
}

export type ButtonProps = IButton & AdditionalStyles;
