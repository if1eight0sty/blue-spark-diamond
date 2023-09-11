
'use client'

import React from 'react'

import { useGlobalStore } from "@/app/global/store";
import { IUseGlobalStore } from "@/app/global/interface";
const ContactForm = () => {
    const country = useGlobalStore((state: IUseGlobalStore) => state.country);
    return (
        <>
            <div className="px-8 py-8 bg-white border rounded-md shadow-md text-gray-600">
                <form action="">
                    <div className="mb-6">
                        <h2 className="text-xl font-bold text-gray-00 ">
                            Please send message for further information!
                        </h2>
                    </div>
                    <div className="flex flex-wrap mb-4 -mx-2">
                        <div className="w-full px-2 mb-4 lg:mb-0 lg:w-1/2">
                            <input
                                className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50"
                                type="text"
                                placeholder="First Name.."
                            />
                        </div>
                        <div className="w-full px-2 lg:w-1/2">
                            <input
                                className="w-full px-3 py-2 leading-loose border rounded-md bg-gray-50"
                                type="text"
                                placeholder="Last Name.."
                            />
                        </div>
                    </div>
                    <input
                        className="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-gray-50"
                        type="email"
                        placeholder="example@gmail.com"
                    />
                    <input
                        className="w-full px-3 py-2 mb-4 leading-loose border rounded-md bg-gray-50"
                        type="number"
                        placeholder={`${(country === "UK" && "+44") ||
                            (country === "NP" && "+977") ||
                            (country === "TH" && "+66")
                            } 9876543210`}
                    />
                    <textarea
                        placeholder="Write a message..."
                        className="block w-full px-4 mb-4 leading-tight text-gray-700 border rounded bg-gray-50  "
                    ></textarea>
                    <button className="w-full py-4 text-sm font-bold leading-normal text-white transition-all duration-300 bg-blue-600 rounded-md hover:bg-blue-700">
                        Send Message
                    </button>
                </form>
            </div>
        </>
    )
}

export default ContactForm