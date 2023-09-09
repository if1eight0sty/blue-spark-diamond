import React from "react";
import Image from "next/image";
import diamondmining1 from "@/public/diamonds/diamond-mining-africa.webp";
import manufacturingDiamond from "@/public/diamonds/manufacturing-diamond.jpeg";
import heartDiamondGif from "@/public/diamonds/heart-diamond-gif.gif";
import processedOre from "@/public/diamonds/processed-ore.webp";
import diamondCollection1 from "@/public/diamonds/diamond-collection-1.jpeg";

const CraftingBeauty = () => {
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
                  src={diamondmining1}
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                  alt=""
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
                  src={processedOre}
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                  alt=""
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
                <Image
                  src={heartDiamondGif}
                  alt="diamond picture"
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[625px] w-full transition duration-500"
                />
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
                  src={diamondCollection1}
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                  alt=""
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
                  src={manufacturingDiamond}
                  className="group-hover:origin-center group-hover:scale-110 group-hover:rotate-3 h-[300px] w-full transition duration-500"
                  alt=""
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
