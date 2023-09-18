'use client'

import React from "react";
import Image from "next/image";
import { getCldImageUrl } from 'next-cloudinary';

const CraftingBeauty = () => {
  const getImageURL = (
    height: number,
    width: number,
    src: string,
    crop: string = "limit"
  ) => {
    return getCldImageUrl({
      width,
      height,
      src,
      crop
    })
  }
  return (
    <section className="flex items-center bg-gray-100 font-poppins mt-20">
      <div className="container justify-center flex-1 px-4 py-4 mx-auto text-left lg:py-10 ">
        <div className="mx-auto max-w-7xl py-11">
          <h2 className="pb-4 text-4xl font-bold text-center text-gray-800">
            Crafting Beauty from Transparency
          </h2>
          <div className="mx-auto mb-16 border-b border-red-700 w-44"></div>
          <div className="flex flex-wrap self-start gap-5">
            <div className="w-full lg:w-1/5 md:w-full lg:mb-0">
              <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                <Image
                  width="960"
                  height="300"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500 object-cover"
                  src={getImageURL(300, 600, 'blue-spark/diamonds/diamond-mining-africa')}
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 20vw,
                    30vw"
                  alt="an african man mining and collecting diamond from river"
                />
                <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                <div>
                  <div className="absolute z-10 hidden group-hover:block top-4 right-4"></div>
                  <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                    <a
                      href=""
                      className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                    >
                      Diamond Mining
                    </a>
                    <p className="mb-0 text-xs text-gray-300">
                      Diamond Mining Empowering African Communities
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative overflow-hidden rounded-md shadow-md group">
                <Image
                  width="300"
                  height="300"
                  src={getImageURL(400, 600, 'blue-spark/diamonds/processed-ore')}
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 20vw,
                    20vw"
                  loading="lazy"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500 object"

                  alt="A refined oer of diamond"
                />
                <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                <div>
                  <div className="absolute z-10 hidden group-hover:block top-4 right-4"></div>
                  <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                    <a
                      href=""
                      className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                    >
                      Processed Ore
                    </a>
                    <p className="mb-0 text-xs text-gray-300">
                      Separated diamonds from the surrounding rock
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-full lg:w-1/2 lg:mb-0">
              <div className="relative overflow-hidden rounded-md shadow-md group">
                <video
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] lg:h-[625px] w-full transition duration-500 object-cover"
                  autoPlay
                  loop
                  muted
                >
                  <source src={"https://res.cloudinary.com/dnfq9u2nu/video/upload/v1695049520/blue-spark/videos/heart-diamond.webm"} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 h-[620px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                <div>
                  <div className="absolute z-10 hidden group-hover:block top-4 right-4"></div>
                  <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                    <a
                      href=""
                      className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                    >
                      Formation
                    </a>
                    <p className="mb-0 text-xs text-gray-300">
                      A defined shape
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mb-10 lg:w-1/5 md:w-full lg:mb-0">
              <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                <Image
                  width="300"
                  height="300"
                  src={getImageURL(800, 1080, 'blue-spark/diamonds/diamond-collection-1')}
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 40vw,
                    20vw"
                  alt="a tray containing the refined ores of diamonds"
                  loading="lazy"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                />
                <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                <div>
                  <div className="absolute z-10 hidden group-hover:block top-4 right-4"></div>
                  <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                    <a
                      href=""
                      className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                    >
                      Rough Diamond
                    </a>
                    <p className="mb-0 text-xs text-gray-300">
                      Sold to manufacturers and traders
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative mb-6 overflow-hidden rounded-md shadow-md group">
                <Image
                  width="300"
                  height="300"
                  src={getImageURL(800, 1080, 'blue-spark/diamonds/manufacturing-diamond')}
                  sizes="(max-width: 768px) 100vw,
                    (max-width: 1200px) 40vw,
                    20vw"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                  alt="A diamond cutting machine cutting and shaping a diamond"
                  loading='lazy'
                />
                <div className="absolute inset-0 h-[300px] group-hover:bg-black opacity-50 transition duration-500 z-0"></div>
                <div>
                  <div className="absolute z-10 hidden group-hover:block top-4 right-4"></div>
                  <div className="absolute z-10 hidden group-hover:block bottom-4 left-4">
                    <a
                      href=""
                      className="text-lg font-medium text-white transition duration-500 hover:text-blue-300"
                    >
                      Sorting & Grading
                    </a>
                    <p className="mb-0 text-xs text-gray-300">
                      Based on color, clarity, carat weight, & cut quality
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CraftingBeauty;
