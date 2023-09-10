import Link from 'next/link'
import React from 'react'

const NavigationLinks = () => {
    return (
        <>
            <div className="flex flex-col items-center lg:items-start p-5">
                {/* title and hr */}
                <div className="flex flex-col gap-1 group relative text-[#151542] hover:text-[#585858]">
                    <h3 className="text-md font-normal text-[14px] relative before:content-[''] before:absolute before:bottom-0 before:w-0 before:h-[2px] hover:before:w-[100%] before:bg-gray-800 before:transition-[1s] duration-300">
                        Useful Links
                    </h3>
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
        </>
    )
}

export default NavigationLinks