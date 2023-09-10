import { StaticImageData } from "next/image";

export interface IProduct {
    id: string;
    src: StaticImageData;
    desc: string;
    color?: string
}
export interface IColorSelectionSectionProps {
    data: IProduct[],
    selectedColor: string,
    setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct>>
}