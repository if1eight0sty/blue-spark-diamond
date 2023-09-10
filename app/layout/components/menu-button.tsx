import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";

const MenuButton = ({ menu, icon: Icon, link }: { menu: string; icon: IconType, link: string }) => {
    return (
        <>
            <ol className="w-full relative before:content-[''] before:absolute before:bottom-0 before:w-0 before:h-[2px] before:bg-[#fff] hover:before:w-[100%] py-[.9em] before:transition-[width] duration-[1s] delay-200 after:content-[''] after:absolute after:bottom-0 after:w-full after:h-[1px] after:bg-[#fff]">
                <Link href={link} className="capitalize flex gap-x-2 items-center">
                    <Icon className="text-[1.1rem]" />
                    {menu}
                </Link>
            </ol>
        </>
    );
};

export default MenuButton;
