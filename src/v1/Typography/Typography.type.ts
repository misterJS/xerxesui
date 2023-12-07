import { Font, FontType } from "@/global/enum.type";
import { AdditionalStyles } from "@/global/types.type";

interface ITypography {
    fontOption?: keyof typeof Font;
    type?: keyof typeof FontType;
    children: React.ReactNode;
    dataTestId?: string;
}

export type TypographyProps = ITypography & AdditionalStyles