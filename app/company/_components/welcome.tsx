import React from "react";
import Image from "next/image";

import company from "@/public/company.webp";

const Welcome = () => {
  return (
    <>
      <section className="flex flex-col w-full gap-24 pb-20">
        <div className="relative w-full h-[26rem] mb-20">
          <Image
            className="w-full h-full object-cover"
            src={company}
            alt="company interior"
            priority
          />
          <div className="flex flex-col md:flex-row justify-between relative">
            <p className="uppercase text-yellow-600 max-w-xs lg:max-w-sm text-5xl lg:text-[6rem] sm:font-bold font-black absolute -top-[4.5rem] lg:-top-36 left-10 md:left-20">
              Shape Earth&apos;s Treasures
            </p>
            {/* Tag line section */}
            <div className="hidden xl:flex gap-5 absolute right-10 lg:right-20 top-5">
              <div className="flex flex-col">
                <p className="uppercase text-yellow-600 font-black text-xl">
                  Rough Importer
                </p>
                <p className="uppercase text-yellow-600 font-black text-xl">
                  International Market
                </p>
              </div>
              <div className="flex flex-col">
                <p className="uppercase text-yellow-600 font-black text-xl">
                  Authorized Outlet
                </p>
                <p className="uppercase text-yellow-600 font-black text-xl">
                  Fast Delivery
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-20 ml-20">
          <h1 className="absolute -top-20 uppercase left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">
            About Us
          </h1>
          <h1 className="pl-2 text-3xl font-bold md:text-5xl text-yellow-600 dark:text-white absolute left-5 -top-8">
            Welcome to our site
          </h1>
          <div className="flex justify-between w-full gap-5">
            <p className="text-base mt-14 lg:max-w-lg leading-7 text-gray-500 dark:text-gray-400 text-justify">
              Diamond&apos;s characteristic chemical composition and crystal
              structure make it a unique member of the mineral kingdom. Diamonds
              are one of the most complex and beautiful creations of nature. The
              crystalline beauty of diamonds is a thing of wonder and
              appreciation. Owning a diamond is a very exclusive feeling of
              pride. Formed billions of years ago, under extreme heat and
              pressure, diamonds are the purest form of transparent carbon. It
              takes decades of very intensive and intricate processes to make an
              economical diamond deposit discovery. Such is the Greek Word its
              name is derived from; Ad&aacute;mas &mdash; Unconquerable or
              Invincible.
            </p>
            <div className="w-full px-4 mb-10 mr-10 lg:w-1/2 lg:mb-0">
              <div className="relative isolate">
                {/* <iframe
                  width="420"
                  height="315"
                  src="https://youtube.com/embed/dphEntkbi0I?autoplay=1&controls=0"
                  className="relative z-40 object-cover w-full h-80 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                ></iframe> */}
                <video
                  className="relative z-40 object-cover w-full h-80 lg:rounded-tr-[80px] lg:rounded-bl-[80px] rounded"
                  controls
                >
                  <source
                    src="/videos/blue-spark-diamond.mp4"
                    type="video/mp4"
                  />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute z-10 hidden w-full h-full bg-yellow-600 rounded-bl-[80px] rounded -bottom-6 right-6 lg:block"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Welcome;
