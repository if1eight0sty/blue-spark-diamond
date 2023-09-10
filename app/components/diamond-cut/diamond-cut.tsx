"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";

import asscher from "@/public/diamond-cuts/asscher-cut.webp";
import cushion from "@/public/diamond-cuts/cushion-cut.webp";
import emerald from "@/public/diamond-cuts/emerald-cut.webp";
import heart from "@/public/diamond-cuts/heart-cut.webp";
import marquise from "@/public/diamond-cuts/marquise-cut.webp";
import pear from "@/public/diamond-cuts/pear-cut.webp";
import princess from "@/public/diamond-cuts/princess-cut.webp";
import round from "@/public/diamond-cuts/round-cut.webp";
import oval from "@/public/diamond-cuts/oval-cut.webp";
import logo from "@/public/logos/logo-white.png";

const DiamondCut = () => {
  const smallImages = [
    { id: "Blue Spark Diamond", src: logo },
    { id: "asscher", src: asscher },
    { id: "cushion", src: cushion },
    { id: "emerald", src: emerald },
    { id: "marquise", src: marquise },
    { id: "princess", src: princess },
    { id: "heart", src: heart },
    { id: "pear", src: pear },
    { id: "round", src: round },
    { id: "oval", src: oval },
  ];

  return (
    <>
      <section className="flex flex-col items-center justify-center overflow-hidden bg-gray-800 py-16 font-poppins dark:bg-gray-800 isolate">
        <div className="text-center my-10">
          <span className="block mb-4 text-xs font-semibold leading-4 tracking-widest text-center text-blue-500 uppercase dark:text-gray-400">
            Diamond
          </span>
          <h1 className="text-3xl font-bold capitalize text-white">
            Cut and Shape
          </h1>
        </div>
        <Swiper
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
                  src={image.src}
                  alt={`${image.id}-cut-diamond`}
                  title={`${image.id}-cut-diamond`}
                  style={{ width: "auto" }}
                  className="h-[10em] object-cover"
                />
                <p className="text-white text-center text-lg font-medium capitalize">
                  {image.id}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default DiamondCut;
