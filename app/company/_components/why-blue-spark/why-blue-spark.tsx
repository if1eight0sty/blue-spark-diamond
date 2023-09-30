import React from "react";
import { GiBrain } from "react-icons/gi";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { PiTreeEvergreenFill } from "react-icons/pi";

const WhyBlueSpark = () => {
  return (
    <>
      <section className="bg-[#F7F6F3] py-20 @container">
        <div className="w-full px-4 @[800px]:px-12 @[1250px]:px-20">
          {/* heading section */}
          <div className="my-10 text-center">
            <p className="max-w-xl mx-auto text-gray-500">
              Why Blue Spark Diamond?
            </p>
            <h1 className="mb-4 text-3xl font-bold text-gray-600">
              Services We Offer
            </h1>
          </div>
          {/* content section */}
          <div className="mt-10 grid grid-cols-1 gap-x-4 gap-y-6 lg:gap-x-8 lg:gap-y-8 md:grid-cols-2 lg:grid-cols-3">
            {/* <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow hover:shadow-lg">
            <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
              <GiBrain className="text-[38px]" />
            </div>
            <h3 className="mb-4 text-2xl font-semibold">Our Philosophy</h3>
            <p className="text-base text-gray-500">
              Customer-Centric Excellence: The customer always comes first. Blue
              Spark guarantees excellent service and products to every customer
              at our doorstep.
            </p>
          </div> */}
            <div className="w-full p-8 mb-5 transition-all bg-white rounded shadow hover:shadow-lg text-[#585858] flex items-center gap-x-3">
              <div className="inline-block p-4 bg-blue-400 rounded-full h-fit">
                <GiBrain className="text-[38px]" />
              </div>
              <div className="">
                <h3 className="mb-1 text-2xl font-semibold">Our Philosophy</h3>
                <p className="text-base text-gray-500">
                  Customer-Centric Excellence: The customer always comes first. Blue
                  Spark guarantees excellent service and products to every customer
                  at our doorstep.
                </p>
              </div>
            </div>
            <div className="w-full p-8 mb-5 text-center transition-all bg-white rounded shadow hover:shadow-lg">
              <div className="inline-block p-4 mb-6 -mt-16 bg-blue-400 rounded-full">
                <FaHandsHoldingCircle className="text-[38px]" />
              </div>
              <h3 className="mb-4 text-2xl font-semibold">Our Values</h3>
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
              <h3 className="mb-4 text-2xl font-semibold">Green Practices</h3>
              <p className="text-base text-gray-500">
                The environment is always our top priority. At every step of our
                process, we always keep in mind the effects our actions might have
                on the environment and limit them.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyBlueSpark;
