"use client";

import React from "react";
import Image from "next/image";
import { getCldImageUrl } from "next-cloudinary";

const BuyerSatisfaction = () => {
  // get image url from cloudinary based on the image name/public id
  const getImageURL = (height: number, width: number, src: string) => {
    return getCldImageUrl({
      width,
      height,
      src,
    });
  };
  return (
    <>
      <section className="mt-10 flex flex-col items-center p-10 bg-gray-100 rounded-md">
        <div className="justify-center py-4 md:pt-16 pb-6">
          <div className="max-w-xl">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
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
        <div className="flex flex-col xl:flex-row items-center text-center gap-10">
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
            src={getImageURL(
              900,
              1800,
              "blue-spark/diamonds/buyer-satisfaction"
            )}
            alt="a diamond placed on a table with a magnifying tool"
            width={900}
            height={1080}
            priority
            className="bg-gray-300 sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] xl:w-[800px] xl:h-[600px] rounded-lg"
          />
        </div>
      </section>
    </>
  );
};

export default BuyerSatisfaction;
