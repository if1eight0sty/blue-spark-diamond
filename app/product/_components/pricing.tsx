"use client";

import React from "react";
import Image from "next/image";
import { getCldImageUrl } from "next-cloudinary";

const Pricing = () => {
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
      <section className="mx-10 mt-10 flex flex-col items-center p-10 bg-gray-100 rounded-md">
        <div className="justify-center max-w-6xl px-4 py-4 mx-auto md:pt-16 pb-6 md:px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
                {/* <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                  Pricing
                </div> */}
                <h1 className="text-5xl font-bold leading-tight text-[#585858]">
                  Buy and Sell according to the price in Industry{" "}
                  <span className="text-blue-500"> Pricing</span>
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
          <Image
            src={getImageURL(
              900,
              1800,
              "blue-spark/diamonds/graph"
            )}
            alt="a graph showing the clarity and price per carat of diamonds"
            width={1080}
            height={9000}
            priority
            className="bg-gray-300 sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] xl:w-[800px] xl:h-[800px] rounded-lg"
          />
          {/* description for pricing */}
          <div className="flex flex-col max-w-sm md:max-w-xl gap-5 text-gray-500">
            <p className=" bg-white p-5 rounded-lg">
              Blue Spark Diamond Company buys and sells diamonds according to
              the price in the industry. These values are contingent upon the
              market condition and aren&apos;t always stable. In fact, it is
              constantly fluctuating. The provided prices can change without any
              notice and don&apos;t last long.
            </p>
            <p className=" bg-white p-5 rounded-lg">
              Please inquire when placing an order. As Blue Spark Diamond
              Company is a wholesale supplier, we assure you the price of the
              cuts with excellent services and when needed will put in our best
              effort to deliver your orders on time. None of your orders are
              small or large for us, our exceptional customer service runs the
              same all across the board. We every stone order with the utmost
              care.
            </p>
            <p className=" bg-white p-5 rounded-lg">
              Most of our diamonds are cut and polished in Thailand and are of
              excellent quality. The price list updated frequently and when it
              changes you may ask for it. Diamond size mm, mm to 0. Each purity
              after .3 carat is sold separately as certified.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
