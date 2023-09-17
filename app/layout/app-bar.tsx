"use client";

import Image from "next/image";
import dynamic from "next/dynamic";

import React, { useState } from "react";

import { FaHome } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";

const MenuItems = dynamic(() => import('./_components/appbar/menu-items'), {
});
const MenuButton = dynamic(() => import('./_components/appbar/menu-button'), {
});
const FlagDropdown = dynamic(() => import('./_components/appbar/flag-dropdown'), {
});

import { useGlobalStore } from "@/app/global/store";
import { IUseGlobalStore } from "@/app/global/interface";
import { getCldImageUrl } from "next-cloudinary";
const AppBar = () => {
    // stores
    const country = useGlobalStore((state: IUseGlobalStore) => state.country);
    // states
    // toggleMenu -> toggles the menu for a small device
    const [toggleMenu, setToggleMenu] = useState(false);
    const getImageURL = (
        height: number,
        width: number,
        src: string,
        crop: string = "limit"
    ) => {
        return getCldImageUrl({
            width,
            height,
            src,
            crop
        })
    }
    return (
        <>
            <nav className="@container z-[1] top-0 sticky isolate">
                {/* head */}
                <div className="flex items-center flex-col justify-center  px-4 shadow-sm bg-white z-[2]">
                    <div className="hidden w-full @[55em]:flex items-center justify-between @[55em]:gap-x-4">
                        <Image
                            height={200}
                            width={140}
                            src={getImageURL(200, 400, "blue-spark/logos/logo-mobile")}
                            alt="blue spark diamonds logo"
                            priority
                            sizes="(max-width: 768px) 90vw,
                    (max-width: 1200px) 20vw,
                    30vw"
                            className=" -mt-1.5 cursor-pointer p-1"
                        />
                        {/* me
                        height={200}nus for the larger screen */}
                        <ul className="gap-x-2 flex @[50em]:gap-x-4 @[60em]:gap-x-7 mb-1 items-baseline">
                            <MenuItems link="/" menu="Home" />
                            <MenuItems link="/product" menu="Product" />
                            <MenuItems link="/company" menu="Company" />
                            <MenuItems link="/updates" menu="News & updates" />
                        </ul>
                        {/* menu section ends here */}
                        {/* right section (contact) */}
                        <div className="flex items-center justify-end text-[.7rem] text-center text-[#1a1a1a] leading-4 w-[21em]">
                            {country === "NP" && (
                                <p className="mt-[.2rem]">(+977) 01-4443197 / 4443198</p>
                            )}
                            {country === "TH" && <p className="mt-[.2rem]">+66 837741840</p>}
                            {country === "UK" && <p className="mt-[.2rem]">Coming soon</p>}
                            <FlagDropdown />
                        </div>
                        {/* contact section ends here */}
                    </div>
                    <div className="flex @[55em]:hidden items-center justify-between w-full py-2">
                        <Image
                            height={200}
                            width={140}
                            src={getImageURL(200, 400, "blue-spark/logos/logo-mobile")}
                            alt="blue spark diamonds"
                            priority
                            sizes="(max-width: 768px) 90vw,
                    (max-width: 1200px) 20vw,
                    30vw"
                            className="h-[3.5em] w-[6.5em] -mt-[.7em] cursor-pointer"
                            title="blue spark diamonds"
                        />
                        {/* ham-burger section starts */}
                        <div className="@[55em]:hidden">
                            <input
                                className="check-icon"
                                id="check-icon"
                                name="check-icon"
                                type="checkbox"
                                hidden
                                onChange={(e) => {
                                    setToggleMenu(e.target.checked);
                                }}
                            />
                            <label className="icon-menu" htmlFor="check-icon">
                                <div className="bar bar--1"></div>
                                <div className="bar bar--2"></div>
                                <div className="bar bar--3"></div>
                            </label>
                        </div>
                        {/* ham-burger fin */}
                    </div>
                </div>
            </nav>
            {/* menus for a small device */}
            {/* menus starts */}
            <aside
                className={`fixed right-0 top-[4.9em] w-[15em] h-[100dvh] z-[1] bg-gray-800 backdrop-blur-lg text-[#fff] transition @[50em]:hidden p-4 ${toggleMenu ? "" : "translate-x-[100%] duration-[.9s]"
                    }`}
            >
                <ul className="w-full flex flex-col gap-y-3">
                    <MenuButton menu="Home" link="/" icon={FaHome} />
                    <MenuButton menu="Products" link="/product" icon={GiBigDiamondRing} />
                    <MenuButton menu="Company" link="/company" icon={FaUsers} />
                    <MenuButton menu="News & updates" link="/updates" icon={FaQuestion} />
                </ul>
            </aside>
        </>
    );
};

export default AppBar