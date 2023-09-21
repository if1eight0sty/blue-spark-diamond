"use client";
import React from "react";
import Image from "next/image";
import { getCldImageUrl } from 'next-cloudinary';
const Location = () => {
  // get image url from cloudinary based on the image name/public id
  const getImageURL = (
    height: number,
    width: number,
    src: string,
  ) => {
    return getCldImageUrl({
      width,
      height,
      src,
    })
  }
  return (
    <>
      <section className="flex flex-col items-center justify-center overflow-hidden font-poppins isolate pb-24 bg-white @container">
        <div className="justify-center max-w-6xl px-4 py-4 mx-auto md:pt-16 pb-6 md:px-6">
          <div className="max-w-xl mx-auto">
            <div className="text-center ">
              <div className="relative flex flex-col items-center">
                <div className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-400 font-bold opacity-10">
                  LOCATION
                </div>
                <h1 className="text-5xl font-bold leading-tight text-[#585858]">
                  Company <span className="text-blue-500"> Location</span>
                </h1>
                <div className="flex w-24 mt-1 mb-10 overflow-hidden rounded">
                  <div className="flex-1 h-2 bg-blue-200"></div>
                  <div className="flex-1 h-2 bg-blue-400"></div>
                  <div className="flex-1 h-2 bg-blue-600"></div>
                </div>
              </div>
              <p className="mb-16 text-base text-center text-gray-500">
                We are available in 3 different territories; <span className="font-bold">Nepal, Thailand and U.K.</span> We
                communicate in English, Spanish, Italian, Portuguese and Hindi.
                However, all connections we make are through appropriate
                channels, which makes us capable of importing and exporting
                worldwide within 72 hours.
              </p>
            </div>
          </div>
        </div>
        {/* location of blue spark diamond company*/}
        <div className="w-[1024px] h-[576px] lg:flex justify-center overflow-hidden">
          <Image
            width="1280"
            height="720"
            src={getImageURL(720, 1280, 'blue-spark/company/location')}
            alt="location of the company, Blue Spark Diamond"
            priority
            className="rounded-lg w-full h-full translate-x-[-12%] md:translate-x-[5%] lg:translate-x-0"
            sizes="100vw"
          />
        </div>
      </section>
    </>
  );
};

export default Location;
