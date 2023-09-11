import React from 'react'
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaTiktok,
} from "react-icons/fa";
import { LiaTableSolid } from 'react-icons/lia';
const Socials = () => {
    return (
        <><div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
            <div className="h-full py-12 text-center transition-all rounded-lg shadow  bg-gray-50 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full">
                    <LiaTableSolid className="text-[18px]" />
                </div>
                <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                    Social
                </h2>
                <a
                    href="https://www.facebook.com/bluesparkdiamond"
                    className="inline-block mr-4 text-blue-600 hover:text-blue-700"
                >
                    <FaFacebook className="text-[24px]" />
                </a>
                <a
                    href="https://www.instagram.com/bluesparkdiamond"
                    className="inline-block mr-4 text-blue-600 hover:text-blue-700"
                >
                    <FaInstagram className="text-[24px]" />
                </a>
                <a
                    href="https://www.youtube.com/@BlueSparkDiamondCompany"
                    className="inline-block mr-4 text-blue-500 hover:text-blue-600 "
                >
                    <FaYoutube className="text-[24px]" />
                </a>
                <a
                    href="https://twitter.com/DiamondBlueSpa"
                    className="inline-block mr-4 text-blue-500 hover:text-blue-600 "
                >
                    <FaTwitter className="text-[24px]" />
                </a>
                <a
                    href="https://tiktok.com/@bluesparkdiamondofficial"
                    className="inline-block mr-4 text-blue-500 hover:text-blue-600"
                >
                    <FaTiktok className="text-[24px]" />
                </a>
            </div>
        </div>

        </>
    )
}

export default Socials