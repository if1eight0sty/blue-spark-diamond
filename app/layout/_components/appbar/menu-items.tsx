import Link from "next/link";
import React from "react";
const MenuItems = ({ menu, link }: { menu: string; link: string }) => {
    return (
        <>
            <Link href={link} className="">
                <p className="font-[Nunito Sans] @[55em]:text-[.95rem] @[60em]:text-[1rem] text-[#151542] relative uppercase before:content-[''] before:absolute before:bottom-0 before:w-0 before:h-[2px] hover:before:w-[100%] before:bg-gray-800 cursor-pointer before:transition-[1s] duration-300 hover:text-[#585858] tracking-wider flex items-center text-[1.1rem]">
                    {menu}
                </p>
            </Link>
        </>
    );
};

export default MenuItems;
