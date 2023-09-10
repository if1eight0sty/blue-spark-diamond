'use client'

import React from 'react'
import { GiPhone } from 'react-icons/gi';
import { MdEmail, MdLocationPin } from 'react-icons/md';

import { useGlobalStore } from "@/app/global/store";
import { IUseGlobalStore } from "@/app/global/interface";
const Contacts = () => {
    // stores
    const country = useGlobalStore((state: IUseGlobalStore) => state.country);
    return (
        <>
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
        </>
    )
}

export default Contacts