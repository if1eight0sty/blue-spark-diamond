"use client";
import React from "react";
import Image from "next/image";

import { getCldImageUrl } from "next-cloudinary";

const DiamondCut = () => {
  const getImageURL = (height: number, width: number, src: string) => {
    return getCldImageUrl({
      width,
      height,
      src,
    });
  };

  const smallImages = [
    {
      id: "asscher",
      src: getImageURL(200, 300, "blue-spark/diamond-cuts/asscher-cut"),
    },
    {
      id: "cushion",
      src: getImageURL(200, 300, "blue-spark/diamond-cuts/cushion-cut"),
    },
    {
      id: "emerald",
      src: getImageURL(200, 300, "blue-spark/diamond-cuts/emerald-cut"),
    },
    {
      id: "marquise",
      src: getImageURL(200, 300, "blue-spark/diamond-cuts/marquise-cut"),
    },
    {
      id: "princess",
      src: getImageURL(200, 300, "blue-spark/diamond-cuts/princess-cut"),
    },
    {
      id: "heart",
      src: getImageURL(200, 300, "blue-spark/diamond-cuts/heart-cut"),
    },
    {
      id: "pear",
      src: getImageURL(200, 300, "blue-spark/diamond-cuts/pear-cut"),
    },
    {
      id: "round",
      src: getImageURL(200, 300, "blue-spark/diamond-cuts/round-cut"),
    },
    {
      id: "oval",
      src: getImageURL(200, 300, "blue-spark/diamond-cuts/oval-cut"),
    },
  ];

  return (
    <>
      <section className="flex flex-col items-center justify-center overflow-hidden bg-white font-poppins dark:bg-gray-400 isolate min-h-[70dvh]">
        <div className="max-w-xl mx-auto text-gray-900 dark:text-white">
          <h1 className="mb-4 text-3xl font-bold text-center">Cut and Shape</h1>
          <p className="mb-16 text-base text-center mx-10">
            Diamonds from Blue Spark are pure from every angle, from its cutting
            to its clarity
          </p>
        </div>
        {/* image section */}
        <div className="grid grid-cols-3 gap-10 md:gap-14 lg:gap-10 sm:grid-cols-3 lg:grid-cols-9 mt-10 bg-[#F7F6F2] p-10 md:p-20 lg:p-10  rounded-xl drop-shadow-md">
          {smallImages.map((image) => (
            <div
              key={image.id}
              className="flex-shrink-0"
              data-aos="zoom-in"
              data-aos-duration="1000"
            >
              <Image
                width="200"
                height="200"
                src={image.src}
                style={{ width: "auto" }}
                title={`${image.id}-cut-diamond`}
                alt={`${image.id}`}
                loading="lazy"
                property=""
                className="h-[4em] object-fill"
              />
              <p className="text-black/60 text-center text-sm font-medium lowercase">
                {image.id}
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DiamondCut;
