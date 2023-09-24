"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    // {
    //   id: "Blue Spark Diamond",
    //   src: getImageURL(200, 400, "blue-spark/logos/logo-white"),
    // },
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
      <section className="flex flex-col items-center justify-center overflow-hidden bg-gray-800 py-16 font-poppins dark:bg-gray-800 isolate min-h-[95dvh]">
        <div className="text-center my-10">
          <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
            Diamond
          </span>
          <h1 className="text-3xl font-bold capitalize text-white">
            Cut and Shape
          </h1>
        </div>
        {/* <Swiper
          effect={"coverflow"}
          loop={true}
          loopedSlides={4}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={4}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          {smallImages.map((image) => (
            <SwiperSlide key={image.id}>
              <Link
                href="/product"
                className="flex flex-col gap-2 justify-center items-center bg-gray-800 h-full scale-95"
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
                  className="h-[10em] object-fill"
                />
                <p className="text-white text-center text-lg font-medium capitalize">
                  {image.id}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper> */}
        <div className="flex flex-col gap-5">
          {smallImages.map((image) => (
            <div key={image.id}>
              <Link
                href="/product"
                className="flex flex-col gap-2 justify-center items-center bg-gray-800 h-full scale-95"
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
                <p className="text-white text-center text-lg font-medium capitalize">
                  {image.id}
                </p>
              </Link>
              
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default DiamondCut;
