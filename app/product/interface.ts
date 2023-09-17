
export interface IProduct {
    id: string;
    src: string;
    desc: string;
    color?: string
}
export interface IColorSelectionSectionProps {
    data: IProduct[],
    selectedColor: string,
    setSelectedProduct: React.Dispatch<React.SetStateAction<IProduct>>
}