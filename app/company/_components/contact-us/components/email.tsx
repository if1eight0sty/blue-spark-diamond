'use client'

import React from 'react'

import { BiLogoGmail } from 'react-icons/bi'

import { useGlobalStore } from "@/app/global/store";
import { IUseGlobalStore } from "@/app/global/interface";
const Email = () => {
    const country = useGlobalStore((state: IUseGlobalStore) => state.country);
    return (
        <>
            <div className="w-full px-4 mb-4 lg:w-1/3 lg:mb-0">
                <div className="h-full py-12 text-center transition-all rounded-lg shadow  bg-gray-50 hover:shadow-lg">
                    <div className="inline-flex items-center justify-center w-12 h-12 mb-6 text-gray-100 bg-blue-500 rounded-full">
                        <BiLogoGmail className="text-[18px]" />
                    </div>
                    <h2 className="mb-4 text-xl font-bold leading-9 text-gray-700 md:text-2xl">
                        Email
                    </h2>
                    {country === "NP" && (
                        <p className="text-base font-medium text-gray-500 md:text-lg">
                            bluesparkdiamond@gmail.com
                        </p>
                    )}
                    {country === "Th" && (
                        <p className="text-base font-medium text-gray-500 md:text-lg">
                            bluesparkdiamond@gmail.com
                        </p>
                    )}
                    {country === "UK" && (
                        <p className="text-base font-medium text-gray-500 md:text-lg">
                            Coming soon
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Email