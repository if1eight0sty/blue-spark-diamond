"use client";
import Image from "next/image";

import MobileLogo from "@/public/logos/logo-mobile.png";
import React, { useState } from "react";

import { FaHome } from "react-icons/fa";
import { GiBigDiamondRing } from "react-icons/gi";
import { FaUsers } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa";

const AppBar = () => {
    // stores
    // const country = useGlobalStore((state: IUseGlobalStore) => state.country);
    // states
    // toggleMenu -> toggles the menu for a small device
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div>AppBar</div>
    )
}

export default AppBar