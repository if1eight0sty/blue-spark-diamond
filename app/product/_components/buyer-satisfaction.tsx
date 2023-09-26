import React from "react";
import Image from "next/image";

const BuyerSatisfaction = () => {
  return (
    <>
      <section className="mx-10 mt-10 flex flex-col items-center p-10 bg-gray-100 rounded-md">
        <div className="justify-center max-w-6xl px-4 py-4 mx-auto md:pt-16 pb-6 md:px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
                {/* <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
              Pricing
            </div> */}
                <h1 className="text-5xl font-bold leading-tight text-[#585858]">
                  Feel Confident Buying
                  <span className="text-blue-500"> Satisfaction</span>
                </h1>
                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                  <div className="flex-1 h-2 bg-blue-200"></div>
                  <div className="flex-1 h-2 bg-blue-400"></div>
                  <div className="flex-1 h-2 bg-blue-600"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* button section */}
        <div className="flex flex-col xl:flex-row items-center text-center gap-10 mx-10">
          {/* description for pricing */}
          <div className="flex flex-col max-w-sm md:max-w-xl gap-5 text-gray-500">
            <p className=" bg-white p-5 rounded-lg">
              Buyers need to feel confident that the certificate details
              presented relate to the physical diamond. The laser inscription
              gives this reassurance. The GIA inscription is invisible to the
              naked eye and difficult to see under 10x magnification to the
              un-trained eye.
            </p>
            <p className=" bg-white p-5 rounded-lg">
              To determine if your diamond is real, hold a magnifying glass up
              and look at the diamond through the glass. Look for imperfections
              within the stone. If you’re unable to find any, then the diamond
              is most likely fake. the majority of real diamonds have
              imperfections referred to as inclusions.
            </p>
          </div>
          <Image
            src=""
            alt="price of diamonds"
            width={300}
            height={300}
            priority
            className="bg-gray-300 sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] xl:w-[800px] xl:h-[800px] rounded-lg"
          />
        </div>
      </section>
    </>
  );
};

export default BuyerSatisfaction;
