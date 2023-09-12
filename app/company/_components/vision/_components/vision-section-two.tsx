import React from 'react'
import { GiBrain } from "react-icons/gi";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { PiTreeEvergreenFill } from "react-icons/pi";
const VisionSectionTwo = () => {
    return (
        <>
            <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
                <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow hover:shadow-lg">
                    <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
                        <GiBrain className="text-[38px]" />
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold">
                        Our Philosophy
                    </h3>
                    <p className="text-base text-gray-500">
                        Customer-Centric Excellence: The customer always comes first. Blue
                        Spark guarantees excellent service and products to every customer
                        at our doorstep.
                    </p>
                </div>
                <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow hover:shadow-lg">
                    <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
                        <FaHandsHoldingCircle className="text-[38px]" />
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold">
                        Our Values
                    </h3>
                    <p className="text-base text-gray-500">
                        All Blue Spark Diamonds are ethically sourced and follow all due
                        procedures. All our diamonds are GIA Certified and have received
                        the Kimberly Process Certification.
                    </p>
                </div>
                <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow hover:shadow-lg">
                    <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
                        <PiTreeEvergreenFill className="text-[38px]" />
                    </div>
                    <h3 className="mb-4 text-2xl font-semibold">
                        Green Practices
                    </h3>
                    <p className="text-base text-gray-500">
                        The environment is always our top priority. At every step of our
                        process, we always keep in mind the effects our actions might have
                        on the environment and limit them.
                    </p>
                </div>
            </div>
        </>
    )
}

export default VisionSectionTwo