import React from "react";
import Image from "next/image";
import { getCldImageUrl } from 'next-cloudinary';

const Welcome = () => {
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
      <section className="flex flex-col w-full gap-24 pb-20 @container">
        <div className="relative w-full h-[26rem]">
          <Image
            width="1920"
            height="600"
            className="w-full h-full object-cover"
            src={getImageURL(600, 1920, 'blue-spark/company/company')}
            alt="company interior"
            priority
            sizes="100vw"
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
        <div className="relative mt-20 px-4 @[1010px]:mt-40 @[600px]:px-8 @[800px]:px-12 @[1250px]:px-20">
          <div className="grid @[1000px]:grid-cols-2 w-full gap-5 @[1000px]:gap-12 mt-5 @[1250px]:gap-16 @[1400px]:gap-20 place-items-center">
            <div className="">
              <h1 className="absolute uppercase -top-3 left-4 text-[3em] lg:text-[100px] text-gray-900 font-bold @[600px]:left-8 @[800px]:left-12 opacity-5 md:block hidden @[1010px]:-top-16 @[1250px]:left-20 @[1300px]:-top-[4rem] @[1430px]:-top-[3rem]">
                About Us
              </h1>
              <h1 className="text-3xl font-bold md:text-5xl text-yellow-600">
                Welcome to our site
              </h1>
              <p className="text-base leading-7 text-gray-500 text-justify mt-3">
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
            </div>
            <div className="w-full">
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
