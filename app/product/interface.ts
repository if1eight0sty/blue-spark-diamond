import { StaticImageData } from "next/image";

export interface IProduct {
    id: string;
    src: StaticImageData;
    desc: string;
    color?: string
}