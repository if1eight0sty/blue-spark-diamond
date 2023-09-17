import React from 'react'
import { FaFire } from 'react-icons/fa'
import { MdPolicy } from 'react-icons/md'
import { VscWorkspaceTrusted } from 'react-icons/vsc'

const VisionSectionOne = () => {
    return (
        <>
            <div className="grid grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow hover:shadow-lg">
                    <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
                        <MdPolicy className="text-[38px]" />
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold">
                        Ensuring Ethical Excellence
                    </h3>
                    <p className="text-base text-gray-500 ">
                        Our primary vision is to establish ourselves as the world&apos;s
                        foremost supplier of ethically sourced diamonds. We aim to lead
                        the industry in providing premium, certified, and high-quality
                        diamonds, all while maintaining a strong commitment to ethical
                        sourcing.
                    </p>
                </div>
                <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow  hover:shadow-lg">
                    <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
                        <VscWorkspaceTrusted className="text-[38px]" />
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold">
                        Unrivaled Trustworthiness
                    </h3>
                    <p className="text-base text-gray-500 ">
                        Our second vision is to build an unmatched reputation for
                        trustworthiness within the diamond market. We have diligently
                        studied global markets and miners to create a network that
                        guarantees the authenticity and integrity of every diamond we
                        provide. Our goal is to eliminate dishonest buying and selling
                        practices, restoring trust to the industry.
                    </p>
                </div>
                <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow hover:shadow-lg">
                    <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
                        <FaFire className="text-[38px]" />
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold">
                        Rekindling Elegance
                    </h3>
                    <p className="text-base text-gray-500">
                        Our third vision revolves around reviving the elegance associated
                        with diamonds. By offering meticulously and perfectly manufactured
                        diamonds, we aspire to bring back the allure and sophistication
                        that these precious gems have always represented. We envision a
                        future where the beauty of diamonds is once again celebrated and
                        cherished.
                    </p>
                </div>
            </div>
        </>
    )
}

export default VisionSectionOne