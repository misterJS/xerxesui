import { Size } from "@/global/enum.type";
import { AdditionalStyles } from "@/global/types.type";

interface IContainer {
    size: keyof typeof Size;
    children: React.ReactNode;
    dataTestId?: string;
}

export type ContainerProps = IContainer & AdditionalStyles