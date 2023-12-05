import { Font, FontType } from "@/global/enum";
import { AdditionalStyles } from "@/global/type";

interface ITypography {
    fontGaye?: keyof typeof Font;
    type?: keyof typeof FontType;
    children: React.ReactNode;
    dataTestId?: string;
}

export type TypographyProps = ITypography & AdditionalStyles