'use client'

import React from 'react'

import { useGlobalStore } from "@/app/global/store";
import { IUseGlobalStore } from "@/app/global/interface";
const Address = () => {
    const country = useGlobalStore((state: IUseGlobalStore) => state.country);
    return (
        <>
            <div className="max-w-xl mx-auto text-gray-600">
                <div className="text-center ">
                    <div className="relative flex flex-col items-center">
                        <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10 select-none">
                            Contact
                        </div>
                        <h1 className="text-5xl font-bold">
                            Our <span className="text-blue-500"> Contact</span>
                        </h1>
                        <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                            <div className="flex-1 h-2 bg-blue-200"></div>
                            <div className="flex-1 h-2 bg-blue-400"></div>
                            <div className="flex-1 h-2 bg-blue-600"></div>
                        </div>
                    </div>
                    {country === "NP" && (
                        <p className="mb-16 text-base text-center text-gray-500">
                            Baluwatar 4, Near Tudaldevi Mandir
                        </p>
                    )}
                    {country === "TH" && (
                        <p className="mb-16 text-base text-center text-gray-500">
                            11/80 Kanchanaphisek Road, Prawet District, Bangkok 10250
                        </p>
                    )}
                    {country === "UK" && (
                        <p className="mb-16 text-base text-center text-gray-500">
                            Coming soon
                        </p>
                    )}
                </div>
            </div>
        </>
    )
}

export default Address