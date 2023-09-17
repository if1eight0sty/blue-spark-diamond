import { StaticImageData } from "next/image";

export interface ITeamInfo {
    name: string,
    designation: string,
    desc: string,
    image: StaticImageData,
    title: string
}