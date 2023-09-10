import React from 'react'

const Subscribe = () => {
    return (
        <>
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
        </>
    )
}

export default Subscribe