import React from 'react'
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa'

const Socials = () => {
    return (
        <><div className="flex flex-col md:items-center lg:items-start gap-3">
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
        </div></>
    )
}

export default Socials