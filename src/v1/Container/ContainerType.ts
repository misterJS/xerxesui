import { Size } from "@/global/enum";
import { AdditionalStyles } from "@/global/type";

interface IContainer {
    size: keyof typeof Size;
    children: React.ReactNode;
    dataTestId?: string;
}

export type ContainerProps = IContainer & AdditionalStyles