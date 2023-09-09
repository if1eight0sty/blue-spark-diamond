

import React from "react";
import Image from "next/image";
import { MdLocationPin } from "react-icons/md";
import { GiPhone } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import Logo5 from "@/public/logos/full-logo.png";
import { useGlobalStore } from "@/app/global/store";
import { IUseGlobalStore } from "@/app/global/interface";
import background from "@/public/background/footer-background.webp";
import Link from "next/link";
const Footer = () => {
    // stores
    const country = useGlobalStore((state: IUseGlobalStore) => state.country);
    return (
        <>
            <div
                className="flex flex-col bg-cover bg-center bg-white @container"
                style={{
                    backgroundImage: `url('${background.src}')`,
                }}
            >
                {/* top container */}
                <div className="flex justify-center items-center px-5 py-16 lg:py-5">
                    <div className="flex flex-col gap-3 lg:flex-row lg:justify-between   lg:w-[61rem] px-5 @[120px]:w-[63rem]">
                        {/* left-top */}
                        <div className="flex flex-col items-center lg:items-start gap-x-2 gap-y-3 text-[#151542] hover:text-[#585858]">
                            <MdLocationPin className="w-5 h-5" />
                            <div className="flex flex-col items-center lg:items-start leading-3 text-center lg:text-left gap-1">
                                <p className="text-md font-normal text-[14px]">Find Us</p>
                                {country === "NP" && (
                                    <p className="text-sm font-light text-[13px]">
                                        Baluwatar 4, Near Tudaldevi Mandir
                                    </p>
                                )}
                                {country === "TH" && (
                                    <p className="text-sm font-light text-[13px]">
                                        11/80 Kanchanaphisek Road, Prawet District, Bangkok 10250
                                    </p>
                                )}
                                {country === "UK" && (
                                    <p className="text-sm font-light text-[13px]">Coming soon</p>
                                )}
                            </div>
                        </div>
                        {/* mid-top */}
                        <div className="flex flex-col items-center lg:items-start gap-x-2 gap-y-3 text-[#151542] hover:text-[#585858]">
                            <GiPhone className="w-5 h-5" />
                            <div className="flex flex-col items-center lg:items-start leading-3 text-center lg:text-left gap-1">
                                <p className="text-md font-normal  text-[14px]">Call Us</p>
                                {country === "NP" && (
                                    <p className="text-sm font-light text-[13px]">
                                        (+977) 01-4443197 / 4443198
                                    </p>
                                )}
                                {country === "TH" && (
                                    <p className="text-sm font-light text-[13px]">
                                        +66 837741840
                                    </p>
                                )}
                                {country === "UK" && (
                                    <p className="text-sm font-light text-[13px]">Coming soon</p>
                                )}
                            </div>
                        </div>
                        {/* right-top */}
                        <div className="flex flex-col items-center lg:items-start gap-x-2 gap-y-3 text-[#151542] hover:text-[#585858]">
                            <MdEmail className="w-5 h-5" />
                            <div className="flex flex-col items-center lg:items-start leading-3 text-center lg:text-left gap-1">
                                <p className="text-md font-normal text-[14px]">Mail Us</p>
                                {country === "NP" && (
                                    <p className="text-sm font-light text-[13px]">
                                        info@bluesparkdiamondinternational.com
                                    </p>
                                )}
                                {country === "TH" && (
                                    <p className="text-sm font-light text-[13px]">
                                        bluesparkdiamond@gmail.com
                                    </p>
                                )}
                                {country === "UK" && (
                                    <p className="text-sm font-light text-[13px]">Coming soon</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* horizontal bar */}
                <hr className="flex flex-col items-center justify-between mx-5 py-3" />
                {/* middle container */}
                <div className="flex items-center justify-center">
                    <div className="flex flex-col md:flex-col lg:flex-row items-center lg:items-start lg:justify-between lg:gap-24 lg:max-w-6xl px-5">
                        {/* left-middle */}
                        <div className="flex flex-col items-center lg:items-start gap-5">
                            {/* logo */}
                            <Image
                                src={Logo5}
                                alt="logo"
                                priority
                                width={150}
                                height={150}
                                className=""
                                style={{ width: "auto" }}
                            />
                            <p className="text-[#151542] text-sm font-light text-[13px] max-w-xs text-center lg:text-left">
                                A tailored experience for all customers.
                                <br />
                                The Spark to your Elegance.
                            </p>
                            {/* Social Media Icons */}
                            <div className="flex flex-col md:items-center lg:items-start gap-3">
                                <p className="text-md font-normal text-[14px] text-[#151542] hover:text-[#585858] dark:text-[#151542]">
                                    Follow Us
                                </p>
                                <div className="flex flex-col md:flex-row items-center gap-2 md:gap-5 lg:gap-5">
                                    <a
                                        target="_blank"
                                        href="https://www.facebook.com/bluesparkdiamond"
                                    >
                                        <FaFacebook className="text-[#585858] hover:text-[#1877F2] w-5 h-5" />
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://www.instagram.com/bluesparkdiamond"
                                    >
                                        <FaInstagram className="text-[#585858] hover:text-[#E4405F] w-5 h-5" />
                                    </a>
                                    <a
                                        target="_black"
                                        href="https://www.youtube.com/@BlueSparkDiamondCompany"
                                    >
                                        <FaYoutube className="text-[#585858] hover:text-[#FF0000] w-5 h-5" />
                                    </a>
                                    <a target="_blank" href="https://twitter.com/DiamondBlueSpa">
                                        <FaTwitter className="text-[#585858] hover:text-[#1D9BF0] w-5 h-5" />
                                    </a>
                                    <a
                                        target="_blank"
                                        href="https://tiktok.com/@bluesparkdiamondofficial"
                                    >
                                        <FaTiktok className="text-[#585858] hover:text-[#000] w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        {/* mid-middle */}
                        <div className="flex flex-col items-center lg:items-start p-5">
                            {/* title and hr */}
                            <div className="flex flex-col gap-1 group relative text-[#151542] hover:text-[#585858]">
                                <h3 className="text-md font-normal text-[14px] relative before:content-[''] before:absolute before:bottom-0 before:w-0 before:h-[2px] hover:before:w-[100%] before:bg-gray-800 before:transition-[1s] duration-300">
                                    Useful Links
                                </h3>
                                {/* <hr className="h-1 w-8 bg-[#080089] border-0 absolute -bottom-2 left-4 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity" /> */}
                            </div>
                            {/* Links */}
                            <div className="flex flex-col gap-y-2 my-3 items-center lg:items-start text-[#151542] hover:text-[#585858]">
                                <Link href="/" className="text-sm font-light text-[13px] hover:text-[#080089]">
                                    Home
                                </Link>
                                <Link href="/company" className="text-sm font-light text-[13px] hover:text-[#080089]">
                                    Company Profile
                                </Link>
                                <Link href="/product" className="text-sm font-light text-[13px] hover:text-[#080089]">
                                    Products
                                </Link>
                                <Link href="/updates" className="text-sm font-light text-[13px] hover:text-[#080089]">
                                    News & updates
                                </Link>
                            </div>
                        </div>
                        {/* right-middle */}
                        <div className="flex flex-col items-center lg:items-start p-5">
                            {/* title and hr */}
                            <div className="flex flex-col gap-1 group relative text-[#151542] hover:text-[#585858]">
                                <h3 className="text-md font-normal text-[14px] relative before:content-[''] before:absolute before:bottom-0 before:w-0 before:h-[2px] hover:before:w-[100%] before:bg-gray-800 before:transition-[1s] duration-300">Subscribe</h3>
                            </div>
                            <div className="flex flex-col gap-y-2 my-3 items-center lg:items-start text-[#151542] hover:text-[#585858]">
                                {/* Links */}
                                <p className="text-sm font-light text-[13px] max-w-xs md:max-w-md md:pb-2 text-center">
                                    Don&apos;t miss to subscribe our news feeds, kindly fill the form
                                    below.
                                </p>
                                <div className="flex items-center">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="py-2 px-4 rounded-l-md border border-r-0 border-gray-300 focus:ring-offset-0 focus:ring-[#080089] focus:border-[#090089d5] outline-none text-[#585858]"
                                    />
                                    <button
                                        type="button"
                                        className="bg-[#080089] hover:bg-[#090089d5] text-white py-2 px-4 rounded-r-md focus:ring-offset-0 focus:ring-[#080089] focus:border-[#090089d5] outline-none"
                                    >
                                        <svg
                                            className="w-6 h-6"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* bottom container with copyrights and privacy policy */}
                <div className="flex flex-col w-full items-center lg:mt-10">
                    <div className="py-5 flex flex-col md:flex-row items-center justify-between gap-2">
                        <p className="text-sm font-light text-[13px] max-w-xs text-center text-[#585858]">
                            &copy;2023 Blue Spark Diamond | All Rights Reserved.
                        </p>
                        <p className="text-sm font-light text-[13px] max-w-xs text-center text-[#23527c] hover:text-[#3d5b75] cursor-pointer">
                            Privacy Policy
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer